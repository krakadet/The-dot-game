// @flow
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "../../selectors";
import { sendWinner, setCountGame } from "../../actions";
import { isInteger } from "../../utils";

import "./game-table.css";

type Props = {|
  +setting: { field: number, delay: number },
  +playGame: boolean,
  +userName: string,
|};

var t;

function GameTable(props: Props) {
  const { setting, playGame, userName } = props;
  const [userWonCount, setUserWonCount] = useState(0);
  const [gameOver, setGameOver] = useState("");

  const [rows, setRows] = useState([]);
  const [cells, setCells] = useState({});
  const dispatch = useDispatch();
  const countGame = useSelector(selectCount);

  useEffect(() => {
    let rows = [];
    let cellsObj = {};

    if (setting) {
      window.clearTimeout(t);
      const { field } = setting;
      for (let i = 0; i < field; i++) {
        let cells = [];
        for (let j = 0; j < field; j++) {
          cells.push(`${i}.${j}`);
          cellsObj[`${i}.${j}`] = "";
        }
        rows.push({ id: i, cells: cells });
      }
      setCells(cellsObj);
      setRows(rows);
      setUserWonCount(0);
      setGameOver("");
    }
  }, [setting, playGame]);

  let timer = function (shufleArr, i, delay) {
    t = window.setTimeout(() => {
      if (i + 1 < shufleArr.length) {
        timer(shufleArr, i + 1, delay);
      }
      const str = String([shufleArr[i]]);
      setCells((prevState) => {
        if (prevState[shufleArr[i - 1]] === "green") {
          return {
            ...prevState,
            ...{ [str]: "green", [shufleArr[i - 1]]: "red" },
          };
        } else {
          return { ...prevState, [str]: "green" };
        }
      });
    }, delay);
  };

  const endGame = (name) => {
    window.clearTimeout(t);
    setGameOver(`${name} won`);
    dispatch(setCountGame(countGame + 1));
    dispatch(
      sendWinner({
        winner: name,
        date: format(new Date(), "HH:mm; dd MMMM yyyy"),
      })
    );
  };
  useEffect(() => {
    const cellArr = Object.keys(cells);

    const cellsCountAll = isInteger(cellArr.length / 2)
      ? cellArr.length / 2 + 1
      : Math.floor(cellArr.length / 2);

    const cellAiWon = cellArr.filter((item) => cells[item] === "red").length;

    if (userWonCount > cellsCountAll && gameOver === "") {
      endGame(userName);
    }
    if (cellAiWon > cellsCountAll && gameOver === "") {
      endGame("Computer");
    }
  }, [Object.values(cells)]);

  useEffect(() => {
    if (playGame) {
      window.clearTimeout(t);
      const cellVal = Object.keys(cells);
      if (setting) {
        const { delay } = setting;
        const shufleArr = cellVal.sort(() => Math.random() - 0.5);
        timer(shufleArr, 0, delay);
      }
    }
  }, [playGame]);

  return (
    <>
      <div className="message">
        <h3>
          <b>{gameOver}</b>
        </h3>
      </div>
      <div className="divTable">
        <div className="divTableBody">
          {rows.map((row) => {
            return (
              <div key={row.id} className="divTableRow">
                {row.cells.map((cell) => {
                  return (
                    <div
                      onClick={() => {
                        if (cells[cell] === "green") {
                          setCells((prevState) => {
                            return {
                              ...prevState,
                              [cell]: "blue",
                            };
                          });
                          setUserWonCount(userWonCount + 1);
                        }
                      }}
                      key={cell}
                      className={
                        cells[cell] !== ""
                          ? `divTableCell ${cells[cell]} pointer`
                          : "divTableCell"
                      }
                    >
                      &nbsp;
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default GameTable;
