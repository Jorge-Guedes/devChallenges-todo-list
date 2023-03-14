import P from "prop-types";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./todo.module.css";

const Todo = ({ todo, onChange, onDelete }) => {
  return (
    <>
      <label
        className={`${styles.todo} ${
          todo.checked === true ? styles.todo_checked : ""
        }`}
      >
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={({ target }) => {
            onChange({
              ...todo,
              checked: target.checked,
            });
          }}
        />
        {todo.content}
      </label>
      {onDelete && (
        <button className={styles.delete} onClick={() => onDelete(todo.id)}>
          <MdDeleteOutline />
        </button>
      )}
    </>
  );
};

export default Todo;

P.propTypes = {
  todo: P.object.isRequired,
  onChange: P.func.isRequired,
  onDelete: P.func,
};
