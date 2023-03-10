import data from "../data"
import React,{useReducer, createContext} from 'react';
import reducer from './reducer.js';

const initializer = {
   playlist: [...data.movies]
}


export const GlobalContext = createContext(initializer);

export const GlobalContextProvider = ({children}) => {
   return <GlobalContext.Provider value = {useReducer(reducer,initializer)}>
      {children}
   </GlobalContext.Provider>
}