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
import introText from '../intro-all-languages.json';
import starText from '../stars-all-languages-link.json';

export const initialState = {
  isIntroduction: true,
  introText,
  introPresentText: introText.English[0],
  introPresentIndex: 0,
  gameItemsFound: [
    { itemName: 'Dwarf Nova', itemCount: 0 },
    { itemName: 'Eclipsing binary variables', itemCount: 0 },
    { itemName: 'Cepheid variables', itemCount: 0 },
    { itemName: 'Classical Nova', itemCount: 0 },
    { itemName: 'Planetary transiting variables', itemCount: 0 },
  ],
  starText,
  typeIndex: 0,
  isModalOpened: false,
  activeStarInfo: {},
  presentLanguage: 'English',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNextIntro = () => {
    const index = state.introPresentIndex;
    const presentLanguage = state.presentLanguage;
    if (index === state.introText[presentLanguage].length - 1) {
      dispatch({ type: START_APP });
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

  const changePresentLanguage = (event) => {
    dispatch({
      type: 'CHANGE-LANGUAGE',
      payload: { language: event.target.value },
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
        changePresentLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export { AppProvider };
