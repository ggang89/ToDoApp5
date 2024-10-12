export default function TodoInput({inputRef,
addTodo,
handleAddText,
enterkey,
addTodoBtn}) {
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
    </>
  );
}