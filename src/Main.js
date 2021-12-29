import { useEffect, useState } from "react";
import styled from "styled-components";
import Cards from "./components/Cards";
import * as config from "./config";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "./store/redux";
import Spinner from "./components/spinner";
import Loader from "react-loader-spinner";

const Main = () => {
  // flag - 추가 데이터 로드 할지말지
  const [fetching, setFetching] = useState(false);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const { RESULT, list_total_count, row } = useSelector(
    (state) => state.dataReducer
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchMoreFacility = async () => {
    // flag true
    setFetching(true);
  };

  const fetchData = async () => {
    try {
      //http://openAPI.seoul.go.kr:8088/485051717663687238356663674753/xml/ListPublicReservationSport/1/5/농구장
      const url = `${config.SERVICE_URL}/${
        config.SERVICE_KEY
      }/json/ListPublicReservationSport/${page + 1}/${page + 10}/농구장`;
      const res = await axios({
        method: "GET",
        url,
      });

      // action;
      dispatch(
        getDataAction({
          RESULT: res.data.ListPublicReservationSport.RESULT,
          list_total_count:
            res.data.ListPublicReservationSport.list_total_count,
          row: res.data.ListPublicReservationSport.row,
        })
      );

      //   setData(res.data.ListPublicReservationSport);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <MainContainer>
      <div className="main">
        <div className="search">
          <div className="inputTitle">InputTitle</div>
          <input className="searchInput" />
          <button className="searchButton">Search</button>
        </div>
        {/* <Cards /> */}
        {RESULT ? (
          <Cards list_total_count={list_total_count} row={row} />
        ) : (
          <Spinner />
        )}
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  border: 1px solid var(--color-black);
  width: 100%;
  max-width: 1050px;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 5rem;

  .main {
    width: 80%;
    margin: 0 auto;
  }

  .search {
    border: 1px solid yellow;
    padding-top: 1rem;
    padding-bottom: 1rem;

    .inputTitle {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-weight: 600;
      font-size: 1.5rem;
    }

    .searchInput {
      width: 20rem;
      border-radius: 1rem;
      border: 1px solid var(--color-purple);
      padding: 0rem 1rem 0 1rem;
      line-height: 2rem;
    }

    .searchButton {
      height: 2rem;
      margin-left: 1.5rem;
      border: 1px solid var(--color-purple);
      border-radius: 1rem;
      background-color: var(--color-primary);
      color: var(--color-black);
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
`;

export default Main;
