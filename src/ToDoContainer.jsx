import { useState } from "react";

export default function ToDoContainer() {
  const [todo, setTodo] = useState("투두앱만들기");
  const [isEdting, setEdting] = useState(false);
  return (
    <>
      <label htmlFor="addTodo">할 일을 추가하세요.</label>
      <input type="text" id="addTodo" placeholder="텍스트를 입력하세요"></input>
      <button>추가</button>

      <ul>
        {isEdting ? (
          <>
          <input>{todo}</input>
          <button>저장</button>
          </>
        ) : (
          <li>
            {todo}
            <button>수정</button>
            <button>삭제</button>
          </li>
        )}
      </ul>
    </>
  );
}
