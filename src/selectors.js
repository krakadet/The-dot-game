// @flow
import { createSelector } from "reselect";
import { camelCaseToWord } from "./utils";

export const selectWinners = (state) => state.winners;
export const selectCount = (state) => state.countGame;
export const selectGameSettings = (state) => state.gameSettings;

export const selectSettingsForSelect = createSelector(
  [selectGameSettings],
  (data) => {
    const objKeys = Object.keys(data);
    return objKeys.map((key) => {
      return {
        value: key,
        label: camelCaseToWord(key),
      };
    });
  }
);
