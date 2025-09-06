import { searchFor } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'
const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    const searchInput = event.target.value
    dispatch(searchFor(searchInput))
  }
  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter <input name='search' onChange={handleChange} />
    </div>
  )
}

export default Filter
