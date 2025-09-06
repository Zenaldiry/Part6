import { createSlice } from '@reduxjs/toolkit'
import { getAll, createAnecdote, editVotes } from '../../services/anecdote'
const initialState = []
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    setAnecdotes(state, action) {
      return action.payload
    },
    voteFor(state, action) {
      return state.map((s) =>
        s.id === action.payload.id ? action.payload : s
      )
    },
    createNew(state, action) {
      state.push(action.payload)
    },
  },
})

export default anecdoteSlice.reducer
export const { voteFor, createNew, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createNewAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await createAnecdote(content)
    dispatch(createNew(newAnecdote))
  }
}

export const voteAnecdote = (data) => {
  return async (dispatch) => {
    const anecdoteAfterVote = await editVotes(data)
    dispatch(voteFor(anecdoteAfterVote))
  }
}
