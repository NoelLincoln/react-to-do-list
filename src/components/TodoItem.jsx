import styles from '@/styles/TodoItem.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <div className={styles.itemCheckbox}>
          <input type="checkbox" checked={itemProp.completed} />
          {itemProp.title}
        </div>
        <div className="action-btns">
          <button onClick={handleEditing}>Edit</button>
          <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        </div>
      </div>
      <input
        type="text"
        defaultValue={itemProp.title}
        className={styles.textInput}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
        style={editMode}
      />
    </li>
  );
};
export default TodoItem;

TodoItem.propTypes = {
  itemProp: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
