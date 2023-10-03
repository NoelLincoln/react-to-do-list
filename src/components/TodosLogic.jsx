import { useState } from 'react';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import { v4 as uuidv4 } from 'uuid';

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
    },
  ]);
  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList
        todosProps={todos}
        setTodos={setTodos}
        handleChange={handleChange}
        delTodo={delTodo}
        addTodoItem={addTodoItem}
      />
    </div>
  );
};
export default TodosLogic;
