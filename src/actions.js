// @flow
export const GAME_SETTINGS = "GAME_SETTINGS";
export const WINNERS = "WINNERS";
export const COUNT_GAME = "COUNT_GAME";

const urls = {
  settings: "https://starnavi-frontend-test-task.herokuapp.com/game-settings",
  winners: "https://starnavi-frontend-test-task.herokuapp.com/winners",
};

export function getSettings() {
  return async (dispatch) => {
    try {
      const response = await fetch(urls.settings);
      if (response.ok) {
        const data = await response.json();
        return dispatch({
          type: GAME_SETTINGS,
          payload: { settings: data },
        });
      }
    } catch (e) {
      throw e;
    }
  };
}

export function getWinners() {
  return async (dispatch) => {
    try {
      const response = await fetch(urls.winners);
      if (response.ok) {
        const data = await response.json();
        return dispatch({
          type: WINNERS,
          payload: { winners: data },
        });
      }
    } catch (e) {
      throw e;
    }
  };
}

export function sendWinner(data: { winner: string, date: string }) {
  return async (dispatch) => {
    const response = await fetch(urls.winners, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (response.ok) {
      dispatch(getWinners());
    }
  };
}

export function setCountGame(count: number) {
  return {
    type: COUNT_GAME,
    payload: { count },
  };
}
