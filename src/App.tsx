import React from "react";
import "./App.css";

import Home from "./components/routes/Home";
import { Route, Switch } from "react-router-dom";
import StartPage from "./components/routes/StartPage";

function App() {
  const renderHome = (props: any) => <Home {...props} />;

  return (
    <Switch>
      <Route exact={true} path="/" component={StartPage} />
      <Route path="/home" render={renderHome} />
    </Switch>
  );
}

export default App;
