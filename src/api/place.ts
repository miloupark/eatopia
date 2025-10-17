import axios from "axios";
import { api } from "./axios";

// 맛집 데이터 타입 정의
export type Place = {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  lat: number;
  lon: number;
  description: string;
};

// 에러 타입 정의
export type ApiError = {
  code: "404" | "UNKNOWN_ERROR";
  message: string;
};

// /place 엔드포인트에서 맛집 데이터 가져오기
export const getPlaces = async (): Promise<Place[]> => {
  try {
    // 공통 axios 인스턴스로 GET /places 요청
    const { data } = await api.get("/places");
    return data.places;
  } catch (error) {
    // axios에서 발생한 에러인지 확인 (axios 공식 깃허브 참고!)
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;

      // 404 에러 상위로 투척
      if (status === 404) {
        throw {
          code: "404",
          message: "요청하신 데이터를 찾을 수 없습니다. (404)",
        };
      }
    }
    throw {
      code: "UNKNOWN_ERROR",
      message: "에러가 발생했습니다. 잠시 후 다시 시도해주세요.",
    };
  }
};
