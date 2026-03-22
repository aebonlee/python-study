export const badges = [
  // === Bronze Tier (Bronze - 기본 활동) ===
  {
    id: 'first-step',
    title: '첫 발자국', titleEn: 'First Steps',
    description: '첫 번째 레슨을 완료하세요', descriptionEn: 'Complete your first lesson',
    icon: 'fa-solid fa-shoe-prints', tier: 'bronze',
    condition: { type: 'lessons_completed', count: 1 }
  },
  {
    id: 'hello-world',
    title: 'Hello World!', titleEn: 'Hello World!',
    description: 'Hello Python 레슨을 완료하세요', descriptionEn: 'Complete the Hello Python lesson',
    icon: 'fa-solid fa-hand', tier: 'bronze',
    condition: { type: 'specific_lessons', lessonIds: ['hello-python'] }
  },
  {
    id: 'code-runner',
    title: '코드 실행자', titleEn: 'Code Runner',
    description: '코드를 10번 실행하세요', descriptionEn: 'Run code 10 times',
    icon: 'fa-solid fa-play', tier: 'bronze',
    condition: { type: 'code_runs', count: 10 }
  },
  {
    id: 'five-lessons',
    title: '다섯 고개', titleEn: 'Five Milestones',
    description: '레슨 5개를 완료하세요', descriptionEn: 'Complete 5 lessons',
    icon: 'fa-solid fa-hand-peace', tier: 'bronze',
    condition: { type: 'lessons_completed', count: 5 }
  },
  {
    id: 'first-quiz',
    title: '첫 시험', titleEn: 'First Exam',
    description: '기초 퀴즈를 통과하세요', descriptionEn: 'Pass the basics quiz',
    icon: 'fa-solid fa-pencil', tier: 'bronze',
    condition: { type: 'quiz_passed', quizId: 'basics', minScore: 70 }
  },
  {
    id: 'lib-first-quiz',
    title: '라이브러리 입문', titleEn: 'Library Intro',
    description: '표준 라이브러리 퀴즈를 통과하세요', descriptionEn: 'Pass the standard library quiz',
    icon: 'fa-solid fa-terminal', tier: 'bronze',
    condition: { type: 'quiz_passed', quizId: 'lib-standard', minScore: 70 }
  },

  // === Silver Tier ===
  {
    id: 'basics-master',
    title: '기초 마스터', titleEn: 'Basics Master',
    description: '기초 과정을 모두 완료하세요', descriptionEn: 'Complete all basics lessons',
    icon: 'fa-solid fa-seedling', tier: 'silver',
    condition: { type: 'level_completed', level: 'basics' }
  },
  {
    id: 'ten-lessons',
    title: '열정 학습자', titleEn: 'Passionate Learner',
    description: '레슨 10개를 완료하세요', descriptionEn: 'Complete 10 lessons',
    icon: 'fa-solid fa-fire', tier: 'silver',
    condition: { type: 'lessons_completed', count: 10 }
  },
  {
    id: 'code-addict',
    title: '코딩 중독', titleEn: 'Code Addict',
    description: '코드를 50번 실행하세요', descriptionEn: 'Run code 50 times',
    icon: 'fa-solid fa-laptop-code', tier: 'silver',
    condition: { type: 'code_runs', count: 50 }
  },
  {
    id: 'streak-3',
    title: '3일 연속 학습', titleEn: '3-Day Streak',
    description: '3일 연속으로 학습하세요', descriptionEn: 'Study for 3 consecutive days',
    icon: 'fa-solid fa-calendar-day', tier: 'silver',
    condition: { type: 'streak', days: 3 }
  },
  {
    id: 'oop-hero',
    title: 'OOP 히어로', titleEn: 'OOP Hero',
    description: 'OOP 관련 레슨을 모두 완료하세요', descriptionEn: 'Complete all OOP lessons',
    icon: 'fa-solid fa-cubes', tier: 'silver',
    condition: { type: 'specific_lessons', lessonIds: ['oop-basics', 'oop-advanced'] }
  },
  {
    id: 'intermediate-quiz',
    title: '중급 도전자', titleEn: 'Intermediate Challenger',
    description: '중급 퀴즈를 통과하세요', descriptionEn: 'Pass the intermediate quiz',
    icon: 'fa-solid fa-bullseye', tier: 'silver',
    condition: { type: 'quiz_passed', quizId: 'intermediate', minScore: 70 }
  },
  {
    id: 'turtle-quiz',
    title: '거북이 마스터', titleEn: 'Turtle Master',
    description: 'Turtle 그래픽 퀴즈를 통과하세요', descriptionEn: 'Pass the Turtle Graphics quiz',
    icon: 'fa-solid fa-pen-ruler', tier: 'silver',
    condition: { type: 'quiz_passed', quizId: 'lib-turtle', minScore: 70 }
  },
  {
    id: 'lib-data-quiz',
    title: '데이터 분석 도전자', titleEn: 'Data Analysis Challenger',
    description: '데이터 분석 퀴즈를 통과하세요', descriptionEn: 'Pass the data analysis quiz',
    icon: 'fa-solid fa-chart-pie', tier: 'silver',
    condition: { type: 'quiz_passed', quizId: 'lib-data', minScore: 70 }
  },

  // === Gold Tier ===
  {
    id: 'intermediate-master',
    title: '중급 마스터', titleEn: 'Intermediate Master',
    description: '중급 과정을 모두 완료하세요', descriptionEn: 'Complete all intermediate lessons',
    icon: 'fa-solid fa-rocket', tier: 'gold',
    condition: { type: 'level_completed', level: 'intermediate' }
  },
  {
    id: 'advanced-master',
    title: '고급 마스터', titleEn: 'Advanced Master',
    description: '고급 과정을 모두 완료하세요', descriptionEn: 'Complete all advanced lessons',
    icon: 'fa-solid fa-bolt', tier: 'gold',
    condition: { type: 'level_completed', level: 'advanced' }
  },
  {
    id: 'data-scientist',
    title: '데이터 과학자', titleEn: 'Data Scientist',
    description: '응용 과정을 모두 완료하세요', descriptionEn: 'Complete all applied lessons',
    icon: 'fa-solid fa-microscope', tier: 'gold',
    condition: { type: 'level_completed', level: 'applied' }
  },
  {
    id: 'numpy-pandas',
    title: 'NumPy & Pandas', titleEn: 'NumPy & Pandas',
    description: 'NumPy와 Pandas 레슨을 모두 완료하세요', descriptionEn: 'Complete all NumPy & Pandas lessons',
    icon: 'fa-solid fa-table', tier: 'gold',
    condition: { type: 'specific_lessons', lessonIds: ['numpy-basics', 'numpy-advanced', 'pandas-basics', 'pandas-manipulation'] }
  },
  {
    id: 'ml-master',
    title: 'ML 마스터', titleEn: 'ML Master',
    description: 'Scikit-learn과 데이터 시각화 레슨을 완료하세요', descriptionEn: 'Complete Scikit-learn and data visualization lessons',
    icon: 'fa-solid fa-brain', tier: 'gold',
    condition: { type: 'specific_lessons', lessonIds: ['matplotlib-seaborn', 'scikit-learn'] }
  },
  {
    id: 'dl-explorer',
    title: '딥러닝 탐험가', titleEn: 'Deep Learning Explorer',
    description: 'TensorFlow/PyTorch 레슨을 완료하세요', descriptionEn: 'Complete TensorFlow/PyTorch lesson',
    icon: 'fa-solid fa-network-wired', tier: 'gold',
    condition: { type: 'specific_lessons', lessonIds: ['tensorflow-pytorch'] }
  },
  {
    id: 'perfect-basics',
    title: '기초 만점왕', titleEn: 'Perfect Basics',
    description: '기초 퀴즈에서 만점을 받으세요', descriptionEn: 'Score 100% on the basics quiz',
    icon: 'fa-solid fa-check-double', tier: 'gold',
    condition: { type: 'quiz_perfect', quizId: 'basics' }
  },
  {
    id: 'streak-7',
    title: '일주일 연속 학습', titleEn: '7-Day Streak',
    description: '7일 연속으로 학습하세요', descriptionEn: 'Study for 7 consecutive days',
    icon: 'fa-solid fa-calendar-week', tier: 'gold',
    condition: { type: 'streak', days: 7 }
  },
  {
    id: 'twenty-lessons',
    title: '스무 고개 돌파', titleEn: 'Twenty Milestones',
    description: '레슨 20개를 완료하세요', descriptionEn: 'Complete 20 lessons',
    icon: 'fa-solid fa-medal', tier: 'gold',
    condition: { type: 'lessons_completed', count: 20 }
  },
  {
    id: 'code-master',
    title: '코드 장인', titleEn: 'Code Craftsman',
    description: '코드를 100번 실행하세요', descriptionEn: 'Run code 100 times',
    icon: 'fa-solid fa-keyboard', tier: 'gold',
    condition: { type: 'code_runs', count: 100 }
  },
  {
    id: 'lib-ai-quiz',
    title: 'AI 탐험가', titleEn: 'AI Explorer',
    description: 'AI/머신러닝 퀴즈를 통과하세요', descriptionEn: 'Pass the AI/ML quiz',
    icon: 'fa-solid fa-brain', tier: 'gold',
    condition: { type: 'quiz_passed', quizId: 'lib-ai', minScore: 70 }
  },
  {
    id: 'lib-perfect-standard',
    title: '표준 라이브러리 만점', titleEn: 'Perfect Standard Library',
    description: '표준 라이브러리 퀴즈에서 만점을 받으세요', descriptionEn: 'Score 100% on the standard library quiz',
    icon: 'fa-solid fa-terminal', tier: 'gold',
    condition: { type: 'quiz_perfect', quizId: 'lib-standard' }
  },
  {
    id: 'lib-all-passed',
    title: '라이브러리 정복자', titleEn: 'Library Conqueror',
    description: '라이브러리 퀴즈 4개를 모두 통과하세요', descriptionEn: 'Pass all 4 library quizzes',
    icon: 'fa-solid fa-book-open', tier: 'gold',
    condition: { type: 'lib_quizzes_passed' }
  },

  // === Platinum Tier ===
  {
    id: 'all-clear',
    title: '전과정 클리어', titleEn: 'All Clear',
    description: '모든 과정의 레슨을 완료하세요', descriptionEn: 'Complete all lessons in every course',
    icon: 'fa-solid fa-crown', tier: 'platinum',
    condition: { type: 'all_completed' }
  },
  {
    id: 'quiz-champion',
    title: '퀴즈 챔피언', titleEn: 'Quiz Champion',
    description: '모든 퀴즈를 통과하세요', descriptionEn: 'Pass all quizzes',
    icon: 'fa-solid fa-trophy', tier: 'platinum',
    condition: { type: 'all_quizzes_passed' }
  },
  {
    id: 'perfect-master',
    title: '퍼펙트 마스터', titleEn: 'Perfect Master',
    description: '모든 퀴즈에서 만점을 받으세요', descriptionEn: 'Score 100% on every quiz',
    icon: 'fa-solid fa-gem', tier: 'platinum',
    condition: { type: 'all_quizzes_perfect' }
  },
  {
    id: 'lib-all-perfect',
    title: '라이브러리 퍼펙트', titleEn: 'Library Perfect',
    description: '라이브러리 퀴즈 4개에서 모두 만점을 받으세요', descriptionEn: 'Score 100% on all 4 library quizzes',
    icon: 'fa-solid fa-award', tier: 'platinum',
    condition: { type: 'lib_quizzes_perfect' }
  },
  {
    id: 'streak-30',
    title: '30일 챌린지', titleEn: '30-Day Challenge',
    description: '30일 연속으로 학습하세요', descriptionEn: 'Study for 30 consecutive days',
    icon: 'fa-solid fa-star', tier: 'platinum',
    condition: { type: 'streak', days: 30 }
  }
]
