// @flow
import { GAME_SETTINGS, WINNERS } from "./actions";
const initialState = {
  gameSettings: {},
  winners: [],
};

function reducer(
  state = initialState,
  action: { type: string, payload?: any }
) {
  switch (action.type) {
    case GAME_SETTINGS:
      return state.gameSettings[action.payload.gameSettings];
    case WINNERS:
      return {
        ...state,
        winners: action.payload.winners
      };
    default:
      return state;
  }
}

export default reducer;
