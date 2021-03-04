import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import Login from "./components/login";
import Register from "./components/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserProvider from "./components/user/userContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <div id="app">
          <div id="app-header-wrapper">
            <Header />
          </div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/"
              render={() => {
                return (
                  <div id="app-main-wrapper">
                    <div id="app-sidebar-wrapper">
                      <Sidebar />
                    </div>
                    <div id="app-content-wrapper">
                      <Content />
                    </div>
                  </div>
                );
              }}
            />
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
