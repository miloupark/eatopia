// 🧩 App
import { useEffect, useState } from "react";
import Card from "./components/common/Card";
import Header from "./components/common/Header";
import MainLayout from "./components/common/MainLayout";
import { getPlaces, type ApiError, type Place } from "./api/place";

// 타입 가드: ApiError 타입인지 확인
const isApiError = (error: unknown): error is ApiError => {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    "message" in error
  );
};

function App() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setErrorMessage(null);

    getPlaces()
      .then((res) => {
        setPlaces(res ?? []);
      })
      .catch((caughtError: unknown) => {
        // axios에서 던진 ApiError인지 확인
        if (isApiError(caughtError)) {
          // getPlaces에서 던진 message 그대로 표시
          setErrorMessage(caughtError.message);
        }
      })
      .finally(() => setLoading(false)); // 로딩 종료
  }, []);

  return (
    <>
      <Header />
      <MainLayout>
        {/* 맛집 목록 */}
        <section>
          <h2 className="text-center">맛집 목록</h2>

          {/* 로딩 상태 */}
          {loading && <p>🍽️ 맛집을 불러오는 중입니다...</p>}

          {/* 에러 상태 */}
          {!loading && errorMessage && <p>{errorMessage}</p>}

          {!loading && !errorMessage && places.length > 0 && (
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
          )}
        </section>

        {/* 찜 맛집 목록 */}
        <section>
          <h2 className="text-center">찜 맛집 목록</h2>
          <p>찜한 맛집이 없습니다.</p>
        </section>
      </MainLayout>
    </>
  );
}

export default App;
