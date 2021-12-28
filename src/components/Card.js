import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ location }) => {
  useEffect(() => {}, []);
  return (
    <CardContainer src={location.IMGURL}>
      <div className="thumb">
        <Link to="#" className="thumbnail" />
      </div>
      <div className="description">
        <h3 className="title">{location.PLACENM}</h3>
        <div className="tags">
          <span className="max">{location.MAXCLASSNM}</span>
          <span className="min">{location.MINCLASSNM}</span>
          <span className="payat">{location.PAYATNM}</span>
        </div>
        <div className="desc">{location.SVCNM}</div>
      </div>
      <Link
        to={`facilities/sports/${location.SVCID}`}
        className="button"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        Reservation Link
      </Link>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  border: 1px solid var(--color-primary);
  width: 16rem;
  height: 20rem;
  border-radius: 6px;
  background-color: white;
  box-shadow: 2px 2px 3px 0;

  .thumb {
    width: 16rem;
    height: 12rem;
    position: relative;
    border-radius: 6px;
  }
  .thumb .thumbnail {
    position: absolute;
    left: 0;
    height: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6px;
  }

  .description {
    padding: 1rem;

    .title {
      font-weight: 600;
      font-size: 1.1rem;
    }

    .tags {
      padding: 0.5rem;

      .max {
        display: inline-block;
        height: 1rem;
        font-size: 0.7rem;
        font-weight: 600;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        padding-top: 0.3rem;
        margin-right: 0.5rem;
        color: var(--color-green);
        background-color: var(--color-primary);
        border-radius: 8px;
      }

      .min {
        display: inline-block;
        height: 1rem;
        font-size: 0.7rem;
        font-weight: 600;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        padding-top: 0.3rem;
        margin-right: 0.5rem;
        color: var(--color-black);
        background-color: #f3f3f3;
        border-radius: 8px;
      }

      .payat {
        display: inline-block;
        height: 1rem;
        font-size: 0.7rem;
        font-weight: 600;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        padding-top: 0.3rem;
        color: var(--color-lightblue);
        background-color: var(--color-yellow);
        border-radius: 8px;
      }
    }
    .desc {
      font-size: 0.7rem;
      color: #666666;
    }
  }
  .button {
    display: block;
    border: 1px solid var(--color-green);
    height: 2rem;
    width: 16rem;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--color-gray);
    text-decoration: none;
    line-height: 2rem;
    margin-bottom: 0.4rem;
  }
`;

export default Card;
