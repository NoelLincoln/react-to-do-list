import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const TodosList = ({ todosProps }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} />
      ))}
    </ul>
  );
};
TodosList.propTypes = {
  todosProps: PropTypes.object,
};

export default TodosList;
