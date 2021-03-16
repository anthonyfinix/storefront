import "./root.css";
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

function Root() {
  return (
    <Router>
      <UserProvider>
        <div id="app">
          <div id="app-header-wrapper">
            <Header />
          </div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute to="/" component={App}></PrivateRoute>
          </Switch>
        </div>
      </UserProvider>
    </Router>
  );
}

export default Root;
