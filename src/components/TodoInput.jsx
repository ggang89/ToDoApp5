import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  padding: 10px 5px;
`;
const Label = styled.label`
  font-size: 14px;
  color: darkgrey;
`;
const Input = styled.input`
  flex: 1;
  border: none;
  border-radius: 5px;
  text-align: center;
`;
const Button = styled.button`
  background-color: dodgerblue;
  padding: 3px 7px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;
export default function TodoInput({
  inputRef,
  addTodo,
  handleAddText,
  enterkey,
  addTodoBtn,
}) {
  return (
    <Wrapper>
      <Label htmlFor="addTodo"> 할 일 </Label>
      <Input
        ref={inputRef}
        value={addTodo}
        onChange={handleAddText}
        type="text"
        id="addTodo"
        placeholder=" 개발공부 "
        onKeyDown={enterkey}
      ></Input>
      <Button onClick={addTodoBtn}>추가</Button>
    </Wrapper>
  );
}
