import { useEffect, useState } from "react";
import styled from "styled-components";
import * as config from "../config";
import axios from "axios";

const Cards = () => {
  const [houses, setHouses] = useState();

  useEffect(() => {
    // fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const url = `${config.CORS_URL}/${config.SERVICE_URL}`;

      const res = await axios({
        method: "GET",
        url,
      });

      console.log(res.data);
      if (res.data.msg === "OK") {
        setHouses(res.data.hsmpList);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <CardsContainer className="cards">
        <div className="card">card1</div>
        <div className="card">card2</div>
        <div className="card">card3</div>
        <div className="card">card4</div>
      </CardsContainer>
    </>
  );
};

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
