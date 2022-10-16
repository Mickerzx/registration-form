import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StepsStatus } from '../../typespaces/enums/stepsStatus';

const initialState = {
  step: 0,
  status: StepsStatus.PROCESS,
};

export const stepsSlice = createSlice({
  name: 'seps',
  initialState,
  reducers: {
    onNext(state) {
      state.step += 1;
    },
    onPrev(state) {
      state.step -= 1;
    },
    setStepsStatus(state, action: PayloadAction<StepsStatus>) {
      state.status = action.payload;
    },
  },
});

const { actions, reducer } = stepsSlice;
export const { onNext, onPrev, setStepsStatus } = actions;
export default reducer;
