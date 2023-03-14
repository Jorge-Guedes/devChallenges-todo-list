import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { v4 as uuid } from "uuid";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";
import "./index.css";

const allDetails = [
  {
    id: uuid().slice(4),
    content: "Add todo",
    checked: false,
  },
];

function App() {
  const [todos, setTodos] = useLocalStorage("allTodo", allDetails);
  const [menu, setMenu] = useState("all");

  function handleAddTodo(content) {
    setTodos([
      ...todos,
      {
        id: uuid().slice(4),
        content: content,
        checked: false,
      },
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return nextTodo;
        } else {
          return todo;
        }
      })
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  function handleDeleteAllTodo(todoId) {
    setTodos(todos.filter((todo) => todo.checked !== true));
  }

  function handleMenuTodo({ target }) {
    setMenu(target.value);
  }

  return (
    <div className="App">
      <Header menu={menu} onHandleMenu={handleMenuTodo} />
      <Main
        menu={menu}
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteAllTodo={handleDeleteAllTodo}
        onDeleteTodo={handleDeleteTodo}
        onAddTodo={handleAddTodo}
      />
      <Footer />
    </div>
  );
}

export default App;
