'use strict';

const QUESTIONS = [
  {
    id: 'q1',
    text: '전 가족(부·모·자녀)이 모두 이사를 오시나요?',
    hint: '부모와 자녀 전원이 함께 이사하는 경우를 의미합니다.',
    options: ['예', '아니오']
  },
  {
    id: 'q2',
    text: '이사온 지역에서 부모 중 한 분이 세대주인가요?',
    hint: '주민등록등본 기준으로 세대주 여부를 확인합니다.',
    options: ['예', '아니오']
  },
  {
    id: 'q3',
    text: '현재 재학 중인 학교는 어느 지역에 있나요?',
    hint: '자녀가 현재 다니고 있는 고등학교의 소재지를 선택하세요.',
    options: ['천안', '아산', '충남 내 타시군(천안·아산 제외)', '충남 외 타시도']
  },
  {
    id: 'q4',
    text: '현재 거주하시는 지역은 어디인가요?',
    hint: '현재 주민등록상 거주지(이사 전 주소)를 선택하세요.',
    options: ['천안', '아산', '충남 내 타시군(천안·아산 제외)', '충남 외 타시도']
  },
  {
    id: 'q5',
    text: '이사 예정 혹은 이사온 지역은 어디인가요?',
    hint: '전학을 원하는 학교가 있는 이사 대상 지역을 선택하세요.',
    options: ['천안', '아산', '충남 내 타시군(천안·아산 제외)', '충남 외 타시도']
  },
  {
    id: 'q6',
    text: '중학교는 어디서 졸업하셨나요?',
    hint: '현재 재학 중인 학생의 중학교 졸업 지역을 선택하세요.',
    options: ['천안', '아산', '그 외 지역']
  },
  {
    id: 'q7',
    text: '재학 중인 학교는 어느 계열인가요?',
    hint: '현재 다니고 있는 고등학교의 유형을 선택하세요.',
    options: [
      '일반계(인문계)',
      '특성화고·예술고·체육고·마이스터고',
      '과학고·외국어고·국제고·영재고·자율형 사립고'
    ]
  }
];

