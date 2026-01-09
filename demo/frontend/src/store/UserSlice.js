import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch users from your Spring Boot API
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('/users');
  return response.data;
});
export const postUser = createAsyncThunk('users/postUsers', async (userData) => {
  const response = await axios.post('/users', userData);
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: { items: [], status: 'idle' },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'idle';
    });
    builder.addCase(postUser.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
  },
  reducers: undefined
});

export default userSlice.reducer;
