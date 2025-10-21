import axios from "axios";
import { api } from "./axios";
import type { Place } from "./place";

// 목록 조회
export const getSavedPlaces = async (): Promise<Place[]> => {
  try {
    const { data } = await api.get("/users/places");
    return data.places;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 404) {
        throw { code: "404", message: "찜한 맛집을 찾을 수 없습니다. (404)" };
      }
    }
    throw {
      code: "UNKNOWN_ERROR",
      message:
        "찜 목록을 불러오는 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
    };
  }
};

// 찜 목록 추가
export const addSavedPlace = async (place: Place): Promise<Place> => {
  try {
    await api.post("/users/places", { place });
    return place;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 404) {
        throw { code: "404", message: "요청이 잘못되었습니다. (404)" };
      }
    }
    throw {
      code: "UNKNOWN_ERROR",
      message: "찜 추가 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
    };
  }
};

// 찜 목록 삭제
export const removeSavedPlace = async (id: string): Promise<void> => {
  try {
    await api.delete(`/users/places/${id}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 404) {
        throw { code: "404", message: "삭제할 찜을 찾을 수 없습니다. (404)" };
      }
    }
    throw {
      code: "UNKNOWN_ERROR",
      message: "찜 삭제 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
    };
  }
};
