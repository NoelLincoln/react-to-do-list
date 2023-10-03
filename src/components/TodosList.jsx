import PropTypes from 'prop-types';

import TodoItem from './TodoItem';
const TodosList = ({ todosProps, handleChange }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange} />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.array.isRequired,
  setTodos: PropTypes.func,
  handleChange: PropTypes.func,
};

export default TodosList;
