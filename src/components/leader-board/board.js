// @flow
import React, { useEffect } from "react";
import WinnerItem from "./winnerItem";
import "./leader-board.css";
import { useDispatch, useSelector } from "react-redux";
import { selectWinners } from "../../selectors";
import { getWinners } from "../../actions";

type Props = {};

function Board() {
  const dispatch = useDispatch();
  const winnerList = useSelector(selectWinners);
  useEffect(() => {
    dispatch(getWinners());
  }, []);

  return (
    <div>
      <h3>Leader Board</h3>
      {winnerList.map((item) => (
        <div key={item.id} className="pb-3">
          <WinnerItem name={item.winner} date={item.date} />
        </div>
      ))}
    </div>
  );
}

export default Board;
