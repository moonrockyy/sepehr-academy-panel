import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import GetEmployeeDetail from "./core/services/api/GetEmployeeDetail.api";
import Register from "./components/Register/Register";
import { getItem } from "./core/services/storage/storage";
import "./scss/style.scss";
import { UserProvider } from "./core/context/UserContext/UserContext";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

const App = () => {
  const [user, setUser] = useState();
  useEffect(async () => {
    if (!getItem("token")) return null;
    const user = await GetEmployeeDetail();
    setUser(user.result);
  }, []);

  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <UserProvider value={{ user, setUser }}>
            {user ? (
              <Route
                path="/"
                render={(props) => <DefaultLayout {...props} />}
              />
            ) : (
              <>
                <Route path="/" exact component={user ? null : Login} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              </>
            )}
          </UserProvider>
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
