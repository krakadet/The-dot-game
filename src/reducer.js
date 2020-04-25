// @flow
import { COUNT_GAME, GAME_SETTINGS, WINNERS } from "./actions";

const initialState = {
  gameSettings: {},
  winners: [],
  countGame: 0
};

function reducer(
  state = initialState,
  action: { type: string, payload?: any }
) {
  switch (action.type) {
    case GAME_SETTINGS:
      return {
        ...state,
        gameSettings: { ...state.gameSettings, ...action.payload.settings },
      };
    case WINNERS:
      return {
        ...state,
        winners: action.payload.winners,
      };

    case COUNT_GAME:
      return {
        ...state,
        countGame: action.payload.count,
      };
    default:
      return state;
  }
}

export default reducer;
