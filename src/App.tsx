// 🧩 App
import { useEffect, useMemo, useState } from "react";
import Card from "./components/common/Card";
import Header from "./components/common/Header";
import MainLayout from "./components/common/MainLayout";
import { getPlaces, type ApiError, type Place } from "./api/place";
import { sortPlacesByDistance } from "./utils/loc";

// 타입 가드: ApiError 타입인지 확인
const isApiError = (error: unknown): error is ApiError => {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    "message" in error
  );
};

// 사용자 위치 정보 타입
type UserLocation = {
  lat: number; // 위도
  lon: number; // 경도
};

// 정렬 옵션 타입
type SortOption = "default" | "distance";

function App() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // 위치/오류 상태
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  // UI 정렬 기준
  const [sortBy, setSortBy] = useState<SortOption>("default");

  // 맛집 데이터 가져오기
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

  // 사용자 위치 가져오기 (거리순 필터 선택 시)
  const getUserLocation = () => {
    setLocationError(null);

    // 위치 정보 요청
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // 위도, 경도 저장
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setSortBy("distance");
      },
      (error) => {
        let message = "";

        if (error.code === error.PERMISSION_DENIED) {
          message = "위치 접근이 거부되었습니다.";
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          message = "위치 정보를 사용할 수 없습니다.";
        } else if (error.code === error.TIMEOUT) {
          message = "위치 정보를 가져오는데 시간이 초과되었습니다.";
        } else {
          message = "알 수 없는 오류가 발생했습니다.";
        }

        setLocationError(message);
        setSortBy("default");
      },
      {
        enableHighAccuracy: true, // 더 정확한 위치 측정
        timeout: 10000, // 위치 정보를 가져오는 최대 대기 시간
        maximumAge: 0, // 캐시된 위치 정보 대신 항상 최신 정보를 요청
      }
    );
  };

  // 정렬된 맛집 데이터
  const sortedPlaces = useMemo(() => {
    // places / sortBy / userLocation 이 바뀔 때만 재계산
    if (sortBy === "distance" && userLocation && places.length > 0) {
      return sortPlacesByDistance(places, userLocation.lat, userLocation.lon);
    }
    return places;
  }, [places, sortBy, userLocation]);

  // 정렬 옵션 변경 핸들러
  const handleSortChange = (option: SortOption) => {
    if (option === "distance" && !userLocation) {
      getUserLocation();
    } else {
      setSortBy(option);
    }
  };

  return (
    <>
      <Header />
      <MainLayout>
        {/* 맛집 목록 */}
        <section>
          <h2 className="text-center">맛집 목록</h2>

          {/* 필터링 버튼 */}
          <div className="flex justify-end">
            <button onClick={() => handleSortChange("default")}>기본순</button>
            <button onClick={() => handleSortChange("distance")}>거리순</button>
          </div>

          {/* 위치 오류 안내 */}
          {locationError && <p>{locationError}</p>}

          {/* 로딩 상태 */}
          {loading && <p>🍽️ 맛집을 불러오는 중입니다...</p>}

          {/* 에러 상태 */}
          {!loading && errorMessage && <p>{errorMessage}</p>}

          {!loading && !errorMessage && sortedPlaces.length > 0 && (
            <div className="grid grid-cols-4 gap-5 p-10">
              {sortedPlaces.map((place) => (
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
