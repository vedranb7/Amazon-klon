import React, { createContext, useContext, useReducer } from "react";

//Priprema Data Layer
export const StateContext = createContext();

// Wrap aplikacije i korištenje Data Layera
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//povlačenje informacija iz Data Layera
export const useStateValue = () => useContext(StateContext);
