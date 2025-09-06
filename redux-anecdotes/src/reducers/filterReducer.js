import { createSlice } from '@reduxjs/toolkit'
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    searchFor(state, action) {
      return action.payload
    },
  },
})

export default filterSlice.reducer
export const { searchFor } = filterSlice.actions
