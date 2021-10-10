import { createSlice } from "@reduxjs/toolkit";
export const POST_REDUCER_FEATURE = "posts";

interface IPostInitialState {
  posts: any[];
  loading: boolean;
}

const initialState: IPostInitialState = {
  posts: [],
  loading: false,
};

const postSlice = createSlice({
  name: POST_REDUCER_FEATURE,
  initialState: initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = [...action.payload];
      state.loading = false;
    },
    setPostsLoading: (state) => {
      state.loading = false;
    },
  },
});

export const postSliceActions = postSlice.actions;
export default postSlice.reducer;
