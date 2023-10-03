import PropTypes from 'prop-types';

import TodoItem from './TodoItem';
const TodosList = ({ todosProps, handleChange, delTodo }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          delTodo={delTodo}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.array.isRequired,
  setTodos: PropTypes.func,
  handleChange: PropTypes.func,
  delTodo: PropTypes.bool,
};

export default TodosList;
