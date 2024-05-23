import {createSlice} from '@reduxjs/toolkit';
import { Post, PostSearchQueryParams } from '../../interfaces/PostInterfaces';
import { createPost, getPostById, getPostBySearch, getPosts } from '../thunks/postThunks';

interface PostState {
  posts: Post[];
  currentPost: Post | null;
  searchResults: Post[];
  filters: PostSearchQueryParams | null;
  isLoading: boolean;
}

const initialState: PostState = {
  posts: [],
  currentPost: null,
  searchResults: [],
  filters: null,
  isLoading: false,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: builder => {
    // CREATE POST
    builder.addCase(createPost.fulfilled, (state, action) => {
      if (!action.payload?.post) return;
      state.posts.push(action.payload.post);
      state.isLoading = false;
    });
    builder.addCase(createPost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createPost.rejected, (state) => {
      state.isLoading = false;
    });

    // GET POSTS
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload || [];
      state.isLoading = false;
    });
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPosts.rejected, (state) => {
      state.isLoading = false;
    });

    // GET POST BY ID
    builder.addCase(getPostById.fulfilled, (state, action) => {
      state.currentPost = action.payload || null;
      state.isLoading = false;
    });
    builder.addCase(getPostById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPostById.rejected, (state) => {
      state.isLoading = false;
    });

    // GET POST BY SEARCH
    builder.addCase(getPostBySearch.fulfilled, (state, action) => {
      state.searchResults = action.payload || [];
      state.isLoading = false;
    });
    builder.addCase(getPostBySearch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPostBySearch.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {
  setCurrentPost,
  setSearchResults,
  setFilters,
} = postSlice.actions;
