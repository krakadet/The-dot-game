// @flow
import * as React from "react";
import { Provider } from "react-redux";
import store from "./rootReducer";
import Board from "./components/leader-board/board";
// type Props = {};

function App() {
  return (
    <Provider store={store}>
      <div>
          <Board/>
      </div>
    </Provider>
  );
}

export default App;
