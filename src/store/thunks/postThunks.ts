import { createAsyncThunk } from "@reduxjs/toolkit";
import { petFinderApi } from "../../api/petFinderApi";
import { CreatePostResponse, GetAllPostResponse, StorePostRequest } from "../../interfaces/PostInterfaces";

export const createPost = createAsyncThunk(
  'post/createPost',
  async (payload: StorePostRequest, thunkAPI) => {
    try {
      const response = await petFinderApi.post<CreatePostResponse>('/posts/create', payload, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().auth.token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      thunkAPI.rejectWithValue(error);
    }
  }
)

export const getPosts = createAsyncThunk(
  'post/getPosts',
  async (_, thunkAPI) => {
    try {
      const response = await petFinderApi.get<GetAllPostResponse>('/posts', {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().auth.token}`,
        },
      });
      return response.data.posts.data;
    } catch (error) {
      console.error(error);
      thunkAPI.rejectWithValue(error);
    }
  }
)