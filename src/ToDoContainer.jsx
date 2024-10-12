import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default function ToDoContainer() {
  const [addTodo, setAddTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const inputRef = useRef(null);

  const addTodoBtn = () => {
    if (addTodo === "") {
      inputRef.current.focus();
      return;
    }
    const newTodo = {
      id: uuidv4(),
      todoTitle: addTodo,
      isEditing: false,
      isDone: false,
    };
    setTodoList([newTodo, ...todoList]);
    setAddTodo("");
  };
  const handleAddText = (e) => {
    setAddTodo(e.target.value);
  };
  const enterkey = (e) => {
    if (e.keyCode === 13) {
      addTodoBtn();
    }
  };
  const enterUpdate = (e, id) => {
    if (e.keyCode === 13) {
      updateBtn(id);
    }
  };
  const updateBtn = (id) => {
    const newList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isEditing: !todo.isEditing };
      } else {
        return todo;
      }
    });
    setTodoList(newList);
  };
  const handleUpdateTodo = (e, id) => {
    const newList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todoTitle: e.target.value };
      }
      return todo;
    });
    setTodoList(newList);
  };
  const onChangeCheckBox = (id) => {
    const newList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodoList(newList);
  };
  const deleteBtn = (id) => {
    const newList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newList);
  };
  return (
    <>
      <TodoInput
        inputRef={inputRef}
        addTodo={addTodo}
        handleAddText={handleAddText}
        enterkey={enterkey}
        addTodoBtn={addTodoBtn}
      />

      <ul>
        {todoList.map((todo) => (
          <TodoList
            key={todo.id}
            todoTitle={todo.todoTitle}
            isDone={todo.isDone}
            isEditing={todo.isEditing}
            handleUpdateTodo={(e) => {
              handleUpdateTodo(e, todo.id);
            }}
            enterUpdate={(e) => {
              enterUpdate(e, todo.id);
            }}
            updateBtn={() => {
              updateBtn(todo.id);
            }}
            onChangeCheckBox={() => {
              onChangeCheckBox(todo.id);
            }}
            deleteBtn={() => {
              deleteBtn(todo.id);
            }}
          />
        ))}
      </ul>
    </>
  );
}
