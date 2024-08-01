// store/postsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPostsAsync } from "../api/post.api";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (page) => {
  console.log("..fetchPosts");
  const response = await getPostsAsync({ paged: page });
  const { success, data } = response;
  if (success) {
    return data;
  }
  return [];
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    totalPages: 1,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload.posts;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
