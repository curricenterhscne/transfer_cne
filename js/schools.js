'use strict';

/* ============================================================
   충남 고등학교 데이터
   - 좌표: 학교알리미(schoolinfo.go.kr) 실측값 (2025)
   - schoolinfoUrl: 학교알리미 개별 페이지 URL
     UUID가 확인된 학교: SHL_IDF_CD 파라미터 사용
     미확인 학교: schulCode 파라미터 (구형 형식, 리다이렉트 될 수 있음)
   ============================================================ */

const SCHOOLS = [

  /* ── 천안 ──────────────────────────────────────────────── */
  {
    name: '천안중앙고등학교',
    type: '일반계',
    city: '천안',
    lat: 36.8109644161, lng: 127.1592530511,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?SHL_IDF_CD=4697fb95-484e-443c-bdd6-24470d428c92',
  },
  {
    name: '천안북일고등학교',
    type: '일반계',
    city: '천안',
    lat: 36.8319256157, lng: 127.15819344,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?SHL_IDF_CD=a0f5d426-125e-4973-ac80-d52a3f092313',
  },
  {
    name: '천안여자고등학교',
    type: '일반계',
    city: '천안',
    lat: 36.7785865845, lng: 127.1690169813,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=8140069',
  },
  {
    name: '천안쌍용고등학교',
    type: '일반계',
    city: '천안',
    lat: 36.78819684, lng: 127.1137870369,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=8140219',
  },
  {
    name: '천안제일고등학교',
    type: '일반계',
    city: '천안',
    lat: 36.8075362996, lng: 127.1540014084,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=8140259',
  },
  {
    name: '천안공업고등학교',
    type: '특성화고',
    city: '천안',
    lat: 36.8148511766, lng: 127.1556433682,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=8140139',
  },

  /* ── 아산 ──────────────────────────────────────────────── */
  {
    name: '아산고등학교',
    type: '일반계',
    city: '아산',
    lat: 36.7887449768, lng: 127.0048085693,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=8140096',
  },
  {
    name: '온양여자고등학교',
    type: '일반계',
    city: '아산',
    lat: 36.7777974412, lng: 127.0144998295,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=8140062',
  },
  {
    name: '충남삼성고등학교',
    type: '자율형 사립고',
    city: '아산',
    lat: 36.8054480589, lng: 127.0586633861,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=8140366',
  },

  /* ── 공주 ──────────────────────────────────────────────── */
  {
    name: '공주고등학교',
    type: '일반계',
    city: '공주',
    lat: 36.4481691198, lng: 127.1234746439,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?SHL_IDF_CD=e308ba68-dfc4-47c0-a57c-2adf2ee283aa',
  },
  {
    name: '공주여자고등학교',
    type: '일반계',
    city: '공주',
    lat: 36.4403074686, lng: 127.1198173022,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=8140037',
  },
  {
    name: '공주사범대학부설고등학교',
    type: '일반계',
    city: '공주',
    lat: 36.4526206697, lng: 127.1201441162,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?SHL_IDF_CD=38c7e3ae-edf3-452b-800b-4b5a81a9be4c',
  },
  {
    name: '공주마이스터고등학교',
    type: '마이스터고',
    city: '공주',
    lat: 36.5476125785, lng: 126.9488162455,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=8140347',
  },

  /* ── 논산 ──────────────────────────────────────────────── */
  {
    name: '논산고등학교',
    type: '일반계',
    city: '논산',
    lat: 36.1819029841, lng: 127.098194471,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=8140040',
  },
  {
    name: '논산여자고등학교',
    type: '일반계',
    city: '논산',
    lat: 36.1947115788, lng: 127.0928380842,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=8140041',
  },
  {
    name: '강경고등학교',
    type: '일반계',
    city: '논산',
    lat: 36.1589968161, lng: 127.0200617113,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=8140034',
  },

  /* ── 서산 ──────────────────────────────────────────────── */
  {
    name: '서산고등학교',
    type: '일반계',
    city: '서산',
    lat: 36.7157779694, lng: 126.54669996,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=8140200',
  },
  {
    name: '서령고등학교',
    type: '일반계',
    city: '서산',
    lat: 36.7930597521, lng: 126.4592992166,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=8140089',
  },

  /* ── 당진 ──────────────────────────────────────────────── */
  {
    name: '당진고등학교',
    type: '일반계',
    city: '당진',
    lat: 36.8913483108, lng: 126.6227930857,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=8140042',
  },
  {
    name: '당진정보고등학교',
    type: '특성화고',
    city: '당진',
    lat: 36.8931497374, lng: 126.6234057396,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=8140118',
  },

  /* ── 홍성 ──────────────────────────────────────────────── */
  {
    name: '홍성고등학교',
    type: '일반계',
    city: '홍성',
    lat: 36.6500230524, lng: 126.6726479418,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=8140077',
  },
  {
    name: '홍성여자고등학교',
    type: '일반계',
    city: '홍성',
    lat: 36.6076678796, lng: 126.6677458406,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=8140078',
  },

  /* ── 보령 ──────────────────────────────────────────────── */
  {
    name: '대천고등학교',
    type: '일반계',
    city: '보령',
    lat: 36.3654825442, lng: 126.6037039427,
    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=8140044',
  },

];
