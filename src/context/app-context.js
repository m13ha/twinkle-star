import React, { useReducer, useContext } from 'react';
import reducer from './reducer';
import {
  HELLO_WORLD,
  INTRO_NEXT,
  INTRO_PREV,
  INTRO_SKIP,
  START_APP,
  OPEN_STAR_INFO,
  CLOSE_MODAL,
} from './actions';
import introText from '../intro.json';
import starText from '../star-info.json';

export const initialState = {
  isIntroduction: true,
  introText,
  introPresentText: introText.en[0],
  introPresentIndex: 0,
  gameItemsFound: [
    { itemName: 'Cepheid variables', itemCount: 2 },
    { itemName: 'Classical Nova', itemCount: 1 },
    { itemName: 'Dwarf Nova', itemCount: 3 },
    { itemName: 'Eclipsing binary variables', itemCount: 5 },
    { itemName: 'Planetary transiting variables', itemCount: 4 },
  ],
  starText,
  isModalOpened: false,
  activeStarInfo: {},
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNextIntro = () => {
    const index = state.introPresentIndex;
    if (index === state.introText.en.length - 1) {
      return;
      // dispatch({type: START_APP});
      // return;
    }
    dispatch({ type: INTRO_NEXT, payload: { index: index + 1 } });
  };

  const handlePrevIntro = () => {
    const index = state.introPresentIndex;
    if (index === 0) {
      return;
    }
    dispatch({ type: INTRO_PREV, payload: { index: index - 1 } });
  };

  const skipIntro = () => {
    dispatch({ type: START_APP });
  };

  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };

  const openStarInfoRandom = (num) => {
    dispatch({
      type: OPEN_STAR_INFO,
      payload: { index: num },
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleNextIntro,
        handlePrevIntro,
        skipIntro,
        closeModal,
        openStarInfoRandom,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export { AppProvider };
