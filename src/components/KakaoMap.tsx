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

        // 지도 옵션 설정
        const options = {
          // 중심 좌표
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          // 확대 레벨 (작을수록 더 확대됨)
          level: 3,
        };

        // 새 카카오 지도 객체 생성 — 여기서 실제 지도가 화면에 렌더링
        new window.kakao.maps.Map(container, options);
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
