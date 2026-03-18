/* Pyodide Web Worker - runs Python code in browser via WASM */

let pyodide = null;
let loading = false;
const PYODIDE_CDN = 'https://cdn.jsdelivr.net/pyodide/v0.27.0/full/';

/* ── Browser-compatible turtle mock (SVG renderer) ── */
const TURTLE_MOCK = `
import math as _math

class _Screen:
    _instance = None
    def __init__(self):
        self._width = 600
        self._height = 400
        self._bgcolor = 'white'
        self._title = ''
    def setup(self, width=600, height=400, startx=None, starty=None):
        self._width = width
        self._height = height
    def bgcolor(self, *args):
        if args:
            self._bgcolor = args[0] if len(args) == 1 else args
        return self._bgcolor
    def title(self, t=''):
        self._title = t
    def tracer(self, *a, **kw): pass
    def update(self): pass
    def bye(self): pass
    def exitonclick(self):
        _render_svg()
    def mainloop(self):
        _render_svg()
    def textinput(self, title, prompt):
        return 'test'
    def numinput(self, title, prompt, default=None, minval=None, maxval=None):
        return default or 0
    def listen(self): pass
    def onkey(self, fun, key): pass
    def onkeypress(self, fun, key): pass
    def onclick(self, fun, btn=1, add=None): pass
    def onscreenclick(self, fun, btn=1, add=None): pass
    def ontimer(self, fun, t=0): pass
    def onrelease(self, fun, btn=1, add=None): pass
    def window_width(self): return self._width
    def window_height(self): return self._height
    def clear(self): pass
    def reset(self): pass
    def screensize(self, canvwidth=None, canvheight=None, bg=None):
        if canvwidth: self._width = canvwidth
        if canvheight: self._height = canvheight
        if bg: self._bgcolor = bg
        return self._width, self._height

def Screen():
    if _Screen._instance is None:
        _Screen._instance = _Screen()
    return _Screen._instance

_turtles = []
_rendered = False

def _color_to_str(c):
    if isinstance(c, tuple):
        if all(isinstance(v, float) and 0 <= v <= 1 for v in c):
            return 'rgb({},{},{})'.format(int(c[0]*255), int(c[1]*255), int(c[2]*255))
        return 'rgb({},{},{})'.format(int(c[0]), int(c[1]), int(c[2]))
    return str(c) if c else 'black'

class Turtle:
    def __init__(self):
        self._x = 0.0
        self._y = 0.0
        self._heading = 0.0
        self._pen_down = True
        self._pen_color = 'black'
        self._fill_color = ''
        self._pen_width = 1
        self._speed_val = 3
        self._filling = False
        self._fill_path = []
        self._elements = []
        self._visible = True
        _turtles.append(self)

    # ── Movement ──
    def forward(self, d):
        rad = _math.radians(self._heading)
        nx = self._x + d * _math.cos(rad)
        ny = self._y + d * _math.sin(rad)
        if self._pen_down:
            self._elements.append(('line', self._x, self._y, nx, ny,
                                   _color_to_str(self._pen_color), self._pen_width))
        if self._filling:
            self._fill_path.append((nx, ny))
        self._x, self._y = nx, ny
    fd = forward

    def backward(self, d):
        self.forward(-d)
    bk = back = backward

    def right(self, a):
        self._heading -= a
    rt = right

    def left(self, a):
        self._heading += a
    lt = left

    def goto(self, x, y=None):
        if y is None:
            try: x, y = x
            except TypeError: raise TypeError("goto requires 2 arguments or a pair")
        if self._pen_down:
            self._elements.append(('line', self._x, self._y, float(x), float(y),
                                   _color_to_str(self._pen_color), self._pen_width))
        if self._filling:
            self._fill_path.append((float(x), float(y)))
        self._x, self._y = float(x), float(y)
    setpos = setposition = goto

    def setheading(self, angle):
        self._heading = angle
    seth = setheading

    def home(self):
        self.goto(0, 0)
        self._heading = 0

    def circle(self, radius, extent=None, steps=None):
        if extent is None:
            extent = 360
        frac = abs(extent) / 360.0
        n = steps or max(1, int(round(abs(extent) / 3)))
        w = 1.0 * extent / n
        w2 = 0.5 * w
        l = 2.0 * abs(radius) * _math.sin(_math.radians(w2))
        if radius < 0:
            l, w, w2 = -l, -w, -w2
        for _ in range(n):
            self._heading += w2
            self.forward(l)
            self._heading += w2

    def dot(self, size=None, color=None):
        s = size or max(self._pen_width + 4, 2 * self._pen_width)
        c = _color_to_str(color) if color else _color_to_str(self._pen_color)
        self._elements.append(('dot', self._x, self._y, s, c))

    def stamp(self):
        pass

    # ── Pen ──
    def penup(self):
        self._pen_down = False
    pu = up = penup

    def pendown(self):
        self._pen_down = True
    pd = down = pendown

    def isdown(self):
        return self._pen_down

    def width(self, w=None):
        if w is not None:
            self._pen_width = w
        return self._pen_width
    pensize = width

    def pen(self, pen=None, **kw):
        if pen: kw.update(pen)
        if 'pencolor' in kw: self._pen_color = kw['pencolor']
        if 'fillcolor' in kw: self._fill_color = kw['fillcolor']
        if 'pensize' in kw: self._pen_width = kw['pensize']
        if 'pendown' in kw: self._pen_down = kw['pendown']
        if 'speed' in kw: self._speed_val = kw['speed']

    def speed(self, s=None):
        if s is not None:
            self._speed_val = s
        return self._speed_val

    def color(self, *args):
        if len(args) == 0:
            return (_color_to_str(self._pen_color), _color_to_str(self._fill_color))
        elif len(args) == 1:
            self._pen_color = args[0]
            self._fill_color = args[0]
        elif len(args) == 2:
            self._pen_color = args[0]
            self._fill_color = args[1]

    def pencolor(self, *args):
        if args:
            self._pen_color = args[0] if len(args) == 1 else args
        return _color_to_str(self._pen_color)

    def fillcolor(self, *args):
        if args:
            self._fill_color = args[0] if len(args) == 1 else args
        return _color_to_str(self._fill_color)

    def begin_fill(self):
        self._filling = True
        self._fill_path = [(self._x, self._y)]

    def end_fill(self):
        if self._filling and self._fill_path:
            self._elements.append(('fill', list(self._fill_path),
                                   _color_to_str(self._fill_color)))
        self._filling = False
        self._fill_path = []

    def filling(self):
        return self._filling

    # ── Visibility ──
    def hideturtle(self):
        self._visible = False
    ht = hideturtle
    def showturtle(self):
        self._visible = True
    st = showturtle
    def isvisible(self):
        return self._visible
    def shape(self, *a): pass

    # ── Info ──
    def position(self):
        return (self._x, self._y)
    pos = position
    def xcor(self): return self._x
    def ycor(self): return self._y
    def heading(self): return self._heading
    def towards(self, x, y=None):
        if y is None: x, y = x
        return _math.degrees(_math.atan2(y - self._y, x - self._x))
    def distance(self, x, y=None):
        if y is None: x, y = x
        return _math.sqrt((x - self._x)**2 + (y - self._y)**2)

    # ── Drawing ──
    def write(self, text, move=False, align='left', font=('Arial', 8, 'normal')):
        a = {'left': 'start', 'center': 'middle', 'right': 'end'}.get(align, 'start')
        fn, fs, fw = font if len(font) == 3 else ('Arial', 8, 'normal')
        self._elements.append(('text', self._x, self._y, str(text), a, fn, fs, fw,
                                _color_to_str(self._pen_color)))

    def clear(self):
        self._elements = []
    def reset(self):
        self._elements = []
        self._x = self._y = 0.0
        self._heading = 0.0
        self._pen_down = True
        self._pen_color = 'black'
        self._fill_color = ''
        self._pen_width = 1
    def undo(self): pass

# ── Module-level turtle shortcuts ──
_default_turtle = None
def _dt():
    global _default_turtle
    if _default_turtle is None:
        _default_turtle = Turtle()
    return _default_turtle

def forward(d): _dt().forward(d)
def fd(d): _dt().forward(d)
def backward(d): _dt().backward(d)
def bk(d): _dt().backward(d)
def back(d): _dt().backward(d)
def right(a): _dt().right(a)
def rt(a): _dt().right(a)
def left(a): _dt().left(a)
def lt(a): _dt().left(a)
def goto(x, y=None): _dt().goto(x, y)
def setpos(x, y=None): _dt().goto(x, y)
def setposition(x, y=None): _dt().goto(x, y)
def setheading(a): _dt().setheading(a)
def seth(a): _dt().setheading(a)
def home(): _dt().home()
def circle(r, extent=None, steps=None): _dt().circle(r, extent, steps)
def dot(size=None, color=None): _dt().dot(size, color)
def stamp(): _dt().stamp()
def penup(): _dt().penup()
def pu(): _dt().penup()
def up(): _dt().penup()
def pendown(): _dt().pendown()
def pd(): _dt().pendown()
def down(): _dt().pendown()
def width(w=None): return _dt().width(w)
def pensize(w=None): return _dt().width(w)
def speed(s=None): return _dt().speed(s)
def color(*a): return _dt().color(*a)
def pencolor(*a): return _dt().pencolor(*a)
def fillcolor(*a): return _dt().fillcolor(*a)
def begin_fill(): _dt().begin_fill()
def end_fill(): _dt().end_fill()
def filling(): return _dt().filling()
def hideturtle(): _dt().hideturtle()
def ht(): _dt().hideturtle()
def showturtle(): _dt().showturtle()
def st(): _dt().showturtle()
def shape(*a): pass
def isvisible(): return _dt().isvisible()
def position(): return _dt().position()
def pos(): return _dt().position()
def xcor(): return _dt().xcor()
def ycor(): return _dt().ycor()
def heading(): return _dt().heading()
def towards(x, y=None): return _dt().towards(x, y)
def distance(x, y=None): return _dt().distance(x, y)
def write(text, move=False, align='left', font=('Arial', 8, 'normal')): _dt().write(text, move, align, font)
def clear(): _dt().clear()
def reset(): _dt().reset()
def isdown(): return _dt().isdown()

def done():
    _render_svg()
def mainloop():
    _render_svg()
def exitonclick():
    _render_svg()
def bye(): pass
def delay(d=None): return 0
def tracer(*a, **kw): pass
def update(): pass
def title(t=''): Screen().title(t)
def setup(w=600, h=400, startx=None, starty=None): Screen().setup(w, h)
def bgcolor(*a): return Screen().bgcolor(*a)
def window_width(): return Screen().window_width()
def window_height(): return Screen().window_height()
def listen(): pass
def onkey(fun, key): pass
def onkeypress(fun, key): pass
def onclick(fun, btn=1, add=None): pass
def onscreenclick(fun, btn=1, add=None): pass
def ontimer(fun, t=0): pass
def onrelease(fun, btn=1, add=None): pass
def textinput(title, prompt): return 'test'
def numinput(title, prompt, **kw): return kw.get('default', 0)
def mode(m=None): return 'standard'

def _render_svg():
    global _rendered
    if _rendered:
        return
    _rendered = True
    scr = _Screen._instance or _Screen()
    w, h = scr._width, scr._height
    def tx(x): return round(w / 2 + x, 1)
    def ty(y): return round(h / 2 - y, 1)
    def esc(s):
        return str(s).replace('&','&amp;').replace('<','&lt;').replace('>','&gt;').replace('"','&quot;')
    parts = []
    parts.append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {} {}" '.format(w, h)
                 + 'style="max-width:100%;background:{};border:1px solid #d0d7de;border-radius:6px">'.format(esc(scr._bgcolor)))
    for t in _turtles:
        for el in t._elements:
            if el[0] == 'line':
                _, x1, y1, x2, y2, c, sw = el
                parts.append('<line x1="{}" y1="{}" x2="{}" y2="{}" stroke="{}" stroke-width="{}" stroke-linecap="round"/>'.format(
                    tx(x1), ty(y1), tx(x2), ty(y2), esc(c), sw))
            elif el[0] == 'fill':
                _, pts, c = el
                ps = ' '.join('{},{}'.format(tx(p[0]), ty(p[1])) for p in pts)
                parts.append('<polygon points="{}" fill="{}" stroke="none"/>'.format(ps, esc(c)))
            elif el[0] == 'dot':
                _, x, y, s, c = el
                parts.append('<circle cx="{}" cy="{}" r="{}" fill="{}"/>'.format(tx(x), ty(y), round(s/2,1), esc(c)))
            elif el[0] == 'text':
                _, x, y, txt, anchor, fn, fs, fw, c = el
                bold = ' font-weight="bold"' if fw == 'bold' else ''
                italic = ' font-style="italic"' if fw == 'italic' else ''
                parts.append('<text x="{}" y="{}" fill="{}" text-anchor="{}" font-family="{}" font-size="{}"{}{} dominant-baseline="auto">{}</text>'.format(
                    tx(x), ty(y), esc(c), anchor, esc(fn), fs, bold, italic, esc(txt)))
        if t._visible:
            rad = _math.radians(t._heading)
            tx0 = tx(t._x)
            ty0 = ty(t._y)
            dx1 = 10 * _math.cos(rad)
            dy1 = -10 * _math.sin(rad)
            dx2 = 5 * _math.cos(rad + 2.5)
            dy2 = -5 * _math.sin(rad + 2.5)
            dx3 = 5 * _math.cos(rad - 2.5)
            dy3 = -5 * _math.sin(rad - 2.5)
            parts.append('<polygon points="{},{} {},{} {},{}" fill="black" stroke="black" stroke-width="1"/>'.format(
                round(tx0+dx1,1), round(ty0+dy1,1),
                round(tx0+dx2,1), round(ty0+dy2,1),
                round(tx0+dx3,1), round(ty0+dy3,1)))
    parts.append('</svg>')
    print('__TURTLE_SVG__' + '\\n'.join(parts))

import atexit as _atexit
_atexit.register(_render_svg)
`;

