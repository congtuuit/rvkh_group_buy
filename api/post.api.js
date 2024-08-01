// utils/api.js
import axiosInstance from "./axiosInstance";

export const getPostsAsync = async (params = {}) => {
  try {
    const response = await axiosInstance.get("", {
      params: { action: "get_group_buy_post", ...params },
    });
    return response.data;
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};
