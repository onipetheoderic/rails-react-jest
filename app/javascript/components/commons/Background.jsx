import React, {useContext} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { StoreContext } from '../../store';
import { Colors } from "./Index";


const Background = ({children}) => {
  
  const {state} = useContext(StoreContext);

  return (
    <Wrapper darkTheme={state.darkTheme}>
      {children}  
    </Wrapper>
  );
};


const Wrapper = styled.div`
  background: ${props => props.darkTheme ? "black" : "white"};
  color: ${props=> props.darkTheme ? "white" : "black"};
`;
export default Background;
