import React, { createContext, useReducer } from "react";

const initialState = {
    darkTheme:false,
};

export const StoreContext = createContext(initialState);

export const StoreContextProvider = props => {

  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
        case 'setTheme':
            return {...state, darkTheme: !state.darkTheme}  
        default:
            throw new Error();
        };
  },initialState)
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};