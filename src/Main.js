import styled from "styled-components";
import Cards from "./components/Cards";

const Main = () => {
    return (
        <MainContainer>
            <div className="main">
                <div className="search">
                    <div className="inputTitle">InputTitle</div>
                    <input className="searchInput" />
                    <button className="searchButton">Search</button>
                </div>
                <Cards />
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

    .card {
        border: 1px solid red;
        width: 15rem;
        height: 20rem;
        border-radius: 6px;
        background-color: white;
    }
`;

export default Main;
