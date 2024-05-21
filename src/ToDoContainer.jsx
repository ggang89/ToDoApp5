import { useState } from "react";
import {v4 as uuidv4} from "uuid";

export default function ToDoContainer() {
  const [addTodo, setAddTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEdting, setEdting] = useState(false);

const addText=()=>{
const newArr={
  id:uuidv4(),
  todoTitle:addTodo,
  isEdting:false,
};
setTodoList([newArr,...todoList]);
setAddTodo(" ");
};
const handleAddText=(e)=>{
setAddTodo(e.target.value);
};

  const addTodoText = () => {};
  const addBtn = () => {};
  return (
    <>
      <label htmlFor="addTodo">할 일을 추가하세요.</label>
      <input value={addTodo} onChange={handleAddText} type="text" id="addTodo" placeholder="텍스트를 입력하세요"></input>
      <button onClick={addText}>추가</button>

      <ul>
        {isEdting ? (
          <>
            <input onChange={addTodoText} type="text"></input>
            {/* input 안에 값을 넣어주면 오류가 생긴다 => value값으로 넣어줘서 해결함*/}
            <button onClick={addBtn}>저장</button>
          </>
        ) : (
          <li>
            <p></p>
            <button>수정</button>
            <button>삭제</button>
          </li>
        )}
      </ul>
    </>
  );
}
