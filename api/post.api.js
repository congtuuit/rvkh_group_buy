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

export const postsAsync = async (params = {}) => {
  try {
    const response = await axiosInstance.post(
      "",
      {
        action: "create_group_buy_post",
        ...params,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};

export const deletePostAsync = async (postId) => {
  try {
    const response = await axiosInstance.post(
      "",
      {
        action: "delete_group_buy_post",
        id: postId,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};
