import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Card from "./Card";
import { getDataAction } from "../store/redux";
import { useSelector } from "react-redux";

const Cards = ({ data }) => {
  const { RESULT, list_total_count, row } = useSelector(
    (state) => state.dataReducer
  );

  return (
    <Container>
      <div className="cardAmount">
        체육시설 수 : {list_total_count ? list_total_count : 0}개
      </div>
      <CardsContainer className="cards">
        {row ? (
          row.map((location) => {
            return <Card key={location.SVCID} location={location} />;
          })
        ) : (
          <div>Loading...</div>
        )}
      </CardsContainer>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid blue;

  .cardAmount {
    width: 100%;
    font-weight: 600;
    text-align: start;
    padding-top: 2rem;
  }
`;

const CardsContainer = styled.div`
  border: 1px solid orange;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding-bottom: 3rem;
  padding-top: 3rem;
  justify-items: center;
`;

export default Cards;
