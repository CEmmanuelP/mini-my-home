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
  faMoneyBillAlt,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";
import FacilityCategory from "./FacilityCategory";

const Facility = () => {
  const id = document.location.href.split("/").reverse()[0];
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.dataReducer);

  useEffect(() => {
    // action;
    dispatch(
      getDetailDataAction({
        id: id,
      })
    );
  }, []);

  const goReservation = () => {
    // 기존 창
    // window.location.href = detail.SVCURL;
    // 새 창
    window.open(detail.SVCURL);
  };

  return (
    <MainContainer>
      {detail ? (
        <Main>
          <h2 className="title">{detail.PLACENM}</h2>
          <div style={{ width: "100%", height: "30rem" }}>
            <div className="img_wrapper">
              <img src={detail.IMGURL} className="img" alt="facility_img" />
            </div>
            <div className="description">
              <div>소재지 : {detail.AREANM}</div>
              <div>이용대상 : {detail.USETGTINFO}</div>
              <div>전화번호 : {detail.TELNO}</div>
              <div>이름 : {detail.SVCNM}</div>
              <button className="desc_reservation" onClick={goReservation}>
                <span>예약하러 가기</span>
              </button>
            </div>
          </div>
          <div className="metadata">
            <FacilityCategory
              icon={faBasketballBall}
              desc={detail.MINCLASSNM}
            />
            <FacilityCategory icon={faDumbbell} desc={detail.MAXCLASSNM} />
            <FacilityCategory icon={faMoneyBillAlt} desc={detail.PAYATNM} />
            <FacilityCategory
              icon={faRunning}
              desc={detail.V_MIN}
              option={detail.V_MAX}
            />
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
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border: 1px solid purple;
  }

  .img_wrapper {
    width: 50%;
    height: 100%;
    float: left;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .description {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    float: right;
    justify-content: center;

    * {
      border: 1px solid green;
      padding: 1rem;
      flex-grow: 1;
      display: flex;
      line-height: 0.7rem;
      font-size: 1.2rem;
    }

    .desc_reservation {
      border: 2px solid black;
      width: 90%;
      height: 2rem;
      margin: auto;
      margin-top: 1rem;
      margin-bottom: 1rem;
      text-align: center;

      span {
        display: block;
        font-weight: 600;
        font-size: 1.2rem;
      }
    }
  }

  .metadata {
    border: 1px solid pink;
    display: flex;
    align-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;

export default Facility;
