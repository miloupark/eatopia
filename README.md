# 🍽️ Eatopia

> Find your flavor, your own utopia of taste.  
> 나만의 맛집을 발견하고 기록하는 React + TypeScript + Vite 기반 웹 서비스입니다.

<br>

## 📖 About Eatopia

Eatopia = Eat + Utopia  
"누구나 자신만의 맛의 이상향을 찾을 수 있는 곳."

🗺️ 나만의 맛의 유토피아를 찾아가는 여정을 담은 웹 서비스입니다.  
✍🏼 좋아하는 맛집을 탐색하고, 저장하며 나만의 취향을 기록해보세요.  
🍴 한 끼의 식사가 하나의 이야기로 이어지는 공간 - Eatopia에서.

- [Eatopia](#)

<br>

## 🔍 API Overview

| Method   | Endpoint             | Description           |
| -------- | -------------------- | --------------------- |
| `GET`    | `/places`            | 전체 맛집 데이터 조회 |
| `GET`    | `/users/places`      | 찜한 맛집 데이터 조회 |
| `POST`   | `/users/places`      | 찜한 나만의 맛집 추가 |
| `DELETE` | `/users/places/{id}` | 찜한 나만의 맛집 삭제 |

- [Backend Repo](https://github.com/yeah1832/eatingMark-BE)
- [Swagger UI](https://oz-coding-school.github.io/FE-pre-project-swagger-ui/)

<br>

## 🧩 Tech Stack Overview

| Category     | Stack                        |
| ------------ | ---------------------------- |
| Framework    | React (Vite)                 |
| UI / Styling | Tailwind CSS                 |
| Icons        | Lucide React                 |
| Networking   | Axios                        |
| Deployment   | Vercel / AWS S3 + CloudFront |

<br>

## 🌐 API Client

- HTTP 클라이언트: Axios
- 공통 인스턴스 관리: `src/api/axios.ts`
  - `baseURL` 및 전역 설정 정의
  - 다른 모듈에서 import하여 공통 사용

<br>

## 🗂️ Structure

```plaintext
  src/
  ├── api/                   # API 호출 및 관련 함수 관리
  │ ├── axios.ts             # axios 인스턴스 생성
  │ ├── constants.ts         # 상수 정의
  │ └── place.ts             # /places 맛집 데이터 요청 함수
  ├── assets/                # 이미지, 로고, 배너 등 정적 자원
  ├── components/
  │ └── common/              # 공통 UI 컴포넌트
  │ │ ├── Card.tsx           # 맛집 카드 컴포넌트
  │ │ ├── Header.tsx         # 상단 헤더 컴포넌트
  │ │ └── MainLayout.tsx     # 전체 페이지 레이아웃 구조
  ├── pages/                 # 페이지 단위 컴포넌트
  └── App.tsx                # 루트 진입 컴포넌트

```

<br>

## 🔖 Reference

📘 Axios & Error Handling

- [Axios 인스턴스](https://axios-http.com/kr/docs/instance)
- [Axios 에러 핸들링](https://axios-http.com/kr/docs/handling_errors)
- [Axios GitHub - TypeScript definitions & type guard for axios errors](https://github.com/axios/axios?tab=readme-ov-file#typescript)
- [stackoverflow - HTTP error status code in Axios](https://stackoverflow.com/questions/39153080/how-can-i-get-the-status-code-from-an-http-error-in-axios)

📗 TypeScript & Type Guard

- [타입 가드](https://radlohead.gitbook.io/typescript-deep-dive/type-system/typeguard)
- [타입스크립트에서 Axios Error 처리하기](https://gxxrxn.github.io/axios-error-type-guard/)

📙 Network & Error Design

- [Endpoint란?](https://rebornbb.tistory.com/entry/Web-Endpoint%EC%97%90-%EB%8C%80%ED%95%9C-%EC%84%A4%EB%AA%85)
- [wikidocs - HTTP 상태 코드와 에러 처리, 안정적인 통신 구현하기](https://wikidocs.net/288120)
- [에러 & 출력 문구 상수화](https://khs20010327.tistory.com/321)

🌍 Geolocation

- [MDN - Geolocation_API](https://developer.mozilla.org/ko/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#geolocation_%EA%B0%9D%EC%B2%B4)
- [MDN - GeolocationPositionError](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPositionError?utm_source=chatgpt.com)
- [[Javascript] Geolocation API 사용하여 현재 위치 가져오기](https://velog.io/@seoyaon/Javascript-Geolocation-API-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0#1-geolocation-api-%EB%9E%80)

🧭 Distance Sort

- [[React/Typescript] 지도 중심 위치와 가까운 거리순으로 데이터 정렬하기](https://velog.io/@cogito/ReactTypescript-%EB%84%A4%EC%9D%B4%EB%B2%84-%EC%A7%80%EB%8F%84-API-5%ED%8E%B8-%EC%A7%80%EB%8F%84-%EC%A4%91%EC%8B%AC-%EC%9C%84%EC%B9%98%EC%99%80-%EA%B0%80%EA%B9%8C%EC%9A%B4-%EA%B1%B0%EB%A6%AC%EC%88%9C%EC%9C%BC%EB%A1%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0-5gcjdmvc)
- [리액트에서 필터링과 상태 관리의 효율적인 구현 방법](https://f-lab.kr/insight/react-filtering-state-management-20250106)

⚙️ TSConfig / 빌드 설정

- [TSconfig Reference](https://www.typescriptlang.org/tsconfig/)
- [Typescript 컴파일시 세부설정 - allowJs ](https://codingapple.com/unit/typescript-tsconfig-json/)
