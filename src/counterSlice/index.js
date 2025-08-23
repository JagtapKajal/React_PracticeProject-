import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'

const initialState = {
  value: 0,
  counter: 10,
  name: "John",
  product: [
    {id: 1, title: "Laptop"},
    {id: 2, title: "Mobile"}
  ]
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer