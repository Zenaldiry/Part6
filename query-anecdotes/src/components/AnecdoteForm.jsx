import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createNewAnecdote } from '../../services/anecdote'
import { useNotificationDispatch } from '../hooks/useNotificationContext'
const AnecdoteForm = () => {
  const dispatch = useNotificationDispatch()
  const queryClient = useQueryClient()
  const newAnecdoteMutation = useMutation({
    mutationFn: createNewAnecdote,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], [...anecdotes, newAnecdote])
      dispatch({ type: 'SET', payload: `new Anecdote ${newAnecdote.content}` })
      setTimeout(() => {
        dispatch({ type: 'CLEAR' })
      }, 5000)
    },
    onError: () => {
      dispatch({
        type: 'SET',
        payload: 'too short anecdote, must have length 5 or more',
      })
      setTimeout(() => {
        dispatch({ type: 'CLEAR' })
      }, 5000)
    },
  })
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
