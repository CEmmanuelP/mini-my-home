import styled from "styled-components";

const Main = () => {
    return (
        <MainContainer>
            <div className="main">
                <div className="search">
                    <div className="inputTitle">InputTitle</div>
                    <input className="searchInput" />
                    <button className="searchButton">Search</button>
                </div>
                <div className="cards">
                    <div className="card">card1</div>
                    <div className="card">card2</div>
                    <div className="card">card3</div>
                    <div className="card">card4</div>
                </div>
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
        }
    }

    .cards {
        border: 1px solid orange;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        padding-bottom: 3rem;
        padding-top: 3rem;
        justify-items: center;
    }

    .card {
        border: 1px solid red;
        width: 15rem;
        height: 20rem;
        border-radius: 6px;
    }
`;

export default Main;
