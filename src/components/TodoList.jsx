import styled from "styled-components";

const Li = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 0px 10px;
  border-bottom: 1px solid lightblue;
`;
const Input = styled.input`
  flex:1;
  border:none;
  border-radius: 5px;
  height: 25px;
  margin-bottom: 10px;

`;
const Todo = styled.p`
  flex: 1;
  font-size: 14px;
`;
const Donetodo = styled.p`
  flex: 1;
  font-size: 14px;
  text-decoration: line-through;
  color: gray;
  font-style: italic;
`;
const Button = styled.button`
  background-color: ${(props) => (props.$primary ? "dodgerblue" : "tomato")};
  padding: 3px 7px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
 
`;
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
        <Li>
          <Input
            value={todoTitle}
            onChange={handleUpdateTodo}
            onKeyDown={enterUpdate}
          />
          <Button $primary onClick={updateBtn}>저장</Button>
        </Li>
      ) : (
        <Li>
          <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
          {isDone ? <Donetodo>{todoTitle}</Donetodo> : <Todo>{todoTitle}</Todo>}
          <Button $primary onClick={updateBtn}>
            수정
          </Button>
          <Button onClick={deleteBtn}>삭제</Button>
        </Li>
      )}
    </>
  );
}
