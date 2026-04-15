'use strict';

/* ============================================================
   충남 고등학교 샘플 데이터
   ※ schoolinfoUrl 은 학교알리미 개별 페이지 URL로 교체하세요.
      형식: https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=XXXXXXXX
   ============================================================ */

const SCHOOLS = [

  /* ── 천안 ──────────────────────────────────────────────── */
  {
    name: '천안중앙고등학교',
    type: '일반계',
    city: '천안',
    lat: 36.8079, lng: 127.1550,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },
  {
    name: '천안북일고등학교',
    type: '일반계',
    city: '천안',
    lat: 36.8148, lng: 127.1537,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },
  {
    name: '천안여자고등학교',
    type: '일반계',
    city: '천안',
    lat: 36.8038, lng: 127.1426,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },
  {
    name: '천안쌍용고등학교',
    type: '일반계',
    city: '천안',
    lat: 36.7889, lng: 127.1350,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },
  {
    name: '천안제일고등학교',
    type: '일반계',
    city: '천안',
    lat: 36.8060, lng: 127.1480,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },
  {
    name: '천안공업고등학교',
    type: '특성화고',
    city: '천안',
    lat: 36.8202, lng: 127.1581,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },

  /* ── 아산 ──────────────────────────────────────────────── */
  {
    name: '아산고등학교',
    type: '일반계',
    city: '아산',
    lat: 36.7897, lng: 127.0020,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },
  {
    name: '온양여자고등학교',
    type: '일반계',
    city: '아산',
    lat: 36.7867, lng: 127.0138,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },
  {
    name: '아산제일고등학교',
    type: '일반계',
    city: '아산',
    lat: 36.7780, lng: 126.9920,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },
  {
    name: '충남삼성고등학교',
    type: '자율형 사립고',
    city: '아산',
    lat: 36.8014, lng: 127.0248,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },

  /* ── 공주 ──────────────────────────────────────────────── */
  {
    name: '공주고등학교',
    type: '일반계',
    city: '공주',
    lat: 36.4467, lng: 127.1194,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },
  {
    name: '공주여자고등학교',
    type: '일반계',
    city: '공주',
    lat: 36.4450, lng: 127.1230,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },
  {
    name: '공주사범대학부설고등학교',
    type: '일반계',
    city: '공주',
    lat: 36.4408, lng: 127.1199,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },
  {
    name: '공주마이스터고등학교',
    type: '마이스터고',
    city: '공주',
    lat: 36.4521, lng: 127.1102,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },

  /* ── 논산 ──────────────────────────────────────────────── */
  {
    name: '논산고등학교',
    type: '일반계',
    city: '논산',
    lat: 36.1894, lng: 127.0985,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },
  {
    name: '논산여자고등학교',
    type: '일반계',
    city: '논산',
    lat: 36.1912, lng: 127.0920,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },
  {
    name: '강경고등학교',
    type: '일반계',
    city: '논산',
    lat: 36.1558, lng: 126.9962,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },

  /* ── 서산 ──────────────────────────────────────────────── */
  {
    name: '서산고등학교',
    type: '일반계',
    city: '서산',
    lat: 36.7844, lng: 126.4497,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },
  {
    name: '서령고등학교',
    type: '일반계',
    city: '서산',
    lat: 36.7750, lng: 126.4380,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },

  /* ── 당진 ──────────────────────────────────────────────── */
  {
    name: '당진고등학교',
    type: '일반계',
    city: '당진',
    lat: 36.8893, lng: 126.6296,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },
  {
    name: '당진정보고등학교',
    type: '특성화고',
    city: '당진',
    lat: 36.8862, lng: 126.6380,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },

  /* ── 홍성 ──────────────────────────────────────────────── */
  {
    name: '홍성고등학교',
    type: '일반계',
    city: '홍성',
    lat: 36.6010, lng: 126.6609,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },
  {
    name: '홍성여자고등학교',
    type: '일반계',
    city: '홍성',
    lat: 36.5990, lng: 126.6642,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },

  /* ── 보령 ──────────────────────────────────────────────── */
  {
    name: '보령고등학교',
    type: '일반계',
    city: '보령',
    lat: 36.3334, lng: 126.6128,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },
  {
    name: '대천고등학교',
    type: '일반계',
    city: '보령',
    lat: 36.3275, lng: 126.6179,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr',
  },

];
