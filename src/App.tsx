// 🧩 Draft
// [TODO]
// - 레이아웃 컴포넌트 분리
// - 0. header / main / footer
// - 1. 맛집 목록
// - 2. 찜한 맛집 목록
// - 3. 맛집 카드
// - 4. 맛집 목록 필터링 (평점 / 최신 / 거리 / 카테고리 화)
// - 5. 찜한 맛집 목록 필터링
// - 6. 맛집 목록 무한 스크롤

import { useEffect, useState } from "react";
import Card from "./components/common/Card";
import Header from "./components/common/Header";
import MainLayout from "./components/common/MainLayout";
import { getPlaces, type Place } from "./api/place";

function App() {
  // 맛집 데이터 상태 관리
  const [places, setPlaces] = useState<Place[]>([]);

  // 컴포넌트 마운트 시, API 요청
  useEffect(() => {
    getPlaces()
      .then((res) => setPlaces(res))
      .catch((err) => console.error("맛집 데이터를 불러오지 못했습니다.", err));
  }, []);

  return (
    <>
      <Header />
      <MainLayout>
        {/* 맛집 목록 */}
        <section>
          <h2 className="text-center">맛집 목록</h2>
          <div className="grid grid-cols-4 gap-5 p-10">
            {places.map((place) => (
              <Card
                id={place.id}
                key={place.id}
                title={place.title}
                image={place.image}
                description={place.description}
              />
            ))}
          </div>
        </section>

        {/* 찜 맛집 목록 */}
        <section>
          <h2 className="text-center">찜 맛집 목록</h2>
          <div className="grid grid-cols-4 gap-5 p-10">
            {places.map((place) => (
              <Card
                id={place.id}
                key={place.id}
                title={place.title}
                image={place.image}
                description={place.description}
              />
            ))}
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export default App;