const RESULTS = {
  T0: {
    badge: 'possible',
    label: '전학 가능',
    icon: '✓',
    title: '전학 조건 충족 — 담당자에게 연락하세요',
    detail: `<p>기본 조건이 충족되어 전입학이 가능합니다. 아래 서류를 준비하여 담당 학교 또는 교육청에 연락하세요.</p>
      <ul>
        <li><strong>교육감전형</strong> (천안·아산 일반계): 재학증명서 1부, 학교생활기록부 1부</li>
        <li><strong>학교장전형</strong> (그 외): 전·편입학 원서 1부, 재학/졸업증명서 1부</li>
      </ul>`
  },
  T1: {
    badge: 'impossible',
    label: '전학 불가',
    icon: '✕',
    title: '전 가족 이사 조건 미충족',
    detail: `<p>전입학을 위해서는 부·모·자녀 전 가족의 실거주 및 주민등록 이전이 필요합니다.</p>
      <p>가족 중 일부만 이사하는 경우에는 전입학이 원칙적으로 불가합니다.</p>`
  },
  T2: {
    badge: 'impossible',
    label: '전학 불가',
    icon: '✕',
    title: '세대주 조건 미충족',
    detail: `<p>이사한 지역에서 부모 중 한 분이 세대주로 등록되어 있어야 합니다.</p>
      <p>주민등록등본을 기준으로 확인하며, 세대주 조건이 충족되어야 전입학 신청이 가능합니다.</p>`
  },
  T3: {
    badge: 'impossible',
    label: '전학 불가',
    icon: '✕',
    title: '과학고·외고·국제고·영재고·자사고 해당',
    detail: `<p>과학고, 외국어고, 국제고, 영재고, 자율형 사립고는 일반적인 전입학 규정이 적용되지 않습니다.</p>
      <ul>
        <li>소재지 1년 거주 후 학교장 허가 시 가능</li>
        <li>전 가족 이전 시 가능한 경우 있음</li>
        <li>해당 학교 및 시·도 교육청에 별도 문의 필요</li>
      </ul>`
  },
  T4: {
    badge: 'conditional',
    label: '조건부 가능',
    icon: '⚠',
    title: '아산 전학 — 현 학교 소재지 6개월 이상 거주 필요',
    detail: `<p>충남 내 타시군 학교에서 아산으로 전학을 원하시는 경우, 거주 기간 조건이 있습니다.</p>
      <ul>
        <li>현 학교 소재지에서 <strong>6개월 이상 거주</strong>한 경우 전입학 가능</li>
        <li>일반계 고등학교: 2학년 1학기까지 전입학 가능</li>
        <li>특성화고는 해당 학교에 별도 문의 필요</li>
      </ul>`
  },
  T5: {
    badge: 'conditional',
    label: '조건부 가능',
    icon: '⚠',
    title: '천안 전학 — 현 학교 소재지 6개월 이상 거주 필요',
    detail: `<p>충남 내 타시군 학교에서 천안으로 전학을 원하시는 경우, 거주 기간 조건이 있습니다.</p>
      <ul>
        <li>현 학교 소재지에서 <strong>6개월 이상 거주</strong>한 경우 전입학 가능</li>
        <li>일반계 고등학교: 2학년 1학기까지 전입학 가능</li>
        <li>특성화고는 해당 학교에 별도 문의 필요</li>
      </ul>`
  },
  T6: {
    badge: 'conditional',
    label: '조건부 가능',
    icon: '⚠',
    title: '아산 전학 — 6개월 거주 필요 (1학년 2학기~2학년 1학기)',
    detail: `<p>아산 학교에서 천안으로 이사하여 아산 학교로 전학하려는 경우입니다.</p>
      <ul>
        <li>현 학교 소재지에서 <strong>6개월 이상 거주</strong> 조건 필요</li>
        <li>신청 가능 시기: 1학년 2학기 ~ 2학년 1학기</li>
        <li>세부 일정은 담당자에게 문의하세요</li>
      </ul>`
  },
  T7: {
    badge: 'conditional',
    label: '조건부 가능',
    icon: '⚠',
    title: '천안 전학 — 6개월 거주 필요 (1학년 2학기~2학년 1학기)',
    detail: `<p>천안 학교에서 아산으로 이사하여 천안 학교로 전학하려는 경우입니다.</p>
      <ul>
        <li>현 학교 소재지에서 <strong>6개월 이상 거주</strong> 조건 필요</li>
        <li>신청 가능 시기: 1학년 2학기 ~ 2학년 1학기</li>
      </ul>`
  },
  T8: {
    badge: 'conditional',
    label: '조건부 가능',
    icon: '⚠',
    title: '아산에서 충남 타시군/타시도로 전학',
    detail: `<p>아산 학교에서 충남 내 타시군 또는 타시도로 전학하는 경우입니다.</p>
      <ul>
        <li>전 가족 이전 조건 필요</li>
        <li>부모 중 한 분의 세대주 등록 필요</li>
        <li>이전 지역 교육청 또는 학교에 직접 문의 권장</li>
      </ul>`
  },
  T9: {
    badge: 'impossible',
    label: '전학 불가',
    icon: '✕',
    title: '관내 전학 불가 (동일 시 내)',
    detail: `<p>동일한 시(천안→천안, 아산→아산) 내에서의 고등학교 전학은 원칙적으로 불가합니다.</p>
      <p><strong>예외:</strong> 일반고에서 특성화고로의 진로 변경은 2학년 1학기까지 가능합니다. 자세한 내용은 학교에 문의하세요.</p>`
  },
  T10: {
    badge: 'impossible',
    label: '전학 불가',
    icon: '✕',
    title: '동일 시·군 내 전학 불가',
    detail: `<p>충남 내 타시군에서 같은 시·군 내로의 전학은 불가합니다.</p>
      <p>다른 시·군으로 이동하는 경우에는 해당 지역 교육청 또는 학교에 직접 문의하세요.</p>`
  },
  T11: {
    badge: 'inquiry',
    label: '교육청 문의',
    icon: '?',
    title: '타시도 교육청으로 문의',
    detail: `<p>이사 예정 지역이 충청남도가 아닌 타시도인 경우, 해당 시·도 교육청에 직접 문의하시기 바랍니다.</p>
      <p>충청남도교육청의 관할 범위를 벗어나는 사안입니다.</p>`
  },
  T12: {
    badge: 'conditional',
    label: '조건부 가능',
    icon: '⚠',
    title: '아산 전학 — 현 학교 소재지 1년 이상 거주 필요',
    detail: `<p>타시도 학교에서 아산으로 전학하며, 중학교를 아산에서 졸업한 경우입니다.</p>
      <ul>
        <li>현 학교(타시도) 소재지에서 <strong>1년 이상 거주</strong>한 경우 전입학 가능</li>
        <li>특성화고는 해당 학교에 별도 문의 필요</li>
      </ul>`
  },
  T13: {
    badge: 'conditional',
    label: '조건부 가능',
    icon: '⚠',
    title: '천안 전학 — 현 학교 소재지 1년 이상 거주 필요',
    detail: `<p>타시도 학교에서 천안으로 전학하며, 중학교를 천안에서 졸업한 경우입니다.</p>
      <ul>
        <li>현 학교(타시도) 소재지에서 <strong>1년 이상 거주</strong>한 경우 전입학 가능</li>
      </ul>`
  },
  T14: {
    badge: 'possible',
    label: '전학 가능',
    icon: '✓',
    title: '아산 전학 — 전 가족 이사 조건 충족',
    detail: `<p>타시도 학교에서 아산으로 전학하며 기본 조건을 충족한 경우입니다.</p>
      <ul>
        <li>전 가족 이사 및 세대주 조건 충족 확인 완료</li>
        <li>특성화고는 해당 학교에 별도 문의 필요</li>
        <li>담당자에게 연락하여 필요 서류를 준비하세요</li>
      </ul>`
  },
  T15: {
    badge: 'possible',
    label: '전학 가능',
    icon: '✓',
    title: '천안 전학 — 전 가족 이사 조건 충족',
    detail: `<p>타시도 학교에서 천안으로 전학하며 기본 조건을 충족한 경우입니다.</p>
      <ul>
        <li>전 가족 이사 및 세대주 조건 충족 확인 완료</li>
        <li>담당자에게 연락하여 필요 서류를 준비하세요</li>
      </ul>`
  },
  T16: {
    badge: 'conditional',
    label: '조건부 가능',
    icon: '⚠',
    title: '천안↔아산 간 전학',
    detail: `<p>천안과 아산 사이의 전학을 원하시는 경우입니다.</p>
      <ul>
        <li>전 가족 이전 조건 필요</li>
        <li>부모 중 한 분의 세대주 등록 필요</li>
        <li>세부 조건 및 시기는 담당자에게 문의하세요</li>
      </ul>`
  },
  T17: {
    badge: 'conditional',
    label: '조건부 가능',
    icon: '⚠',
    title: '천안→충남 타시군/타시도 전학',
    detail: `<p>천안 학교에서 충남 내 타시군 또는 타시도로 전학하는 경우입니다.</p>
      <ul>
        <li>전 가족 이전 조건 필요</li>
        <li>부모 중 한 분의 세대주 등록 필요</li>
        <li>이전 지역 교육청 또는 학교에 문의 권장</li>
      </ul>`
  },
  T18: {
    badge: 'conditional',
    label: '조건부 가능',
    icon: '⚠',
    title: '천안 전학 — 1년 이상 거주 필요',
    detail: `<p>현 학교 소재지에서 1년 이상 거주한 경우 천안으로의 전학이 가능합니다.</p>
      <p>담당자에게 연락하여 세부 조건을 확인하세요.</p>`
  }
};

