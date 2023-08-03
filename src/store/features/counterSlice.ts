import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
  title: string
}
const initialState: CounterState = {
  value: 0,
  title: "redux toolkit pre"
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
// 导出加减的方法
export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state: { counter: { value: any; }; }) => state.counter.value;

// 默认导出
export default counterSlice.reducer;

