// utils/api.js
import axios from "axios";
import axiosInstance from "./axiosInstance";

export const getPostsAsync = async (params = {}) => {
  try {
    const response = await axiosInstance.get("/wp-json/tutor-helper/v1/courses", {
      params: { ...params },
    });
    return response.data;
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};

export const getAsync = async (id) => {
  try {
    const response = await axiosInstance.get(`/wp-json/tutor-helper/v1/get-course?id=${id}`);
    return response.data;
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};

export const postsAsync = async (data) => {
  try {
    const response = await axiosInstance.post("/wp-json/tutor-helper/v1/create-course", data);
    return response.data;
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};

export const putAsync = async (data) => {
  try {
    const response = await axiosInstance.post("/wp-json/tutor-helper/v1/update-course", data);
    return response.data;
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};

export const deletePostAsync = async (postId) => {
  try {
    const response = await axiosInstance.post("/wp-json/tutor-helper/v1/delete-course", {
      id: postId,
    });
    return response.data;
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};
