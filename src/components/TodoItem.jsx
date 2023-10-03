import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      {itemProp.title}
      <button onClick={() => delTodo(itemProp.id)}>Delete</button>
    </li>
  );
};
export default TodoItem;

TodoItem.propTypes = {
  itemProp: PropTypes.object,
  setTodos: PropTypes.func,
  handleChange: PropTypes.func,
  delTodo: PropTypes.bool,
};
