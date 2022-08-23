import React, {useContext} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { StoreContext } from '../../store';
import { Grids, Colors } from "./Index";


const Header = ({ title, addPage = false, addPageClick, page }) => {
  
  const {state, dispatch } = useContext(StoreContext);
  const changeTheme = () => {
    dispatch({type:"setTheme"})
  }

  return (
    <Wrapper>
      <SubWrapper>
        <div data-testid="title">{title}</div>
        {addPage && (
          <div className="right-section">
            <div className="plus-btn" data-testid="plus" onClick={addPageClick}>
              {page!=="home" ? "+" : "Home"}
            </div>
            <span onClick={()=>changeTheme()} className="theme">{state.darkTheme ? "light Theme" : "dark theme"}</span>
          </div>
         
        )}
        
      </SubWrapper>
    </Wrapper>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.string,
  addPage: PropTypes.bool,
  addPageClick: PropTypes.func
}

const SubWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .right-section {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Wrapper = styled.header`
  color: ${Colors.White};
  min-height: ${Grids.DefaultNavBarHeight}px;
  font-family: Poppins, sans-serif;
  background-color: ${Colors.ElectricIndigo};
  font-size: ${Grids.XXLargeSpace}px;
  padding: ${Grids.MediumGutter}px ${Grids.ExtraLargeMargin}px ${Grids.XSmallSpace}px ${Grids.ExtraLargeMargin}px;
  .plus-btn {
    color: ${Colors.White};
    cursor: pointer;
  }
  .theme {
    font-size: ${Grids.SmallSpace}px;
    margin-left: 5px;
    cursor: pointer;
  }
`;

export default Header;
