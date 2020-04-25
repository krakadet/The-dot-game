// @flow
import React, { useEffect } from "react";
import WinnerItem from "./winnerItem";
import "./leader-board.css";
import { useDispatch, useSelector } from "react-redux";
import { selectWinners } from "../../selectors";
import { getWinners } from "../../actions";

function LeaderBoard() {
  const dispatch = useDispatch();
  const winnerList = useSelector(selectWinners);
  useEffect(() => {
    dispatch(getWinners());
  }, []);

  return (
    <div className="wrap-board">
      <h1>
        <b>Leader Board</b>
      </h1>
      <div className="list-container">
        {winnerList.reverse().map((item) => (
          <div key={item.id} className="indent-bottom">
            <WinnerItem name={item.winner} date={item.date} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaderBoard;
