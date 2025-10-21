import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap() {
  useEffect(() => {
    const APP_KEY = import.meta.env.VITE_KAKAO_JS_KEY;

    // <script> 태그를 JS로 직접 만들어서 HTML <head>에 추가
    // 이렇게 하면 SDK를 동적으로 불러올 수 있다.
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}&autoload=false`;
    script.async = true; // 페이지 로딩과 동시에 비동기적으로 불러오기

    // SDK 로드가 완료되면 실행되는 콜백
    script.onload = () => {
      // 카카오 맵 라이브러리의 내부 리소스까지 모두 로드한 뒤 실행
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        if (!container) return;

        const fallback = new window.kakao.maps.LatLng(37.5665, 126.978); // 서울시청
        const map = new window.kakao.maps.Map(container, {
          center: fallback,
          level: 5,
        });

        // 현재 위치로 이동
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
              const here = new window.kakao.maps.LatLng(
                coords.latitude,
                coords.longitude
              );
              map.setCenter(here);
              new window.kakao.maps.Marker({ position: here, map });
            },
            (err) => console.warn("geolocation 실패:", err),
            { enableHighAccuracy: true, timeout: 5000 }
          );
        }
      });
    };

    // 만든 <script> 태그를 <head>에 삽입해서 SDK 로드 시작
    document.head.appendChild(script);

    // cleanup 함수 — 컴포넌트가 사라질 때 <script>도 제거
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // 지도 영역으로 사용할 div
  return <div id="map" style={{ width: "100%", height: "400px" }} />;
}
