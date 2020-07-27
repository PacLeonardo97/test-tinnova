import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { List, Register } from "./pages";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./ducks";
import GlobalStyle from "./style";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={() => <p>loading</p>} persistor={persistor}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Register} />
          <Route path="/Listagem" component={List} />
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
