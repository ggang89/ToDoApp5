import styled from "styled-components";


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
    <>
      <Title>To Do App</Title>
      <Day>📅 {day.toLocaleDateString()}</Day>
    </>
  );
}
