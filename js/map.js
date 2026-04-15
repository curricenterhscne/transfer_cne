'use strict';

/* ============================================================
   충남 고등학교 카카오맵
   의존성: schools.js (SCHOOLS 배열), Kakao Maps JS SDK
   ============================================================ */

const MAP_CENTER  = { lat: 36.5184, lng: 126.8000 };
const MAP_ZOOM    = 9;
const MAIN_CITIES = ['천안', '아산', '공주', '논산'];

const TYPE_COLOR = {
  '일반계':         '#0071e3',
  '특성화고':       '#34c759',
  '예술고':         '#ff9500',
  '체육고':         '#ff9500',
  '마이스터고':     '#7c3aed',
  '과학고':         '#ff3b30',
  '외국어고':       '#ff3b30',
  '국제고':         '#ff3b30',
  '자율형 사립고':  '#ff3b30',
};

const LEGEND_ITEMS = [
  { label: '일반계',          color: '#0071e3' },
  { label: '특성화고',        color: '#34c759' },
  { label: '예술·체육고',     color: '#ff9500' },
  { label: '마이스터고',      color: '#7c3aed' },
  { label: '특목고·자사고',   color: '#ff3b30' },
];

let mapInstance   = null;
let activeMarkers = [];
let infowindow    = null;
let mapReady      = false;   // SDK + initMap 완료 여부

/* ── 마커 SVG 이미지 ─────────────────────────────────────── */
function getMarkerImage(type) {
  const fill = TYPE_COLOR[type] || '#6e6e73';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 24 34">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 10.5 12 22 12 22S24 22.5 24 12C24 5.373 18.627 0 12 0z" fill="${fill}"/>
    <circle cx="12" cy="12" r="5" fill="white" fill-opacity="0.92"/>
  </svg>`;
  return new kakao.maps.MarkerImage(
    'data:image/svg+xml,' + encodeURIComponent(svg),
    new kakao.maps.Size(24, 34),
    { offset: new kakao.maps.Point(12, 34) }
  );
}

/* ── 인포윈도우 HTML ─────────────────────────────────────── */
function buildInfoContent(school) {
  const color = TYPE_COLOR[school.type] || '#6e6e73';
  return [
    '<div style="padding:12px 14px 10px;min-width:188px;',
    'font-family:-apple-system,BlinkMacSystemFont,\'Helvetica Neue\',sans-serif;line-height:1.45;">',
    `<div style="font-size:0.88rem;font-weight:600;color:#1d1d1f;margin-bottom:5px;">${school.name}</div>`,
    '<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">',
    `<span style="font-size:0.68rem;font-weight:600;padding:2px 8px;border-radius:100px;`,
    `background:${color}18;color:${color};">${school.type}</span>`,
    `<span style="font-size:0.72rem;color:#6e6e73;">${school.city}</span>`,
    '</div>',
    `<a href="${school.schoolinfoUrl}" target="_blank" rel="noopener noreferrer"`,
    ' style="font-size:0.78rem;color:#0071e3;text-decoration:none;">',
    '학교알리미 보기 →</a>',
    '</div>',
  ].join('');
}

/* ── 필터링 헬퍼 ─────────────────────────────────────────── */
function getFilteredSchools(filter) {
  if (filter === '전체') return SCHOOLS;
  if (filter === '기타') return SCHOOLS.filter(s => !MAIN_CITIES.includes(s.city));
  return SCHOOLS.filter(s => s.city === filter);
}

/* ── 마커 렌더링 ─────────────────────────────────────────── */
function renderMarkers(filter) {
  activeMarkers.forEach(m => m.setMap(null));
  activeMarkers = [];
  infowindow.close();

  getFilteredSchools(filter).forEach(school => {
    const marker = new kakao.maps.Marker({
      map:      mapInstance,
      position: new kakao.maps.LatLng(school.lat, school.lng),
      title:    school.name,
      image:    getMarkerImage(school.type),
    });

    kakao.maps.event.addListener(marker, 'click', () => {
      infowindow.setContent(buildInfoContent(school));
      infowindow.open(mapInstance, marker);
    });

    activeMarkers.push(marker);
  });
}

/* ── 학교 목록 테이블 렌더링 ─────────────────────────────── */
function renderSchoolTable(filter) {
  const tbody = document.getElementById('school-table-body');
  if (!tbody) return;

  const list = getFilteredSchools(filter);

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4"
      style="text-align:center;color:#6e6e73;padding:2rem;">
      해당 지역 학교가 없습니다.</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(s => {
    const color = TYPE_COLOR[s.type] || '#6e6e73';
    return [
      '<tr>',
      `<td style="font-weight:600;">${s.name}</td>`,
      `<td>${s.city}</td>`,
      `<td><span style="display:inline-block;font-size:0.7rem;font-weight:600;`,
      `padding:2px 8px;border-radius:100px;background:${color}18;color:${color};">`,
      `${s.type}</span></td>`,
      `<td><a href="${s.schoolinfoUrl}" target="_blank" rel="noopener noreferrer"`,
      ' style="color:#0071e3;font-size:0.82rem;text-decoration:none;">알리미 →</a></td>',
      '</tr>',
    ].join('');
  }).join('');
}

/* ── 필터 적용 (마커 + 테이블 동시 갱신) ─────────────────── */
function applyFilter(filter) {
  renderMarkers(filter);
  renderSchoolTable(filter);
}

/* ── 필터 버튼 활성화 ─────────────────────────────────────── */
function bindFilterButtons() {
  const chips = document.querySelectorAll('.filter-chip');
  chips.forEach(chip => {
    chip.removeAttribute('disabled');
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      applyFilter(chip.textContent.trim());
    });
  });
}

/* ── 범례 삽입 ────────────────────────────────────────────── */
function buildLegend() {
  const wrap = document.querySelector('.map-legend');
  if (!wrap) return;
  wrap.innerHTML = LEGEND_ITEMS.map(i =>
    `<span class="legend-item">
      <span class="legend-dot" style="background:${i.color};"></span>${i.label}
    </span>`
  ).join('');
}

/* ── 지도 초기화 ─────────────────────────────────────────── */
function initMap() {
  const container = document.getElementById('kakao-map');
  if (!container || mapInstance) return;

  /* 플레이스홀더 → 지도 컨테이너로 전환 */
  container.classList.remove('map-placeholder');
  container.classList.add('map-container');
  container.innerHTML = '';
  container.removeAttribute('aria-label');

  mapInstance = new kakao.maps.Map(container, {
    center: new kakao.maps.LatLng(MAP_CENTER.lat, MAP_CENTER.lng),
    level:  MAP_ZOOM,
  });

  mapInstance.addControl(
    new kakao.maps.ZoomControl(),
    kakao.maps.ControlPosition.RIGHT
  );

  infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  mapReady   = true;

  applyFilter('전체');
  bindFilterButtons();
  buildLegend();
}

/* ── 진입점: 탭2 클릭 시 지연 초기화 ───────────────────────
   ① main.js 핸들러가 먼저 실행 → 탭2 패널이 보임
   ② map.js 핸들러가 실행      → 가시 상태에서 지도 초기화  */
document.addEventListener('DOMContentLoaded', () => {
  const tab2Btn = document.getElementById('btn-tab2');
  if (!tab2Btn) return;

  tab2Btn.addEventListener('click', () => {
    if (!mapReady) {
      /* SDK가 아직 로드 중일 수도 있으므로 kakao.maps.load 사용 */
      kakao.maps.load(initMap);
    } else {
      /* 탭 재진입 시 지도 크기 재계산 */
      mapInstance.relayout();
    }
  });
});
