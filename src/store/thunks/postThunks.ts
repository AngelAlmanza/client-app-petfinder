import { createAsyncThunk } from "@reduxjs/toolkit";
import { petFinderApi } from "../../api/petFinderApi";
import { CreatePostResponse, GetAllPostResponse, GetPostResponse, StorePostRequest } from "../../interfaces/PostInterfaces";

export const createPost = createAsyncThunk(
  'post/createPost',
  async (payload: StorePostRequest, thunkAPI) => {
    try {
      const response = await petFinderApi.post<CreatePostResponse>('/posts/create', payload);
      return response.data;
    } catch (error) {
      console.error(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPosts = createAsyncThunk(
  'post/getPosts',
  async (_, thunkAPI) => {
    try {
      const response = await petFinderApi.get<GetAllPostResponse>('/posts');
      return response.data.posts.data;
    } catch (error) {
      console.error(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPostById = createAsyncThunk(
  'post/getPostById',
  async (postId: string, thunkAPI) => {
    try {
      const response = await petFinderApi.get<GetPostResponse>(`/posts/${postId}`);
      return response.data.post;
    } catch (error) {
      console.error(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  'post/deletePost',
  async (postId: string, thunkAPI) => {
    try {
      const response = await petFinderApi.delete(`/posts/${postId}/destroy`);
      return response.data;
    } catch (error) {
      console.error(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const updatePost = createAsyncThunk(
  'post/updatePost',
  async (payload: { postId: string, post: StorePostRequest }, thunkAPI) => {
    try {
      const response = await petFinderApi.put(`/posts/${payload.postId}/update`, payload.post);
      return response.data;
    } catch (error) {
      console.error(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);