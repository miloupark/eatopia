# 🍽️ [Eatopia](https://eatopia-alpha.vercel.app/)

> 기본 요구사항은 OZ Coding School에서 제공받았으며,  
> 본 리포지토리에는 개인적으로 추가/개선한 기능과 학습 기록이 포함됩니다.

Find your flavor, your own utopia of taste.  
나만의 맛집을 발견하고 기록하는 React + TypeScript + Vite 기반 웹 서비스입니다.

- [Eatopia](https://eatopia-alpha.vercel.app/)

<br>

## 📖 About Eatopia

> Eatopia = Eat + Utopia  
> "누구나 자신만의 맛의 이상향을 찾을 수 있는 곳."

🗺️ 나만의 맛의 유토피아를 찾아가는 여정을 담은 웹 서비스입니다.  
✍🏼 좋아하는 맛집을 탐색하고, 저장하며 나만의 취향을 기록해보세요.  
🍴 한 끼의 식사가 하나의 이야기로 이어지는 공간 - Eatopia에서.

<br>

## 🧩 Learning Issues

> 개발 중 발생한 주요 이슈와 학습을 기록했습니다.  
> 상세한 내용은 각 이슈 링크에서 확인할 수 있습니다.

- [💩 시행착오: Express.static() 매핑 경로 이해 부족으로 인한 이미지 404 에러](https://github.com/miloupark/eatopia/issues/2)
- [🧩 Axios 에러 처리 로직 구현 및 에러 상태 관리](https://github.com/miloupark/eatopia/issues/3)
- [🧩 로컬 서버 없이 백엔드 데이터를 받아오는 구조](https://github.com/miloupark/eatopia/issues/4)
- [💩 시행착오: {lat, lon} 타입 축소로 인한 Place 속성 소거 → TS2339 발생](https://github.com/miloupark/eatopia/issues/5)

<br>

<br>

## 🔍 API Overview

| Method   | Endpoint             | Description           |
| -------- | -------------------- | --------------------- |
| `GET`    | `/places`            | 전체 맛집 데이터 조회 |
| `GET`    | `/users/places`      | 찜한 맛집 데이터 조회 |
| `POST`   | `/users/places`      | 찜한 나만의 맛집 추가 |
| `DELETE` | `/users/places/{id}` | 찜한 나만의 맛집 삭제 |

- [Backend Repo](https://github.com/miloupark/eatopia-BE)
- [Swagger UI](https://oz-coding-school.github.io/FE-pre-project-swagger-ui/)

<br>

## 🧩 Tech Stack Overview

| Category     | Stack        |
| ------------ | ------------ |
| Framework    | React (Vite) |
| UI / Styling | Tailwind CSS |
| Icons        | Lucide React |
| Networking   | Axios        |
| Deployment   | Vercel       |

<br>

## 🌐 API Client 구조

> HTTP 통신은 Axios 인스턴스로 관리합니다.

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

## 🧭 거리 계산 및 정렬 (`utils/loc.ts`)

> 내 위치 기반 거리순 정렬 기능  
> 사용자 위치와 맛집 간의 거리를 계산하여, 가까운 순으로 정렬합니다.

```ts
function toRad(value: number): number {
  return (value * Math.PI) / 180;
}

function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
) {
  const R = 6371; // 지구 반지름(km)
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lng2 - lng1);
  const l1 = toRad(lat1);
  const l2 = toRad(lat2);

  // 하버사인 공식
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(l1) * Math.cos(l2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
}

export function sortPlacesByDistance<T extends { lat: number; lon: number }>(
  places: T[],
  lat: number,
  lon: number
) {
  const sortedPlaces = [...places];
  sortedPlaces.sort((a, b) => {
    const distanceA = calculateDistance(lat, lon, a.lat, a.lon);
    const distanceB = calculateDistance(lat, lon, b.lat, b.lon);
    return distanceA - distanceB; // 가까운 순
  });
  return sortedPlaces;
}
```

### 동작 원리

- `toRad()`
  - 위도/경도는 보통 `도(degree)` 단위이므로, 삼각함수에 쓰기 위해 라디안으로 변환
- `calculateDistance()`:
  - 두 위도/경도 간의 대권거리를 하버사인 공식으로 계산
  - 지구 반지름 `R=6371(km)`을 기준으로 km 단위 결과 반환
  - 대부분의 지도 위치 기반 서비스에서 사용하는 표준 거리 계산식
- `sortPlacesByDistance()`:
  - 특정 좌표(사용자 위치)를 기준으로 모든 장소의 거리를 계산
  - 가까운 순서대로 배열을 정렬하여 반환

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

🗺️ Kakao Map

- [Kakao Maps API](https://apis.map.kakao.com/web/guide/)
- [KaKao Developers](https://developers.kakao.com/)
- []()
- []()

🧭 Distance Sort

- [[React/Typescript] 지도 중심 위치와 가까운 거리순으로 데이터 정렬하기](https://velog.io/@cogito/ReactTypescript-%EB%84%A4%EC%9D%B4%EB%B2%84-%EC%A7%80%EB%8F%84-API-5%ED%8E%B8-%EC%A7%80%EB%8F%84-%EC%A4%91%EC%8B%AC-%EC%9C%84%EC%B9%98%EC%99%80-%EA%B0%80%EA%B9%8C%EC%9A%B4-%EA%B1%B0%EB%A6%AC%EC%88%9C%EC%9C%BC%EB%A1%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0-5gcjdmvc)
- [리액트에서 필터링과 상태 관리의 효율적인 구현 방법](https://f-lab.kr/insight/react-filtering-state-management-20250106)

⚙️ TSConfig / 빌드 설정

- [TSconfig Reference](https://www.typescriptlang.org/tsconfig/)
- [Typescript 컴파일시 세부설정 - allowJs ](https://codingapple.com/unit/typescript-tsconfig-json/)

- [React에서-SVG-컴포넌트로-불러오기](https://fay-story.com/entry/React%EC%97%90%EC%84%9C-SVG-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A1%9C-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0-Vite-TS-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-SVG-%ED%8C%8C%EC%9D%BC-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-feat-vite-plugin-svgr#google_vignette)

- [[React] vite + ts에서 vite-plugin-svgr로 svg 사용 설정](https://breathof.tistory.com/311)
