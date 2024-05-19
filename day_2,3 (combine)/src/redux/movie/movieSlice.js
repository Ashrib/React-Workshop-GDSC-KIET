import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,

  reducers: {
    setMovies: (state,action)=>{
      state.value = [...action.payload]  // [...{},{}]
    }
  },
})

// Action creators are generated for each case reducer function
export const { setMovies } = movieSlice.actions

export default movieSlice.reducer