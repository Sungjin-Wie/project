import axiosInstance from "../config/axios";

export const getCrawlingData = async () => {
  const response = await axiosInstance.get("/crawling", {
    params: { target: "algumon" },
  });
  return response.data;
};
