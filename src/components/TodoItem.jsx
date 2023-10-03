import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      {itemProp.title}
    </li>
  );
};
export default TodoItem;

TodoItem.propTypes = {
  itemProp: PropTypes.object,
  setTodos: PropTypes.func,
  handleChange: PropTypes.func,
};
