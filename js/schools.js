'use strict';

/* ============================================================
   충남 고등학교 데이터 — 학교기본정보(고)_충청남도교육청
   출처: data/schools.csv (정보공시)
   필드: name, type, city, lat, lng, schoolinfoUrl, homepageUrl
   ============================================================ */

const SCHOOLS = [

  /* ── 천안 ──────────────────────────────────────────────── */
  { name: '천안중앙고등학교',     type: '일반계',       city: '천안', lat: 36.81096442, lng: 127.1592531, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000246', homepageUrl: 'http://caja.caehs.kr' },
  { name: '천안고등학교',         type: '일반계',       city: '천안', lat: 36.80941327, lng: 127.1339409, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000238', homepageUrl: 'http://cheonan.caehs.kr' },
  { name: '천안여자고등학교',     type: '일반계',       city: '천안', lat: 36.77858658, lng: 127.169017,  schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000244', homepageUrl: 'https://www.cag.caehs.kr' },
  { name: '복자여자고등학교',     type: '일반계',       city: '천안', lat: 36.81574669, lng: 127.151606,  schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000168', homepageUrl: 'http://www.bokja.caehs.kr' },
  { name: '목천고등학교',         type: '일반계',       city: '천안', lat: 36.78232828, lng: 127.2328711, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000166', homepageUrl: 'http://mokcheon-h.caehs.kr' },
  { name: '북일고등학교',         type: '자율형 사립고', city: '천안', lat: 36.83192562, lng: 127.1581934, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000241', homepageUrl: 'https://www.bugil.hs.kr' },
  { name: '북일여자고등학교',     type: '일반계',       city: '천안', lat: 36.83147261, lng: 127.1600264, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000242', homepageUrl: 'http://www.bigs.hs.kr/' },
  { name: '천안두정고등학교',     type: '일반계',       city: '천안', lat: 36.83526101, lng: 127.1303897, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120002463', homepageUrl: 'http://dujeong.caehs.kr/' },
  { name: '천안월봉고등학교',     type: '일반계',       city: '천안', lat: 36.80438969, lng: 127.112045,  schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120002464', homepageUrl: 'http://cwb.caehs.kr' },
  { name: '천안쌍용고등학교',     type: '일반계',       city: '천안', lat: 36.78819684, lng: 127.113787,  schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120002511', homepageUrl: 'http://sy.caehs.kr' },
  { name: '천안신당고등학교',     type: '일반계',       city: '천안', lat: 36.85118602, lng: 127.1594127, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120002531', homepageUrl: 'http://www.casd.caehs.kr' },
  { name: '천안청수고등학교',     type: '일반계',       city: '천안', lat: 36.79140324, lng: 127.1591364, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120002547', homepageUrl: 'http://www.ccs.caehs.kr' },
  { name: '천안업성고등학교',     type: '일반계',       city: '천안', lat: 36.86222863, lng: 127.1373659, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120002552', homepageUrl: 'http://www.upsung.caehs.kr/' },
  { name: '천안오성고등학교',     type: '일반계',       city: '천안', lat: 36.84149762, lng: 127.1421362, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120002553', homepageUrl: 'http://ohsung.caehs.kr' },
  { name: '천안불당고등학교',     type: '일반계',       city: '천안', lat: 36.80926015, lng: 127.1031272, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120002892', homepageUrl: 'http://www.buldang.caehs.kr' },
  { name: '병천고등학교',         type: '특성화고',     city: '천안', lat: 36.76377495, lng: 127.3120834, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000167', homepageUrl: 'http://www.bchs.caehs.kr' },
  { name: '천안공업고등학교',     type: '특성화고',     city: '천안', lat: 36.81485118, lng: 127.1556434, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000239', homepageUrl: 'http://www.ct.caehs.kr/main.do' },
  { name: '천안제일고등학교',     type: '특성화고',     city: '천안', lat: 36.8075363,  lng: 127.1540014, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000240', homepageUrl: 'http://www.cj.caehs.kr' },
  { name: '천안여자상업고등학교', type: '특성화고',     city: '천안', lat: 36.80371084, lng: 127.1341193, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000245', homepageUrl: 'http://cays.caehs.kr' },
  { name: '천안상업고등학교',     type: '특성화고',     city: '천안', lat: 36.85931563, lng: 127.1581736, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000237', homepageUrl: 'http://sanggo.caehs.kr' },
  { name: '충남관광보건고등학교', type: '특성화고',     city: '천안', lat: 36.92389249, lng: 127.1154092, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000189', homepageUrl: 'http://cnth.caehs.kr' },
  { name: '충남예술고등학교',     type: '예술고',       city: '천안', lat: 36.86832843, lng: 127.2042842, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000255', homepageUrl: 'http://cna.caehs.kr' },

  /* ── 아산 ──────────────────────────────────────────────── */
  { name: '아산고등학교',                   type: '일반계',       city: '아산', lat: 36.78874498, lng: 127.0048086, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000194', homepageUrl: 'http://www.asan.cnehs.kr' },
  { name: '온양고등학교',                   type: '일반계',       city: '아산', lat: 36.78469357, lng: 126.9954247, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000213', homepageUrl: 'http://ongo.cnehs.kr' },
  { name: '온양여자고등학교',               type: '일반계',       city: '아산', lat: 36.77779744, lng: 127.0144998, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000214', homepageUrl: 'http://www.onyang.cnehs.kr' },
  { name: '한올고등학교',                   type: '일반계',       city: '아산', lat: 36.78808861, lng: 127.0103923, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000217', homepageUrl: 'http://www.hanol.cnehs.kr' },
  { name: '온양용화고등학교',               type: '일반계',       city: '아산', lat: 36.77367118, lng: 127.0029168, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120002468', homepageUrl: 'http://yonghwa.cnehs.kr' },
  { name: '설화고등학교',                   type: '일반계',       city: '아산', lat: 36.78820464, lng: 127.0922988, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120002667', homepageUrl: 'http://www.seolhwa.cnehs.kr' },
  { name: '배방고등학교',                   type: '일반계',       city: '아산', lat: 36.76910742, lng: 127.0664426, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120002834', homepageUrl: 'http://www.baebang.cnehs.kr' },
  { name: '이순신고등학교',                 type: '일반계',       city: '아산', lat: 36.78272242, lng: 127.0988301, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120002965', homepageUrl: 'http://yisunsin.cnehs.kr' },
  { name: '아산충무고등학교',               type: '일반계',       city: '아산', lat: 36.92837864, lng: 127.0540658, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120003000', homepageUrl: 'http://www.asanchungmu.cnehs.kr/' },
  { name: '충남삼성고등학교',               type: '자율형 사립고', city: '아산', lat: 36.80544806, lng: 127.0586634, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120002870', homepageUrl: 'http://www.cnsa.hs.kr/' },
  { name: '아산스마트팩토리마이스터고등학교', type: '마이스터고',   city: '아산', lat: 36.92906779, lng: 127.0435718, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000164', homepageUrl: 'http://smart.cnehs.kr' },
  { name: '충남외국어고등학교',             type: '외국어고',     city: '아산', lat: 36.8040842,  lng: 127.0613943, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120002532', homepageUrl: 'http://cnfl.cnehs.kr' },

  /* ── 공주 ──────────────────────────────────────────────── */
  { name: '공주고등학교',                         type: '일반계',   city: '공주', lat: 36.44816912, lng: 127.1234746, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000131', homepageUrl: 'http://www.kongjugo.cnehs.kr' },
  { name: '공주여자고등학교',                     type: '일반계',   city: '공주', lat: 36.44030747, lng: 127.1198173, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000135', homepageUrl: 'http://www.gongju-gh.cnehs.kr' },
  { name: '공주금성여자고등학교',                 type: '일반계',   city: '공주', lat: 36.45847197, lng: 127.1117595, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000133', homepageUrl: 'https://ksgh.cnehs.kr' },
  { name: '공주영명고등학교',                     type: '일반계',   city: '공주', lat: 36.45087621, lng: 127.1269235, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000137', homepageUrl: 'http://ymhigh.cnehs.kr/main.do' },
  { name: '국립공주대학교사범대학부설고등학교',   type: '일반계',   city: '공주', lat: 36.45262067, lng: 127.1201441, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S000003496', homepageUrl: 'http://woollim.cnehs.kr' },
  { name: '한일고등학교',                         type: '일반계',   city: '공주', lat: 36.60462019, lng: 127.1302687, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000264', homepageUrl: 'http://www.hanilgo.cnehs.kr' },
  { name: '공주생명과학고등학교',                 type: '특성화고', city: '공주', lat: 36.47398876, lng: 127.1239574, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000134', homepageUrl: 'http://gongju-agr.cnehs.kr' },
  { name: '공주정보고등학교',                     type: '특성화고', city: '공주', lat: 36.48534026, lng: 127.1572047, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000138', homepageUrl: 'https://kjis.cnehs.kr' },
  { name: '공주마이스터고등학교',                 type: '마이스터고', city: '공주', lat: 36.54761258, lng: 126.9488162, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000132', homepageUrl: 'http://gong.cnehs.kr' },
  { name: '충남과학고등학교',                     type: '과학고',   city: '공주', lat: 36.42668545, lng: 127.2189047, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000254', homepageUrl: 'http://cnsh.cnehs.kr/' },

  /* ── 논산 ──────────────────────────────────────────────── */
  { name: '강경고등학교',           type: '일반계',   city: '논산', lat: 36.15899682, lng: 127.0200617, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000124', homepageUrl: 'http://www.ganggyeong.cnehs.kr/main.do' },
  { name: '건양대학교병설건양고등학교', type: '일반계', city: '논산', lat: 36.14153102, lng: 127.2342694, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000128', homepageUrl: 'http://konyang.cnehs.kr' },
  { name: '논산고등학교',           type: '일반계',   city: '논산', lat: 36.18190298, lng: 127.0981945, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000149', homepageUrl: 'http://nsh.cnehs.kr' },
  { name: '논산대건고등학교',       type: '일반계',   city: '논산', lat: 36.1843438,  lng: 127.0781338, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000151', homepageUrl: 'https://nonsandaegeon.cnehs.kr' },
  { name: '논산여자고등학교',       type: '일반계',   city: '논산', lat: 36.19471158, lng: 127.0928381, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000152', homepageUrl: 'http://nsghs.cnehs.kr' },
  { name: '쌘뽈여자고등학교',       type: '일반계',   city: '논산', lat: 36.20051709, lng: 127.0856442, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000193', homepageUrl: 'http://stpaul.cnehs.kr' },
  { name: '연무고등학교',           type: '일반계',   city: '논산', lat: 36.13466739, lng: 127.1041171, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000197', homepageUrl: 'http://yeonmu.cnehs.kr' },
  { name: '강경상업고등학교',       type: '특성화고', city: '논산', lat: 36.16090331, lng: 127.0226672, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000126', homepageUrl: 'http://www.gangsang.cnehs.kr' },
  { name: '국방항공고등학교',       type: '특성화고', city: '논산', lat: 36.19775781, lng: 127.0878516, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000150', homepageUrl: 'http://ndav.cnehs.kr' },
  { name: '논산여자상업고등학교',   type: '특성화고', city: '논산', lat: 36.18377236, lng: 127.0956266, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000153', homepageUrl: 'http://www.nonsan-gch.cnehs.kr' },
  { name: '한국국제비즈니스고등학교', type: '특성화고', city: '논산', lat: 36.20660932, lng: 127.1891736, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000256', homepageUrl: 'http://kibs.cnehs.kr/' },
  { name: '연무마이스터고등학교',   type: '마이스터고', city: '논산', lat: 36.12564781, lng: 127.1064391, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000199', homepageUrl: 'https://yeonmutech.cnehs.kr' },
  { name: '충남체육고등학교',       type: '체육고',   city: '논산', lat: 36.19255762, lng: 127.1039035, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000257', homepageUrl: 'http://cnche.cnehs.kr' },

  /* ── 서산 ──────────────────────────────────────────────── */
  { name: '부석고등학교',     type: '일반계',       city: '서산', lat: 36.71960905, lng: 126.4006755, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000169', homepageUrl: 'http://buseok.cnehs.kr' },
  { name: '서령고등학교',     type: '일반계',       city: '서산', lat: 36.79305975, lng: 126.4592992, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000176', homepageUrl: 'http://seoryeong.cnehs.kr' },
  { name: '서산고등학교',     type: '일반계',       city: '서산', lat: 36.71577797, lng: 126.5467,    schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000177', homepageUrl: 'http://seosan.cnehs.kr' },
  { name: '서산중앙고등학교', type: '일반계',       city: '서산', lat: 36.77820131, lng: 126.4710917, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000178', homepageUrl: 'http://www.sjh.cnehs.kr' },
  { name: '서산여자고등학교', type: '일반계',       city: '서산', lat: 36.77002849, lng: 126.4675031, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000180', homepageUrl: 'http://seosangs.cnehs.kr' },
  { name: '서일고등학교',     type: '일반계',       city: '서산', lat: 36.85979428, lng: 126.4320891, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000182', homepageUrl: 'http://www.seoilgo.cnehs.kr/' },
  { name: '서산공업고등학교', type: '특성화고',     city: '서산', lat: 36.80889109, lng: 126.5871671, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000220', homepageUrl: 'http://seosan-tech.cnehs.kr' },
  { name: '대산고등학교',     type: '자율형 공립고', city: '서산', lat: 36.93627188, lng: 126.438293,  schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120002600', homepageUrl: 'http://daesan.cnehs.kr' },

  /* ── 당진 ──────────────────────────────────────────────── */
  { name: '당진고등학교',     type: '일반계',   city: '당진', lat: 36.89134831, lng: 126.6227931, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000154', homepageUrl: 'http://dangjin.cnehs.kr' },
  { name: '서야고등학교',     type: '일반계',   city: '당진', lat: 36.79217846, lng: 126.7879072, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000181', homepageUrl: 'http://seo-ya.cnehs.kr' },
  { name: '송악고등학교',     type: '일반계',   city: '당진', lat: 36.91692738, lng: 126.7037859, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000190', homepageUrl: 'http://songak.cnehs.kr' },
  { name: '신평고등학교',     type: '일반계',   city: '당진', lat: 36.88308591, lng: 126.7614704, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000191', homepageUrl: 'http://sp.cnehs.kr' },
  { name: '합덕고등학교',     type: '일반계',   city: '당진', lat: 36.81392916, lng: 126.7602327, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000267', homepageUrl: 'https://www.hapduk.cnehs.kr' },
  { name: '호서고등학교',     type: '일반계',   city: '당진', lat: 36.9002123,  lng: 126.6393143, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000269', homepageUrl: 'http://hoseo.cnehs.kr' },
  { name: '당진정보고등학교', type: '특성화고', city: '당진', lat: 36.89314974, lng: 126.6234057, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000157', homepageUrl: 'http://www.dangjin-ih.cnehs.kr' },
  { name: '합덕제철고등학교', type: '마이스터고', city: '당진', lat: 36.81445038, lng: 126.7631225, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000265', homepageUrl: 'http://steel.cnehs.kr' },

  /* ── 홍성 ──────────────────────────────────────────────── */
  { name: '갈산고등학교',         type: '일반계',   city: '홍성', lat: 36.60549794, lng: 126.5485309, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000123', homepageUrl: 'http://galsan.cnehs.kr' },
  { name: '서해삼육고등학교',     type: '일반계',   city: '홍성', lat: 36.50702711, lng: 126.6274837, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000187', homepageUrl: 'http://seohae36.cnehs.kr' },
  { name: '홍성고등학교',         type: '일반계',   city: '홍성', lat: 36.65002305, lng: 126.6726479, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000272', homepageUrl: 'http://hongseong.cnehs.kr/' },
  { name: '홍성여자고등학교',     type: '일반계',   city: '홍성', lat: 36.60766788, lng: 126.6677458, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000274', homepageUrl: 'http://hongyoe.cnehs.kr' },
  { name: '홍주고등학교',         type: '일반계',   city: '홍성', lat: 36.59304247, lng: 126.6635955, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000276', homepageUrl: 'http://hongju.cnehs.kr' },
  { name: '홍성공업고등학교',     type: '특성화고', city: '홍성', lat: 36.53052807, lng: 126.548891,  schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000130', homepageUrl: 'http://www.hstec.cnehs.kr/' },
  { name: '한국K-POP고등학교',    type: '특성화고', city: '홍성', lat: 36.50775179, lng: 126.621805,  schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000139', homepageUrl: 'http://k-pophs.cnehs.kr' },
  { name: '충남드론항공고등학교', type: '특성화고', city: '홍성', lat: 36.50499577, lng: 126.6277245, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000143', homepageUrl: 'http://www.cda.cnehs.kr' },

  /* ── 보령 ──────────────────────────────────────────────── */
  { name: '대천고등학교',         type: '일반계',   city: '보령', lat: 36.36548254, lng: 126.6037039, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000158', homepageUrl: 'http://daechon.cnehs.kr' },
  { name: '대천여자고등학교',     type: '일반계',   city: '보령', lat: 36.36065895, lng: 126.5844531, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000160', homepageUrl: 'http://www.dcgirls.cnehs.kr' },
  { name: '웅천고등학교',         type: '일반계',   city: '보령', lat: 36.23414083, lng: 126.6048439, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000221', homepageUrl: 'http://www.uc.cnehs.kr' },
  { name: '대천여자상업고등학교', type: '특성화고', city: '보령', lat: 36.33171125, lng: 126.5787395, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000161', homepageUrl: 'http://dcg.cnehs.kr' },
  { name: '주산산업고등학교',     type: '특성화고', city: '보령', lat: 36.19841587, lng: 126.6361739, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000233', homepageUrl: 'http://jusan.cnehs.kr' },
  { name: '충남해양과학고등학교', type: '특성화고', city: '보령', lat: 36.31920853, lng: 126.5137465, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000258', homepageUrl: 'http://www.marine.cnehs.kr' },

  /* ── 금산 ──────────────────────────────────────────────── */
  { name: '금산고등학교',       type: '일반계',       city: '금산', lat: 36.10689599, lng: 127.4956787, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000144', homepageUrl: 'http://www.kumsan.cnehs.kr' },
  { name: '금산여자고등학교',   type: '자율형 공립고', city: '금산', lat: 36.10579382, lng: 127.4839931, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000147', homepageUrl: 'http://www.geumsan-g.cnehs.kr' },
  { name: '금산산업고등학교',   type: '특성화고',     city: '금산', lat: 36.10412109, lng: 127.4795317, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000146', homepageUrl: 'http://www.kumsan-ih.cnehs.kr/' },
  { name: '금산하이텍고등학교', type: '특성화고',     city: '금산', lat: 36.14233727, lng: 127.3738956, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000236', homepageUrl: 'http://ksh.cnehs.kr/' },

  /* ── 예산 ──────────────────────────────────────────────── */
  { name: '대흥고등학교',             type: '일반계',   city: '예산', lat: 36.60471176, lng: 126.7920205, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000162', homepageUrl: 'http://daeheung.cnehs.kr' },
  { name: '덕산고등학교',             type: '일반계',   city: '예산', lat: 36.6663075,  lng: 126.6826831, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000163', homepageUrl: 'http://yds.cnehs.kr' },
  { name: '삽교고등학교',             type: '일반계',   city: '예산', lat: 36.68775785, lng: 126.7478383, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000175', homepageUrl: 'http://sapgyo.cnehs.kr' },
  { name: '예산고등학교',             type: '일반계',   city: '예산', lat: 36.68121719, lng: 126.8378061, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000206', homepageUrl: 'http://yesan.cnehs.kr' },
  { name: '예산여자고등학교',         type: '일반계',   city: '예산', lat: 36.6847907,  lng: 126.8336186, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000208', homepageUrl: 'http://yesan-girls.cnehs.kr' },
  { name: '예산예화여자고등학교',     type: '특성화고', city: '예산', lat: 36.68092684, lng: 126.8389971, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000209', homepageUrl: 'https://www.yehwa.cnehs.kr' },
  { name: '충남반도체마이스터고등학교', type: '마이스터고', city: '예산', lat: 36.7133231, lng: 126.8382043, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000210', homepageUrl: 'http://cnsm.cnehs.kr/' },

  /* ── 부여 ──────────────────────────────────────────────── */
  { name: '부여고등학교',         type: '일반계',   city: '부여', lat: 36.27316716, lng: 126.9236965, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000170', homepageUrl: 'http://buyeo.cnehs.kr' },
  { name: '부여여자고등학교',     type: '일반계',   city: '부여', lat: 36.28524545, lng: 126.9163872, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000172', homepageUrl: 'http://buyeoyeo.cnehs.kr' },
  { name: '부여전자고등학교',     type: '특성화고', city: '부여', lat: 36.17645828, lng: 126.8917948, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000173', homepageUrl: 'http://www.garim.cnehs.kr' },
  { name: '부여정보고등학교',     type: '특성화고', city: '부여', lat: 36.2773112,  lng: 126.881986,  schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000174', homepageUrl: 'http://bishs.cnehs.kr' },
  { name: '한국식품마이스터고등학교', type: '마이스터고', city: '부여', lat: 36.21507344, lng: 126.7659965, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000270', homepageUrl: 'http://www.kfm.cnehs.kr' },

  /* ── 태안 ──────────────────────────────────────────────── */
  { name: '만리포고등학교',   type: '일반계', city: '태안', lat: 36.76027544, lng: 126.1907958, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000165', homepageUrl: 'http://manripo.cnehs.kr' },
  { name: '안면고등학교',     type: '일반계', city: '태안', lat: 36.50939919, lng: 126.3559738, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000195', homepageUrl: 'http://www.anmyeon.cnehs.kr' },
  { name: '태안고등학교',     type: '일반계', city: '태안', lat: 36.7542198,  lng: 126.3178567, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000259', homepageUrl: 'http://taean.cnehs.kr' },
  { name: '태안여자고등학교', type: '일반계', city: '태안', lat: 36.75924253, lng: 126.2892233, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000260', homepageUrl: 'http://tg.cnehs.kr' },

  /* ── 서천 ──────────────────────────────────────────────── */
  { name: '서천고등학교',         type: '일반계',       city: '서천', lat: 36.08605952, lng: 126.6896046, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000183', homepageUrl: 'http://seocheon.cnehs.kr' },
  { name: '서천여자고등학교',     type: '자율형 공립고', city: '서천', lat: 36.08148788, lng: 126.6935483, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000184', homepageUrl: 'http://www.seocheon-gl.cnehs.kr/' },
  { name: '장항고등학교',         type: '일반계',       city: '서천', lat: 36.01660364, lng: 126.7065891, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000226', homepageUrl: 'http://janghang.cnehs.kr' },
  { name: '한국미래문화고등학교', type: '특성화고',     city: '서천', lat: 36.08419661, lng: 126.7009089, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000186', homepageUrl: 'http://kfch.cnehs.kr/' },
  { name: '장항공업고등학교',     type: '특성화고',     city: '서천', lat: 36.0152537,  lng: 126.6859866, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000227', homepageUrl: 'http://www.jhth.cnehs.kr' },
  { name: '비전고등학교',         type: '특성화고',     city: '서천', lat: 36.10034344, lng: 126.7133397, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120002528', homepageUrl: 'http://vision.cnehs.kr' },
  { name: '충남디자인예술고등학교', type: '예술고',     city: '서천', lat: 36.08949235, lng: 126.8023134, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000262', homepageUrl: 'http://diyego.cnehs.kr' },

  /* ── 청양 ──────────────────────────────────────────────── */
  { name: '정산고등학교', type: '일반계', city: '청양', lat: 36.4137039,  lng: 126.9494216, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000252', homepageUrl: 'http://www.jeongsan.cnehs.kr' },
  { name: '청양고등학교', type: '일반계', city: '청양', lat: 36.45242158, lng: 126.7967515, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120002727', homepageUrl: 'http://chy.cnehs.kr/' },

  /* ── 계룡 ──────────────────────────────────────────────── */
  { name: '용남고등학교', type: '일반계', city: '계룡', lat: 36.29441803, lng: 127.2448294, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120000218', homepageUrl: 'http://yongnam.cnehs.kr' },
  { name: '계룡고등학교', type: '일반계', city: '계룡', lat: 36.26807925, lng: 127.2579948, schoolinfoUrl: 'https://www.schoolinfo.go.kr/ei/ss/Pneiss_b01_s0.do?schulCode=S120002546', homepageUrl: 'http://grhs.cnehs.kr' },

];
