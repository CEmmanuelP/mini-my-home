import { useEffect, useState } from "react";
import styled from "styled-components";
import * as config from "../config";
import axios from "axios";

const Cards = () => {
    const [houses, setHouses] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    // 급등 키워드
    //http://apis.data.go.kr/1140100/minAnalsInfoView3/minRisingKeyword3?serviceKey=인증키(URL Encode)&dataType=json&analysisTime=2021050614&maxResult=10&target=pttn,dfpt,saeol&mainSubCode=1140100
    // 핵심 키워드
    //http://apis.data.go.kr/1140100/minAnalsInfoView3/minTopNKeyword3?serviceKey=인증키(URL-Encode)&target=pttn,dfpt,saeol&dateFrom=20210501&dateTo=20210506&resultCount=10&dataType=json
    // 민원분석 분류체계 정보
    //http://apis.data.go.kr/1140100/minAnalsInfoView3/minClfcInfo3?serviceKey=인증키(URL Encode)&searchCatName=경찰&dataType=json
    // 맞춤형 통계 정보
    //http://apis.data.go.kr/1140100/minAnalsInfoView3/minStaticsInfo3?serviceKey=인증키(URL Encode)&target=pttn,dfpt,saeol&dateFrom=20210501&dateTo=20210506&period=DAILY&sortBy=NAME&sortOrder=false&dataType=json
    // 키워드 트렌드 정보
    //http://apis.data.go.kr/1140100/minAnalsInfoView3/minTimeSeriseView3?serviceKey=인증키(URL Encode)&target=pttn,dfpt,saeol&dateFrom=2019111100&dateTo=2019111723&period=DAILY&sortBy=NAME&sortOrder=false&dataType=json
    // 유사사례 정보
    //http://apis.data.go.kr/1140100/minAnalsInfoView3/minSimilarInfo3?serviceKey=인증키(URL Encode)&target=qna,qna_origin&searchword=질의문(URL Encode)&retCount=20&minScore=2&startPos=1&dataType=json
    // 연관어 분석 정보
    //http://apis.data.go.kr/1140100/minAnalsInfoView3/minWdcloudInfo3?serviceKey=인증키(URL Encode)&target=pttn,dfpt,saeol&classification=&searchword=비타민&dateFrom=20190101&dateTo=20191231&resultCount=50&dataType=json
    // 오늘의 민원 이슈
    //http://apis.data.go.kr/1140100/minAnalsInfoView3/minTodayTopicInfo3?serviceKey=인증키(URL Encode)&searchDate=20210506&todayTopicTopN=8&target=pttn,dfpt,saeol&dataType=json
    // 민원발생 기관 순위
    //http://apis.data.go.kr/1140100/minAnalsInfoView3/minMofacetInfo3?serviceKey=인증키(URL Encode)&topN=10&sortBy=NAME&sortOrder=false&target=pttn,dfpt,saeol&dateFrom=20210501&dateTo=20210506&dataType=json
    // 민원발생 지역 순위
    //http://apis.data.go.kr/1140100/minAnalsInfoView3/minMrfacetInfo3?serviceKey=인증키(URL Encode)&topN=10&sortBy=NAME&sortOrder=false&dateFrom=20210501&dateTo=20210506&target=pttn,dfpt,saeol&dataType=json
    // 키워드 기반 민원 건수 정보
    //http://apis.data.go.kr/1140100/minAnalsInfoView3/minSearchDocCnt3?serviceKey=인증키(URL Encode)&dataType=JSON&dateFrom=20210501&dateTo=20210506&target=pttn,dfpt,saeol&minScore=70&searchword=코로나AND마스크(URL Encode)&omitDuplicate=false
    // 지역 인구수 대비 민원량
    //http://apis.data.go.kr/1140100/minAnalsInfoView3/minMrPopltnRtInfo3?serviceKey=인증키(URL Encode)& dataType=JSON&target=pttn,saeol,dfpt&dateFrom=20210501&dateTo=20210506&dateType=C&topN=10&period=DAILY&sortBy=NAME&sortOrder=falseㄹ
    // 최다 민원 키워드 정보
    //http://apis.data.go.kr/1140100/minAnalsInfoView3/minDFTopNKeyword3?serviceKey=인증키(URL-Encode)&dataType=JSON&target=pttn,dfpt,saeol&period=MONTHLY&analysisTime=20210301&rangeCount=1&maxResult=10&mainSubCode=1140100

    const fetchData = async () => {
        try {
            //http://apis.data.go.kr/1140100/minAnalsInfoView3/minDFTopNKeyword3?serviceKey=인증키(URL-Encode)&dataType=JSON&target=pttn,dfpt,saeol&period=MONTHLY&analysisTime=20210301&rangeCount=1&maxResult=10&mainSubCode=1140100
            const url = `${config.CORS_URL}/${config.SERVICE_URL}/${config.INFO_KEYWORD_TOP_COMPLAINT}?serviceKey=${config.SERVICE_KEY}&dataType=JSON&target=pttn,dfpt,saeol&period=MONTHLY&analysisTime=20210301&rangeCount=1&maxResult=10`;

            const res = await axios({
                method: "GET",
                url,
            });

            console.log(res.data);
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
