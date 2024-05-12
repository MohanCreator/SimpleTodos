// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachItem, deletefun} = props
  const {id, title} = eachItem
  const onDelete = () => {
    deletefun(id)
  }
  return (
    <li className="container">
      <p>{title}</p>
      <button onClick={onDelete} type="button" className="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
