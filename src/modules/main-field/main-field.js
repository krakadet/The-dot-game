// @flow
import React, { useEffect, useState } from "react";
import SettingsBlock from "../../components/settings-block/settings-block";
import GameTable from "../../components/game-table/game-table";
import { useDispatch, useSelector } from "react-redux";
import { getSettings } from "../../actions";
import { selectGameSettings, selectSettingsForSelect } from "../../selectors";

import "./main-field.css";

function MainField() {
  const [currentSettings, setCurrentSettings] = useState();
  const dispatch = useDispatch();
  const [playGame, setPlayGame] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    dispatch(getSettings());
  }, []);

  const selectOption = useSelector(selectSettingsForSelect);
  const settings = useSelector(selectGameSettings);

  const handleClickPlay = () => {
    if (playGame) {
      setPlayGame(false);
      setTimeout(() => {
        setPlayGame(true);
      }, 100);
    }
    if (!playGame) {
      setPlayGame((prevState) => {
        if (prevState === false) {
          return true;
        }
      });
    }
  };

  return (
    <>
      <SettingsBlock
        onButtonClick={handleClickPlay}
        selectOption={selectOption}
        selectSetting={(val) => {
          const settingValue = settings[val.value];
          setCurrentSettings(settingValue);
          setPlayGame(false);
        }}
        className="set-intent"
        playGame={playGame}
        onInputChange={(event: SyntheticInputEvent) =>
          setUserName(event.target.value.trim())
        }
        userName={userName}
      />

      <GameTable
        setting={currentSettings}
        playGame={playGame}
        userName={userName}
      />
    </>
  );
}

export default MainField;
