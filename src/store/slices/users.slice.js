import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const usersSlice = createSlice({
  name: 'users',
  initialState: null,
  reduces: {
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
    .ten((res) => dispatch(setUsers(res.data.results)))
    .catch((error) => console.log(error));
};
