import P from "prop-types";
import { useState } from "react";
import FormModal from "../Form/FormModal";

import Todo from "../Todo";
import styles from "./main.module.css";

const Main = ({
  menu,
  todos,
  onAddTodo,
  onChangeTodo,
  onDeleteTodo,
  onDeleteAllTodo,
}) => {
  const [details, setDetails] = useState("");

  function addTodo() {
    if (details?.length <= 0) {
      alert("Preencha o campo para inserir!");
      return;
    }
    setDetails("");
    onAddTodo(details);
  }

  return (
    <main className={`container ${styles.main}`}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        {menu !== "completed" && (
          <div className={styles.search_btn}>
            <input
              type="text"
              placeholder="add details"
              value={details}
              onChange={({ target }) => setDetails(target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") addTodo();
              }}
            />
            <button type="button" onClick={addTodo}>
              Add
            </button>
          </div>
        )}

        <ol className={styles.todo_results}>
          {todos?.length > 0 &&
            todos.map((todo) => (
              <li key={todo.id}>
                {menu === "all" && (
                  <Todo menu={menu} todo={todo} onChange={onChangeTodo} />
                )}
                {menu === "active" && todo.checked === false && (
                  <Todo menu={menu} todo={todo} onChange={onChangeTodo} />
                )}
                {menu === "completed" && todo.checked === true && (
                  <Todo
                    menu={menu}
                    todo={todo}
                    onChange={onChangeTodo}
                    onDelete={onDeleteTodo}
                  />
                )}
              </li>
            ))}
          {menu === "completed" &&
            todos.every(({ checked }) => checked === false) && (
              <li>No tasks completed.</li>
            )}
        </ol>

        {menu === "completed" &&
          todos.some(({ checked }) => checked === true) && (
            <FormModal body="delete all" onDeleteAllTodo={onDeleteAllTodo} />
          )}
      </form>
    </main>
  );
};

P.propTypes = {
  menu: P.string.isRequired,
  todos: P.object.isRequired,
  onAddTodo: P.func,
  onChangeTodo: P.func.isRequired,
  onDeleteTodo: P.func,
  onDeleteAllTodo: P.func,
};

export default Main;
