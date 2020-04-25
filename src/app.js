// @flow
import * as React from "react";
import { Provider } from "react-redux";
import store from "./rootReducer";
import LeaderBoard from "./components/leader-board/leader-board";
import MainField from "./modules/main-field/main-field";

import './app.css'

function App() {
  return (
    <Provider store={store}>
      <div className="wrap">
          <div className="flex-1 divider">
             <MainField/>
          </div>
          <div className="flex-1">
              <LeaderBoard/>
          </div>
      </div>
    </Provider>
  );
}

export default App;
