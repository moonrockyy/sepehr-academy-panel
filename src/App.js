import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { getItem } from "./core/services/storage/storage";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            {getItem("token") ? (
              <Route
                path="/"
                render={(props) => <DefaultLayout {...props} />}
              />
            ) : (
              <>
                <Route path="/login" render={() => <Login />} />
                <Route path="/register" render={() => <Register />} />
              </>
            )}
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;