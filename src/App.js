import "./App.css";
import MainHeader from "./components/main-header/MainHeader";
import indexRoutes from "./routes/Routes";
import { createBrowserHistory } from "history";
import { Route, Switch, Router } from "react-router-dom";
import { Suspense } from "react";

var history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <MainHeader history={history}></MainHeader>
        <Suspense fallback={<div>loading a new shopping experience...</div>}>
          <Switch>
            {indexRoutes.map((route, key) => {
              return (
                <Route
                  exact
                  path={route.path}
                  key={key}
                  component={route.component}
                ></Route>
              );
            })}
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
