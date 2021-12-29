import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { MainContainer } from "../common/styled";
import { getDetailDataAction } from "../store/redux";

const Sport = () => {
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
            <Main>
                <h2 className="title">{detail.PLACENM}</h2>
                <div className="img_wrapper">
                    <img src={detail.IMGURL} className="img" />
                </div>
            </Main>
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
`;

export default Sport;
