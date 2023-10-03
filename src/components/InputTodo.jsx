import { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    addTodoItem(title);
    setTitle('');
  };

  InputTodo.propTypes = {
    addTodoItem: PropTypes.func,
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default InputTodo;
