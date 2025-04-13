import { RootState } from "../store.ts";

export const selectMaxValue = (state: RootState) => state.counter.maxValue;
export const selectStartValue = (state: RootState) => state.counter.startValue;
export const selectResult = (state: RootState) => state.counter.result;
