import ToDoContainer from "./ToDoContainer";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 600px;
  padding: 5px 10px;
  /* box-sizing: ; */
  background: #fff;
  
`;


function App() {
  return (
    <Wrapper>
      <ToDoContainer />
    </Wrapper>
  );
}

export default App;
