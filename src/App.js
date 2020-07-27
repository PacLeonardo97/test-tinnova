import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import { List, Register } from './pages';

const App = () => (
  <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Register}/>
    <Route path="/Listagem" component={List} />

    </Switch>
  </BrowserRouter>
);

export default App;
