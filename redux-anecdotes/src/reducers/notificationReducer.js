import { createSlice } from '@reduxjs/toolkit'
const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    clearNotification() {
      return ''
    },
  },
})

export default notificationSlice.reducer
export const { setNotification, clearNotification } = notificationSlice.actions
export const handleNotification = (text, time) => {
  return (dispatch) => {
    dispatch(setNotification(text))
    setTimeout(() => {
      dispatch(clearNotification())
    }, time * 1000)
  }
}
