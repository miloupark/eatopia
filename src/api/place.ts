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

// /place 엔드포인트에서 맛집 데이터 가져오기
export const getPlaces = async (): Promise<Place[]> => {
  try {
    const { data } = await api.get("/places");
    return data.places;
  } catch (error) {
    console.error("맛집 데이터를 불러오지 못했습니다.", error);
    return [];
  }
};
