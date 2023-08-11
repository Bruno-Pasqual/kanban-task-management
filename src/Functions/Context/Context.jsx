/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react';

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

function reducer(state, action) {
  switch (action) {
    case 'inc':
      return { ...state, value: state.value + 1 };

    case 'dec':
      if (state.value > 0) return { ...state, value: state.value - 1 };
  }

  return state;
}

const Context = ({ children }) => {
  const initialState = {
    name: 'Bruno',
    value: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
