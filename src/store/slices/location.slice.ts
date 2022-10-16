import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from '../../typespaces/interfaces/Location.interface';

const initialState = {
  country: '',
  town: '',
  street: '',
  house: '',
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocationData(state, action: PayloadAction<Location>) {
      const { country, town, street, house } = action.payload;
      state.country = country;
      state.town = town;
      state.street = street;
      state.house = house;
    },
  },
});

const { actions, reducer } = locationSlice;
export const { setLocationData } = actions;
export default reducer;
