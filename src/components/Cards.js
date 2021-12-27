import { useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";

const Cards = ({ data }) => {
    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <Container>
            <div className="cardAmount">
                체육시설 수 :{" "}
                {data.list_total_count ? data.list_total_count : 0}개
            </div>
            <CardsContainer className="cards">
                {data.row.map((location) => {
                    return <Card location={location} />;
                })}
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
