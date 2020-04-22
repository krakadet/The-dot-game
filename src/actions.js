export const GAME_SETTINGS = "GAME_SETTINGS";
export const WINNERS = "WINNERS";
const urls = {
  settings: "https://starnavi-frontend-test-task.herokuapp.com/game-settings",
  winners: "https://starnavi-frontend-test-task.herokuapp.com/winners",
};

export function getSettings() {
  return async (dispatch) => {
    try {
      const response = fetch(urls.settings);
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
        console.log('data=>', data);
        
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
