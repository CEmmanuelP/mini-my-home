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
                <div className="title">{location.PLACENM}</div>
                <div className="tags">
                    <span className="max">{location.MAXCLASSNM}</span>
                    <span className="min">{location.MINCLASSNM}</span>
                    <span className="payat">{location.PAYATNM}</span>
                </div>
                <div>{location.SVCID}</div>
                <div>{location.SVCNM}</div>
            </div>
            <button className="button">Reservation Link</button>
        </CardContainer>
    );
};

const CardContainer = styled.div`
    border: 1px solid red;
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

    .tags {
        padding: 0.5rem;

        .max {
            display: inline-block;
            height: 2rem;
            margin: 0.5rem;
            vertical-align: middle;
            color: var(--color-purple);
            background-color: #f3f3f3;
            border-radius: 4px;
        }
    }
`;

export default Card;
