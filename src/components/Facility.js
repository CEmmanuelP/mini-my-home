import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { MainContainer } from "../common/styled";
import { getDetailDataAction } from "../store/redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBasketballBall,
    faDumbbell,
} from "@fortawesome/free-solid-svg-icons";

const Facility = () => {
    const id = document.location.href.split("/").reverse()[0];
    const dispatch = useDispatch();
    const { detail } = useSelector((state) => state.dataReducer);

    useEffect(() => {
        console.log(id);
        // action;
        dispatch(
            getDetailDataAction({
                id: id,
            })
        );
    }, []);

    useEffect(() => {
        if (detail) console.log(detail);
    }, [detail]);

    return (
        <MainContainer>
            {detail ? (
                <Main>
                    <h2 className="title">{detail.PLACENM}</h2>
                    <div className="img_wrapper">
                        <img src={detail.IMGURL} className="img" />
                    </div>
                    <div className="metadata">
                        <div className="element">
                            <FontAwesomeIcon
                                className="element_ico"
                                icon={faBasketballBall}
                            />
                            <div className="element_desc">
                                {detail.MINCLASSNM}
                            </div>
                        </div>
                        <div className="element">
                            <FontAwesomeIcon
                                className="element_ico"
                                icon={faDumbbell}
                            />
                            <div className="element_desc">
                                {detail.MAXCLASSNM}
                            </div>
                        </div>
                        <div className="element">3</div>
                        <div className="element">4</div>
                    </div>
                </Main>
            ) : (
                ""
            )}
        </MainContainer>
    );
};

const Main = styled.div`
    border: 1px solid red;

    .title {
        font-size: 3rem;
        font-weight: 600;
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border: 1px solid purple;
    }

    .img_wrapper {
        width: 100%;
        height: 30rem;
    }

    .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .metadata {
        border: 1px solid pink;
        display: flex;
        justify-content: space-around;
        align-content: center;
        align-items: center;
        width: 100%;
        height: 5rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;

        .element {
            border: 1px solid yellow;
            flex-grow: 1;
            height: 100%;

            .element_ico {
                width: 3rem;
                height: 3rem;
            }

            .element_desc {
                font-weight: 600;
                padding-top: 0.5rem;
            }
        }
    }
`;

export default Facility;
