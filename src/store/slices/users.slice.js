import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const usersSlice = createSlice({
  name: 'users',
  initialState: null,
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;

export const getUsers = () => (dispatch) => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      console.log(res.data);
      dispatch(setUsers(res.data));
    })
    .catch((error) => console.log(error));
};
