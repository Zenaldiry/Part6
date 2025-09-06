import anecdoteReducer from './src/reducers/anecdoteReducer'
import filterReducer from './src/reducers/filterReducer'
import notificatioReducer from './src/reducers/notificationReducer'
import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificatioReducer,
  },
})

export default store
