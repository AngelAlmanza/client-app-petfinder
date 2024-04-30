import {createSlice} from '@reduxjs/toolkit';
import { Post } from '../../interfaces/PostInterfaces';
import { createPost, getPosts } from '../thunks/postThunks';

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
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.posts.push(action.payload!.post);
      state.isLoading = false;
    });
    builder.addCase(createPost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createPost.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload!;
      state.isLoading = false;
    });
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPosts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// export const {} = postSlice.actions;
