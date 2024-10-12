import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoContainer() {
  const [addTodo, setAddTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodoBtn = () => {
    const newTodo = {
      id: uuidv4(),
      todoTitle: addTodo,
      isEditing: false,
    };
    setTodoList([newTodo, ...todoList]);
    setAddTodo(" ");
  };
  const handleAddText = (e) => {
    setAddTodo(e.target.value);
  };
  
  return (
    <>
      <label htmlFor="addTodo">할 일을 추가하세요.</label>
      <input
        value={addTodo}
        onChange={handleAddText}
        type="text"
        id="addTodo"
        placeholder="텍스트를 입력하세요"
      ></input>
      <button onClick={addTodoBtn}>추가</button>

      <ul>
        {todoList.map((todo) =>
          todo.isEditing ? (
            <li>
              <input value={todo.todoTitle}/>
              <button>저장</button>
            </li>
          ) : (
            <li>
              <p>{todo.todoTitle}</p>
              <button>수정</button>
              <button>삭제</button>
            </li>
          )
        )}
      </ul>
    </>
  );
}