// ---------- getResult 분기 엔진 ----------
function getResult(answers) {
  const [q1, q2, q3, q4, q5, q6, q7] = answers;

  if (q1 === '아니오') return 'T1';
  if (q2 === '아니오') return 'T2';
  if (q7 === '과학고·외국어고·국제고·영재고·자율형 사립고') return 'T3';

  const school = q3, dest = q5, middle = q6;

  if (school === '충남 외 타시도') {
    if (dest === '아산') return middle === '아산' ? 'T12' : 'T14';
    if (dest === '천안') return middle === '천안' ? 'T13' : 'T15';
    if (dest === '충남 내 타시군(천안·아산 제외)') return 'T0';
    if (dest === '충남 외 타시도') return 'T11';
  }
  if (school === '충남 내 타시군(천안·아산 제외)') {
    if (dest === '아산') return middle === '아산' ? 'T4' : 'T14';
    if (dest === '천안') return middle === '천안' ? 'T5' : 'T15';
    if (dest === '충남 외 타시도') return 'T11';
    return 'T10';
  }
  if (school === '아산') {
    if (dest === '아산') return 'T9';
    if (dest === '천안') return middle === '아산' ? 'T6' : 'T16';
    if (dest === '충남 내 타시군(천안·아산 제외)' || dest === '충남 외 타시도') return 'T8';
  }
  if (school === '천안') {
    if (dest === '천안') return 'T9';
    if (dest === '아산') return middle === '천안' ? 'T7' : 'T16';
    if (dest === '충남 내 타시군(천안·아산 제외)' || dest === '충남 외 타시도') return 'T17';
  }
  return 'T0';
}

