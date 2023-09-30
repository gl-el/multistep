import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Gender } from "@/types";

interface FormState {
  step: number;
  nickname: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
  sex: Gender;
  advantages: string[];
  radio: number;
  checkbox: number[];
  about: string;
}

const initialState: FormState = {
  step: 0,
  nickname: "",
  name: "",
  surname: "",
  phone: "",
  email: "",
  sex: Gender.MAN,
  advantages: [""],
  radio: 0,
  checkbox: [0],
  about: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    incrementStep: (state) => {
      state.step += 1;
    },
    decrementStep: (state) => {
      state.step -= 1;
    },
    setNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setSurname: (state, action: PayloadAction<string>) => {
      state.surname = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setGender: (state, action: PayloadAction<Gender>) => {
      state.sex = action.payload;
    },
    setAdvantages: (state, action: PayloadAction<string[]>) => {
      state.advantages = action.payload;
    },
    setRadio: (state, action: PayloadAction<number>) => {
      state.radio = action.payload;
    },
    setCheckbox: (state, action: PayloadAction<number[]>) => {
      state.checkbox = action.payload;
    },
    setAbout: (state, action: PayloadAction<string>) => {
      state.about = action.payload;
    },
  },
});

export const {
  incrementStep,
  decrementStep,
  setNickname,
  setName,
  setSurname,
  setPhone,
  setEmail,
  setGender,
  setAdvantages,
  setRadio,
  setCheckbox,
  setAbout,
} = formSlice.actions;

export default formSlice.reducer;
