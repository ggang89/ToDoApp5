import styled from "styled-components";

const Wrapper = styled.div`
  border-bottom: 1px solid lightblue;
`;
const Title = styled.h1`
  color: dodgerblue;
  text-align: center;
`;
const Day = styled.h3`
  text-align: end;

`;
export default function Header() {
  const day = new Date();
  return (
    <Wrapper>
      <Title>To Do App</Title>
      <Day>📅 {day.toLocaleDateString()}</Day>
    </Wrapper>
  );
}
