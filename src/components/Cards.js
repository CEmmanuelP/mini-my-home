import { useEffect } from "react";
import styled from "styled-components";
import * as config from "../config";

const Cards = () => {
    useEffect(() => {
        console.log(config.SERVICE_KEY);
    }, []);

    return (
        <>
            <CardContainer className="cards">
                <div className="card">card1</div>
                <div className="card">card2</div>
                <div className="card">card3</div>
                <div className="card">card4</div>
            </CardContainer>
        </>
    );
};

const CardContainer = styled.div`
    border: 1px solid orange;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding-bottom: 3rem;
    padding-top: 3rem;
    justify-items: center;
`;

export default Cards;
