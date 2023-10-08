import { createSlice } from '@reduxjs/toolkit';

interface FormState {
  step: number;
}

const initialState: FormState = {
  step: 0,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    incrementStep: (state) => {
      state.step += 1;
    },
    decrementStep: (state) => {
      state.step -= 1;
    },
    resetStep: (state) => {
      state.step = 0;
    },
  },
});

export const { incrementStep, decrementStep, resetStep } = formSlice.actions;

export default formSlice.reducer;
