import axios from "axios";
import { API_BASE_URL } from "./constants";

// axios 인스턴스 생성
export const api = axios.create({
  baseURL: `${API_BASE_URL}`, // 백엔드 서버 주소
});
