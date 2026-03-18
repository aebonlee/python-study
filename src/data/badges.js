export const badges = [
  // === Bronze Tier (Bronze - 기본 활동) ===
  {
    id: 'first-step',
    title: '첫 발자국',
    description: '첫 번째 레슨을 완료하세요',
    icon: 'fa-solid fa-shoe-prints',
    tier: 'bronze',
    condition: { type: 'lessons_completed', count: 1 }
  },
  {
    id: 'hello-world',
    title: 'Hello World!',
    description: 'Hello Python 레슨을 완료하세요',
    icon: 'fa-solid fa-hand',
    tier: 'bronze',
    condition: { type: 'specific_lessons', lessonIds: ['hello-python'] }
  },
  {
    id: 'code-runner',
    title: '코드 실행자',
    description: '코드를 10번 실행하세요',
    icon: 'fa-solid fa-play',
    tier: 'bronze',
    condition: { type: 'code_runs', count: 10 }
  },
  {
    id: 'five-lessons',
    title: '다섯 고개',
    description: '레슨 5개를 완료하세요',
    icon: 'fa-solid fa-hand-peace',
    tier: 'bronze',
    condition: { type: 'lessons_completed', count: 5 }
  },
  {
    id: 'first-quiz',
    title: '첫 시험',
    description: '기초 퀴즈를 통과하세요',
    icon: 'fa-solid fa-pencil',
    tier: 'bronze',
    condition: { type: 'quiz_passed', quizId: 'basics', minScore: 70 }
  },

  // === Silver Tier (실버 - 단계별 성취) ===
  {
    id: 'basics-master',
    title: '기초 마스터',
    description: '기초 과정을 모두 완료하세요',
    icon: 'fa-solid fa-seedling',
    tier: 'silver',
    condition: { type: 'level_completed', level: 'basics' }
  },
  {
    id: 'ten-lessons',
    title: '열정 학습자',
    description: '레슨 10개를 완료하세요',
    icon: 'fa-solid fa-fire',
    tier: 'silver',
    condition: { type: 'lessons_completed', count: 10 }
  },
  {
    id: 'code-addict',
    title: '코딩 중독',
    description: '코드를 50번 실행하세요',
    icon: 'fa-solid fa-laptop-code',
    tier: 'silver',
    condition: { type: 'code_runs', count: 50 }
  },
  {
    id: 'streak-3',
    title: '3일 연속 학습',
    description: '3일 연속으로 학습하세요',
    icon: 'fa-solid fa-calendar-day',
    tier: 'silver',
    condition: { type: 'streak', days: 3 }
  },
  {
    id: 'oop-hero',
    title: 'OOP 히어로',
    description: 'OOP 관련 레슨을 모두 완료하세요',
    icon: 'fa-solid fa-cubes',
    tier: 'silver',
    condition: { type: 'specific_lessons', lessonIds: ['oop-basics', 'oop-advanced'] }
  },
  {
    id: 'intermediate-quiz',
    title: '중급 도전자',
    description: '중급 퀴즈를 통과하세요',
    icon: 'fa-solid fa-bullseye',
    tier: 'silver',
    condition: { type: 'quiz_passed', quizId: 'intermediate', minScore: 70 }
  },

  // === Gold Tier (골드 - 고급 성취) ===
  {
    id: 'intermediate-master',
    title: '중급 마스터',
    description: '중급 과정을 모두 완료하세요',
    icon: 'fa-solid fa-rocket',
    tier: 'gold',
    condition: { type: 'level_completed', level: 'intermediate' }
  },
  {
    id: 'advanced-master',
    title: '고급 마스터',
    description: '고급 과정을 모두 완료하세요',
    icon: 'fa-solid fa-bolt',
    tier: 'gold',
    condition: { type: 'level_completed', level: 'advanced' }
  },
  {
    id: 'data-scientist',
    title: '데이터 과학자',
    description: '응용 과정을 모두 완료하세요',
    icon: 'fa-solid fa-microscope',
    tier: 'gold',
    condition: { type: 'level_completed', level: 'applied' }
  },
  {
    id: 'numpy-pandas',
    title: 'NumPy & Pandas',
    description: 'NumPy와 Pandas 레슨을 모두 완료하세요',
    icon: 'fa-solid fa-table',
    tier: 'gold',
    condition: { type: 'specific_lessons', lessonIds: ['numpy-basics', 'numpy-advanced', 'pandas-basics', 'pandas-manipulation'] }
  },
  {
    id: 'ml-master',
    title: 'ML 마스터',
    description: 'Scikit-learn과 데이터 시각화 레슨을 완료하세요',
    icon: 'fa-solid fa-brain',
    tier: 'gold',
    condition: { type: 'specific_lessons', lessonIds: ['matplotlib-seaborn', 'scikit-learn'] }
  },
  {
    id: 'dl-explorer',
    title: '딥러닝 탐험가',
    description: 'TensorFlow/PyTorch 레슨을 완료하세요',
    icon: 'fa-solid fa-network-wired',
    tier: 'gold',
    condition: { type: 'specific_lessons', lessonIds: ['tensorflow-pytorch'] }
  },
  {
    id: 'perfect-basics',
    title: '기초 만점왕',
    description: '기초 퀴즈에서 만점을 받으세요',
    icon: 'fa-solid fa-check-double',
    tier: 'gold',
    condition: { type: 'quiz_perfect', quizId: 'basics' }
  },
  {
    id: 'streak-7',
    title: '일주일 연속 학습',
    description: '7일 연속으로 학습하세요',
    icon: 'fa-solid fa-calendar-week',
    tier: 'gold',
    condition: { type: 'streak', days: 7 }
  },
  {
    id: 'twenty-lessons',
    title: '스무 고개 돌파',
    description: '레슨 20개를 완료하세요',
    icon: 'fa-solid fa-medal',
    tier: 'gold',
    condition: { type: 'lessons_completed', count: 20 }
  },
  {
    id: 'code-master',
    title: '코드 장인',
    description: '코드를 100번 실행하세요',
    icon: 'fa-solid fa-keyboard',
    tier: 'gold',
    condition: { type: 'code_runs', count: 100 }
  },

  // === Platinum Tier (플래티넘 - 최고 성취) ===
  {
    id: 'all-clear',
    title: '전과정 클리어',
    description: '모든 과정의 레슨을 완료하세요',
    icon: 'fa-solid fa-crown',
    tier: 'platinum',
    condition: { type: 'all_completed' }
  },
  {
    id: 'quiz-champion',
    title: '퀴즈 챔피언',
    description: '모든 퀴즈를 통과하세요',
    icon: 'fa-solid fa-trophy',
    tier: 'platinum',
    condition: { type: 'all_quizzes_passed' }
  },
  {
    id: 'perfect-master',
    title: '퍼펙트 마스터',
    description: '모든 퀴즈에서 만점을 받으세요',
    icon: 'fa-solid fa-gem',
    tier: 'platinum',
    condition: { type: 'all_quizzes_perfect' }
  },
  {
    id: 'streak-30',
    title: '30일 챌린지',
    description: '30일 연속으로 학습하세요',
    icon: 'fa-solid fa-star',
    tier: 'platinum',
    condition: { type: 'streak', days: 30 }
  }
]
