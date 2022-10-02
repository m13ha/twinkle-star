import {
  HELLO_WORLD,
  INTRO_NEXT,
  INTRO_PREV,
  INTRO_SKIP,
  START_APP,
  OPEN_STAR_INFO,
  CLOSE_MODAL,
} from './actions';

const reducer = (state, action) => {
  if (action.type === HELLO_WORLD) {
    return {
      ...state,
      notified: !state.notified,
    };
  }
  if (action.type === INTRO_NEXT || action.type === INTRO_PREV) {
    const index = action.payload.index;
    const presentLanguage = state.presentLanguage;
    return {
      ...state,
      introPresentIndex: index,
      introPresentText: state.introText[presentLanguage][index],
    };
  }
  if (action.type === START_APP) {
    return {
      ...state,
      isIntroduction: false,
    };
  }
 if (action.type === OPEN_STAR_INFO) {
   const points = [500, 100, 50, 1000, 10];
   const index = action.payload.index;
   const language = state.presentLanguage;
   const activeStarInfo = state.starText[language][index];
   const gameItemsFound = state.gameItemsFound;
   let formerCount = gameItemsFound[index].itemCount;
   formerCount += points[index];
   gameItemsFound[index].itemCount = formerCount;
   return {
     ...state,
     typeIndex: index,
     activeStarInfo,
     isModalOpened: true,
     gameItemsFound,
   };
 }
  if (action.type === CLOSE_MODAL) {
    return {
      ...state,
      isModalOpened: false,
    };
  }
  if (action.type === 'CHANGE-LANGUAGE') {
    const presentLanguage = action.payload.language;
    const introPresentIndex = state.introPresentIndex;
    const introPresentText =
      state.introText[presentLanguage][introPresentIndex];

    return {
      ...state,
      introPresentText,
      presentLanguage: action.payload.language,
    };
  }
  return state;
};

export default reducer;
