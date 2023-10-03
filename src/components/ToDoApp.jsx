import '@/App.css';
import Header from './Header';
import TodosLogic from './ToDosLogic';

const TodoApp = () => {
  return (
    <>
      <div className="wrapper">
        <div className="todos">
          <Header />
          <TodosLogic />
        </div>
      </div>
    </>
  );
};
export default TodoApp;
