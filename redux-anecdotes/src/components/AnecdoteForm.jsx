import { useDispatch } from 'react-redux'
import { handleNotification } from '../reducers/notificationReducer'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const add = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    dispatch(createNewAnecdote({ content, votes: 0 }))
    dispatch(handleNotification(`new Anecdote ${content}`, 10))
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm
