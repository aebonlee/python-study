/* ── 파이썬 실습 단계 메타데이터 + 동적 로더 ── */

export const stepMeta = [
  { step: 1, icon: 'fa-solid fa-desktop', title: '파이썬 및 실습환경 안내', titleEn: 'Python Setup & Environment' },
  { step: 2, icon: 'fa-solid fa-keyboard', title: '입출력과 변수', titleEn: 'I/O & Variables' },
  { step: 3, icon: 'fa-solid fa-hashtag', title: 'Data Type과 산술연산', titleEn: 'Data Types & Arithmetic' },
  { step: 4, icon: 'fa-solid fa-clipboard-list', title: '입력-처리-출력 (IPO)', titleEn: 'IPO & PDC' },
  { step: 5, icon: 'fa-solid fa-palette', title: 'Turtle 그래픽 (기초)', titleEn: 'Turtle Graphics (Basics)' },
  { step: 6, icon: 'fa-solid fa-gamepad', title: 'Turtle 그래픽 (응용)', titleEn: 'Turtle Graphics (Advanced)' },
  { step: 7, icon: 'fa-solid fa-code-branch', title: 'IF 조건문', titleEn: 'Conditionals' },
  { step: 8, icon: 'fa-solid fa-repeat', title: '반복문 (While / For)', titleEn: 'Loops' },
  { step: 9, icon: 'fa-solid fa-gears', title: '함수와 매개변수', titleEn: 'Functions' },
  { step: 10, icon: 'fa-solid fa-shield-halved', title: '예외처리와 파일 I/O', titleEn: 'Exceptions & File I/O' },
  { step: 11, icon: 'fa-solid fa-table-cells', title: '리스트와 딕셔너리', titleEn: 'Lists & Dictionaries' },
  { step: 98, icon: 'fa-solid fa-bullseye', title: '심화 1 (GUI 기초)', titleEn: 'Advanced 1 (GUI Basics)' },
  { step: 99, icon: 'fa-solid fa-rocket', title: '심화 2 (GUI 응용 & 그래프)', titleEn: 'Advanced 2 (Apps & Charts)' },
];

export const stepLoaders = {
  1: () => import('./step1.js'),
  2: () => import('./step2.js'),
  3: () => import('./step3.js'),
  4: () => import('./step4.js'),
  5: () => import('./step5.js'),
  6: () => import('./step6.js'),
  7: () => import('./step7.js'),
  8: () => import('./step8.js'),
  9: () => import('./step9.js'),
  10: () => import('./step10.js'),
  11: () => import('./step11.js'),
  98: () => import('./stepAdvanced.js'),
  99: () => import('./stepAdvanced2.js'),
};
