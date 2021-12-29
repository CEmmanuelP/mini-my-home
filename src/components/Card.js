import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ location }) => {
  useEffect(() => {}, []);
  return (
    <CardContainer src={location.IMGURL}>
      <div className="thumb">
        <Link
          to={`facilities/sports/${location.SVCID}`}
          className="thumbnail"
        />
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
      <div className="button_wrapper">
        <Link
          to={`facilities/sports/${location.SVCID}`}
          className="button"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          Reservation Link
        </Link>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 17rem;
  height: 22rem;
  border-radius: 6px;
  background-color: white;
  box-shadow: 2px 2px 3px 0;
  display: flex;
  flex-direction: column;

  .thumb {
    width: 100%;
    height: 12rem;
    position: relative;
    border-radius: 6px;
  }
  .thumb .thumbnail {
    position: absolute;
    left: 0;
    top: 0;
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
      font-size: 1rem;
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
      padding-top: 1rem;
    }
  }

  .button_wrapper {
    width: 100%;
  }

  .button {
    display: block;
    border: 1px solid var(--color-green);
    height: 2rem;
    width: 100%;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--color-gray);
    text-decoration: none;
    margin-top: 1rem;
    line-height: 2rem;
  }
`;

export default Card;
