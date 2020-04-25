// @flow
import React, { useRef } from "react";
import Select from "react-select";

import { useSelector } from "react-redux";
import { selectCount } from "../../selectors";

import "./settings-block.css";

type Props = {|
  +onButtonClick: () => void,
  +selectOption: Array<{
    value: string,
    label: string,
  }>,
  +selectSetting: ({ value: string, label: string }) => {},
  className?: string,
  +playGame: boolean,
  +onInputChange: (event) => void,
  +userName: string,
|};

function SettingsBlock(props: Props) {
  const inputEl = useRef(null);
  const countGame = useSelector(selectCount);

  const {
    className = "",
    selectSetting,
    playGame,
    onButtonClick,
    selectOption,
    onInputChange,
    userName,
  } = props;

  const handleButtonClick = () => {
    if (userName === "") {
      inputEl.current.focus();
    } else {
      onButtonClick();
    }
  };

  return (
    <div className={`container ${className}`}>
      <Select
        options={selectOption}
        className="flex-1"
        onChange={(val) => {
          selectSetting(val);
        }}
        autoFocus
      />
      <label className="wrap-input flex-1" ref={inputEl}>
        <input
          className="input"
          ref={inputEl}
          onChange={onInputChange}
          type="text"
          placeholder="Enter you name"
        />
      </label>

      <button onClick={handleButtonClick} className="flex-1 button">
        {playGame && countGame ? "PlAY AGAIN" : "PLAY"}
      </button>
    </div>
  );
}

export default SettingsBlock;
