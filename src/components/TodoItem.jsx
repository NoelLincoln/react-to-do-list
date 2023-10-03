import styles from '@/styles/TodoItem.module.css';
import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <div className={styles.itemCheckbox}>
          <input
            type="checkbox"
            checked={itemProp.completed}
            onChange={() => handleChange(itemProp.id)}
          />
          {itemProp.title}
        </div>

        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
      </div>
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
