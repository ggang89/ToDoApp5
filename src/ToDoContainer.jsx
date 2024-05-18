export default function ToDoContainer() {
  return (
    <>
      <label htmlFor="addTodo">할 일을 추가하세요.</label>
      <input type="text" id="addTodo" placeholder="텍스트를 입력하세요"></input>
      <button>추가</button>

      <ul>
        <li></li>
      </ul>
    </>
  );
}