const TURTLE_IMPORT_RE = /^\s*(import\s+turtle|from\s+turtle\s+import)/m;

async function loadPyodideRuntime() {
  if (pyodide) return pyodide;
  if (loading) {
    while (loading) {
      await new Promise(r => setTimeout(r, 100));
    }
    return pyodide;
  }
  loading = true;
  try {
    importScripts(PYODIDE_CDN + 'pyodide.js');
    pyodide = await loadPyodide({ indexURL: PYODIDE_CDN });
    return pyodide;
  } finally {
    loading = false;
  }
}

self.onmessage = async (e) => {
  const { id, code, inputs } = e.data;

  try {
    const py = await loadPyodideRuntime();

    /* Reset stdout/stderr */
    py.runPython(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`);

    /* Set stdin if inputs provided */
    if (inputs && inputs.length > 0) {
      const stdinData = inputs.join('\n') + '\n';
      py.runPython(`sys.stdin = io.StringIO(${JSON.stringify(stdinData)})`);
    }

    /* If code uses turtle, inject the SVG mock module */
    if (TURTLE_IMPORT_RE.test(code)) {
      py.runPython(`
import types, sys
_turtle_mod = types.ModuleType('turtle')
exec(${JSON.stringify(TURTLE_MOCK)}, _turtle_mod.__dict__)
sys.modules['turtle'] = _turtle_mod
del _turtle_mod
`);
    }

    try {
      py.runPython(code);
    } catch (runErr) {
      const stderr = py.runPython('sys.stderr.getvalue()');
      const stdout = py.runPython('sys.stdout.getvalue()');
      self.postMessage({
        id,
        success: false,
        output: stdout || '',
        stderr: stderr || runErr.message
      });
      return;
    }

    const stdout = py.runPython('sys.stdout.getvalue()');
    const stderr = py.runPython('sys.stderr.getvalue()');

    self.postMessage({
      id,
      success: !stderr,
      output: stdout || '',
      stderr: stderr || ''
    });
  } catch (err) {
    self.postMessage({
      id,
      success: false,
      output: '',
      stderr: err.message || 'Failed to load Python environment'
    });
  }
};
