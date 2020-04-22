// @flow
import * as React from "react";
import { Provider } from "react-redux";
import store from "./rootReducer";
// type Props = {};

function App() {
  return (
    <Provider store={store}>
      <div>dklfvl</div>
    </Provider>
  );
}

export default App;