// ---------- 상태 ----------
let currentStep = 0;
let answers = new Array(QUESTIONS.length).fill(null);

// ---------- 초기화 ----------
document.addEventListener('DOMContentLoaded', () => {
  renderQuestion(currentStep);
  updateProgress();
  updateNavButtons();
});

// ---------- 렌더링 ----------
function renderQuestion(index) {
  const q = QUESTIONS[index];

  document.getElementById('step-num').textContent = `${index + 1} / ${QUESTIONS.length}`;
  document.getElementById('question-text').textContent = q.text;
  document.getElementById('question-hint').textContent = q.hint;

  const container = document.getElementById('options-container');
  container.innerHTML = '';

  q.options.forEach((option) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.type = 'button';
    btn.textContent = option;
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', answers[index] === option ? 'true' : 'false');
    btn.setAttribute('aria-label', option);
    if (answers[index] === option) btn.classList.add('selected');
    btn.addEventListener('click', () => selectOption(index, option, btn));
    container.appendChild(btn);
  });
}

function selectOption(questionIndex, option, clickedBtn) {
  answers[questionIndex] = option;
  document.querySelectorAll('.option-btn').forEach((b) => {
    b.classList.remove('selected');
    b.setAttribute('aria-checked', 'false');
  });
  clickedBtn.classList.add('selected');
  clickedBtn.setAttribute('aria-checked', 'true');
  updateNavButtons();
}

function updateProgress() {
  const pct = Math.round((currentStep / QUESTIONS.length) * 100);
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('progress-text').textContent = pct + '%';
  const progressEl = document.getElementById('progress-section');
  if (progressEl) progressEl.setAttribute('aria-valuenow', pct);
}

function updateNavButtons() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  prevBtn.disabled = currentStep === 0;
  nextBtn.disabled = answers[currentStep] === null;
  nextBtn.textContent = currentStep === QUESTIONS.length - 1 ? '결과 보기' : '다음  →';
}

// ---------- 네비게이션 ----------
function goNext() {
  if (answers[currentStep] === null) return;

  // 조기 종료 체크
  if (currentStep === 0 && answers[0] === '아니오') { showResult('T1'); return; }
  if (currentStep === 1 && answers[1] === '아니오') { showResult('T2'); return; }

  if (currentStep === QUESTIONS.length - 1) {
    // 마지막 질문(P7) 조기 종료
    if (answers[6] === '과학고·외국어고·국제고·영재고·자율형 사립고') {
      showResult('T3');
    } else {
      showResult(getResult(answers));
    }
    return;
  }

  currentStep++;
  renderQuestion(currentStep);
  updateProgress();
  updateNavButtons();
}

function goPrev() {
  if (currentStep === 0) return;
  currentStep--;
  renderQuestion(currentStep);
  updateProgress();
  updateNavButtons();
}

// ---------- 결과 표시 ----------
function showResult(code) {
  const result = RESULTS[code];
  if (!result) return;

  // 프로그레스 100%
  document.getElementById('progress-bar').style.width = '100%';
  document.getElementById('progress-text').textContent = '100%';
  const progressEl = document.getElementById('progress-section');
  if (progressEl) progressEl.setAttribute('aria-valuenow', 100);

  // 설문 숨기기 / 결과 보이기
  document.getElementById('survey-container').style.display = 'none';
  const resultArea = document.getElementById('result-area');
  resultArea.hidden = false;

  // 아이콘
  const iconEl = document.getElementById('result-icon');
  iconEl.textContent = result.icon;
  iconEl.className = `result-icon result-icon-${result.badge}`;

  // 배지
  const badgeEl = document.getElementById('result-badge');
  badgeEl.className = `result-badge badge-${result.badge}`;
  badgeEl.textContent = result.label;

  // 제목 / 상세
  document.getElementById('result-title').textContent = result.title;
  document.getElementById('result-detail').innerHTML = result.detail;
  document.getElementById('result-code').textContent = `진단 코드: ${code}`;

  // 스크롤 상단으로
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------- 초기화 ----------
function resetSurvey() {
  currentStep = 0;
  answers = new Array(QUESTIONS.length).fill(null);

  document.getElementById('survey-container').style.display = '';
  document.getElementById('result-area').hidden = true;

  renderQuestion(0);
  updateProgress();
  updateNavButtons();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}
