import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { useEffect } from 'react'
import { initializeAnecdotes } from '../reducers/anecdoteReducer'
import { handleNotification } from '../reducers/notificationReducer'
import Filter from './Filter'
const AnecdoteList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [])

  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const filteredAnecdotes =
      filter === ''
        ? anecdotes
        : anecdotes.filter((a) => {
            return a.content.toLowerCase().includes(filter.toLowerCase())
          })
    return [...filteredAnecdotes].sort((a, b) => {
      return b.votes - a.votes
    })
  })

  const handleVotes = (anecdote) => {
    dispatch(voteAnecdote({ ...anecdote, votes: anecdote.votes + 1 }))
    dispatch(handleNotification(`you voted ${anecdote.content}`, 10))
  }

  return (
    <div>
      <Filter />
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button
              onClick={() => {
                handleVotes(anecdote)
              }}
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default AnecdoteList
