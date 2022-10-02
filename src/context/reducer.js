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
    return {
      ...state,
      introPresentIndex: index,
      introPresentText: state.introText.en[index],
    };
  }
  if (action.type === START_APP) {
    return {
      ...state,
      isIntroduction: false,
    };
  }
  if (action.type === OPEN_STAR_INFO) {
    const index = action.payload.index;
    const activeStarInfo = state.starText.en[index];
    return {
      ...state,
      activeStarInfo,
      isModalOpened: true,
    };
  }
  if (action.type === CLOSE_MODAL) {
    return {
      ...state,
      isModalOpened: false,
    };
  }
  return state;
};

export default reducer;
