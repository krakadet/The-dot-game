// @flow
import * as React from "react";
import "./leader-board.css";
type Props = {|
  +name: string,
  +date: string,
|};

function WinnerItem(props: Props) {
  const { date, name } = props;
  return (
    <div className="container">
      <p>{name}</p>
      <p>{date}</p>
    </div>
  );
}

export default WinnerItem;
