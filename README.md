# 🍽️ Eatopia

> Find your flavor, your own utopia of taste.

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

- [Server](https://github.com/yeah1832/eatingMark-BE)
- [Swagger](https://oz-coding-school.github.io/FE-pre-project-swagger-ui/)

| Method   | Endpoint             | Description           |
| -------- | -------------------- | --------------------- |
| `GET`    | `/places`            | 전체 맛집 데이터 조회 |
| `GET`    | `/users/places`      | 찜한 맛집 데이터 조회 |
| `POST`   | `/users/places`      | 찜한 나만의 맛집 추가 |
| `DELETE` | `/users/places/{id}` | 찜한 나만의 맛집 삭제 |

데이터는 `data/` 폴더의 JSON 파일에서 가져옵니다.

<br>

## 🧩 Tech Stack Overview

| Category         | Stack                        |
| ---------------- | ---------------------------- |
| Framework        | React (Vite)                 |
| UI / Styling     | Tailwind CSS, shadcn/ui      |
| Icons            | Lucide React                 |
| State Management | Zustand / React Query        |
| Deployment       | Vercel / AWS S3 + CloudFront |

<br>

## 🗂️ Structure

```plaintext
  src/
  ├── assets/                # 이미지, 로고, 배너 등 정적 자원
  ├── api/                   # API 호출 및 관련 함수들을 관리
  ├── components/            # 재사용 가능한 UI 컴포넌트
  └── App.jsx                # 메인 APP 컴포넌트
```

<br>
