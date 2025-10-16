# 🍽️ Eatopia

> Find your flavor, your own utopia of taste.  
> React + TypeScript + Vite 기반의 맛집 탐색 서비스입니다.

<br>

## 📖 About Eatopia

Eatopia = Eat + Utopia  
"누구나 자신만의 맛의 이상향을 찾을 수 있는 곳."

🗺️ 맛의 유토피아를 찾아가는 여정을 담은 웹 서비스입니다.  
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

- [Server](https://github.com/yeah1832/eatingMark-BE)
- [Swagger](https://oz-coding-school.github.io/FE-pre-project-swagger-ui/)

<br>

## 🧩 Tech Stack Overview

| Category         | Stack                        |
| ---------------- | ---------------------------- |
| Framework        | React (Vite)                 |
| UI / Styling     | Tailwind CSS                 |
| Icons            | Lucide React                 |
| Networking       | Axios                        |
| State Management | Zustand / React Query        |
| Deployment       | Vercel / AWS S3 + CloudFront |

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

- [Endpoint](https://rebornbb.tistory.com/entry/Web-Endpoint%EC%97%90-%EB%8C%80%ED%95%9C-%EC%84%A4%EB%AA%85)
- [Axios 인스턴스](https://axios-http.com/kr/docs/instance)
