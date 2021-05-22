import "./assets/css/spacing.css";
import "./assets/css/button.css";
import "./assets/css/input.css";
import Header from "./components/header";
import Login from "./components/login";
import Register from "./components/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserProvider from "./components/user/userContext";
import PrivateRoute from "./components/util/privateRoute";
import App from "./components/app";
import StoreProvider from "./components/store/storeProvider";
import style from "./style.module.css";

function Root() {
  return (
    <Router>
      <UserProvider>
        <StoreProvider>
          <div className={style.app} id="app">
            <Header />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute to="/" component={App} />
            </Switch>
          </div>
        </StoreProvider>
      </UserProvider>
    </Router>
  );
}

export default Root;
