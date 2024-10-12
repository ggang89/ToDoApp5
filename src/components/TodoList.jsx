export default function TodoList({
  isEditing,
  todoTitle,
  handleUpdateTodo,
  enterUpdate,
  updateBtn,
  isDone,
  onChangeCheckBox,
  deleteBtn,
}) {
  return (
    <>
      {isEditing ? (
        <li>
          <input
            value={todoTitle}
            onChange={handleUpdateTodo}
            onKeyDown={enterUpdate}
          />
          <button onClick={updateBtn}>저장</button>
        </li>
      ) : (
        <li>
          <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
          {isDone ? <h1 >{todoTitle}</h1> : <p>{todoTitle}</p>}
          <button onClick={updateBtn}>수정</button>
          <button onClick={deleteBtn}>삭제</button>
        </li>
      )}
    </>
  );
}
