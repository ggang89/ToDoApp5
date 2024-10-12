import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoContainer() {
  const [addTodo, setAddTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const inputRef = useRef(null);
 
  const addTodoBtn = () => {
    if (addTodo === "") {
      inputRef.current.focus();
      return;
    };//처음에는 정상동작되는데, 투두 추가후에는 동작안함
    const newTodo = {
      id: uuidv4(),
      todoTitle: addTodo,
      isEditing: false,
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
  const enterUpdate = (e,id) => {
    if (e.keyCode === 13) {
      updateBtn(id);
    }
  };
  const updateBtn = (id) => {
    const newList = todoList.map((todo) => {
      if (todo.id === id) return { ...todo, isEditing: !todo.isEditing }
      return todo;
    });
    setTodoList(newList);
  };
  const handleUpdateTodo = (e,id) => {
    const newList = todoList.map((todo) => {
      if (todo.id === id) return { ...todo, todoTitle: e.target.value }
      return todo
    });
    setTodoList(newList);
  };

  const deleteBtn = (id) => {
    const newList = todoList.filter((todo) => (todo.id !== id));
    setTodoList(newList);
  }
  return (
    <>
      <label htmlFor="addTodo">새로운 할 일 </label>
      <input
        ref={inputRef}
        value={addTodo}
        onChange={handleAddText}
        type="text"
        id="addTodo"
        placeholder=" 개발공부 "
        onKeyDown={enterkey}
      ></input>
      <button onClick={addTodoBtn}>추가</button>

      <ul>
        {todoList.map((todo) =>
          todo.isEditing ? (
            <li>
              <input
                value={todo.todoTitle}
                onChange={(e) => {
                  handleUpdateTodo(e, todo.id);
                }}
                onKeyDown={(e)=>{enterUpdate(e,todo.id)}}
              />
              <button
                onClick={() => {
                  updateBtn(todo.id);
                }}
              >
                저장
              </button>
            </li>
          ) : (
            <li>
              <p>{todo.todoTitle}</p>
              <button
                onClick={() => {
                  updateBtn(todo.id);
                }}
              >
                수정
              </button>
              <button
                onClick={() => {
                  deleteBtn(todo.id);
                }}
              >
                삭제
              </button>
            </li>
          )
        )}
      </ul>
    </>
  );
}
