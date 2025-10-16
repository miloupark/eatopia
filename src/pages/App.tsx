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

import Card from "../components/common/Card";
import Header from "../components/common/Header";
import MainLayout from "../components/common/MainLayout";

function App() {
  return (
    <>
      <Header />
      <MainLayout>
        {/* 맛집 목록 */}
        <section>
          <h2 className="text-center">맛집 목록</h2>
          <div className="flex gap-5 p-10">
            {[...Array(4)].map((_, i) => (
              <Card
                key={i}
                name="더미 카페"
                category="디저트 카페"
                rating={4.7}
                imageUrl="https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=200"
              />
            ))}
          </div>
        </section>
        {/* 찜 맛집 목록 */}
        <section>
          <h2 className="text-center">찜한 맛집 목록</h2>
          <div className="flex gap-5 p-10">
            {[...Array(4)].map((_, i) => (
              <Card
                key={i}
                name="더미 카페"
                category="디저트 카페"
                rating={4.7}
                imageUrl="https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=200"
              />
            ))}
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export default App;
