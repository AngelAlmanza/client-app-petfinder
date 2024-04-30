import {createSlice} from '@reduxjs/toolkit';
import { Post } from '../../interfaces/PostInterfaces';

interface PostState {
  posts: Post[];
  isLoading: boolean;
}

const initialState: PostState = {
  posts: [],
  isLoading: false,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  addPost,
  deletePost,
  setLoading,
} = postSlice.actions;
