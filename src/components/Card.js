import styled from "styled-components";

const Card = () => {
  return <CardContainer>card1</CardContainer>;
};

const CardContainer = styled.div`
  border: 1px solid red;
  width: 15rem;
  height: 20rem;
  border-radius: 6px;
  background-color: white;
`;

export default Card;
