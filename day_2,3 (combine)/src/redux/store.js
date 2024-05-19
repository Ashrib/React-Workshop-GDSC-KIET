import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import movieReducer from './movie/movieSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movie: movieReducer
  },
})