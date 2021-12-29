import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const FacilityCategory = ({ icon, desc, option }) => {
  return (
    <>
      <Element>
        <FontAwesomeIcon className="element_ico" icon={icon} />
        {option ? (
          <div className="element_desc">
            {desc} ~ {option}
          </div>
        ) : (
          <div className="element_desc">{desc}</div>
        )}
      </Element>
    </>
  );
};

const Element = styled.div`
  border: 1px solid yellow;
  flex-grow: 1;
  height: 100%;
  padding: 1rem;

  .element_ico {
    width: 3rem;
    height: 3rem;
  }

  .element_desc {
    font-weight: 600;
    padding-top: 0.5rem;
  }
`;

export default FacilityCategory;
