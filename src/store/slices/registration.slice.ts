import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Register } from '../../Types/Register.interface';

const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setRegisterData(state, action: PayloadAction<Register>) {
      const { username, email, password, confirmPassword } = action.payload;
      state.username = username;
      state.email = email;
      state.password = password;
      state.confirmPassword = confirmPassword;
    },
  },
});

const { actions, reducer } = registrationSlice;
export const { setRegisterData } = actions;
export default reducer;
