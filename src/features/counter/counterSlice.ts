import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialStateType = {
  maxValue: number;
  startValue: number;
  result: number;
};

const initialState: InitialStateType = {
  maxValue: 4,
  startValue: 0,
  result: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setMaxValue: (state, action: PayloadAction<{ maxValue: number }>) => {
      state.maxValue = action.payload.maxValue;
      if (action.payload.maxValue < state.startValue) {
        state.startValue = state.maxValue;
        state.result = state.startValue;
      } else {
        state.result = 0;
      }
    },
    setStartValue: (state, action: PayloadAction<{ startValue: number }>) => {
      if (action.payload.startValue <= state.maxValue) {
        state.startValue = action.payload.startValue;
        state.result = state.startValue;
      }
    },
    increment: (state) => {
      if (state.startValue === 0) {
        state.result += 1; // Увеличиваем result на 1, если startValue равно 0
      } else {
        state.result += 1; // Просто увеличиваем результат, начиная с startValue
      }
    },
    reset: (state) => {
      state.result = 0;
    },
  },
});

export const { setMaxValue, setStartValue, increment, reset } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
