import PropTypes from 'prop-types';

const TodoItem = ({ itemProp }) => {
  return (
    <li>
      <input type="checkbox" />
      {itemProp.title}
    </li>
  );
};
export default TodoItem;

TodoItem.propTypes = {
  itemProp: PropTypes.object,
};
