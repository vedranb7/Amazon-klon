import "./App.css";
import Header from "./komponente/Header";
import Naslovnica from "./komponente/Naslovnica";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blagajna from "./komponente/Blagajna";
import Login from "./komponente/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/blagajna">
            <Header />
            <Blagajna />
          </Route>
          <Route path="/">
            <Header />
            <Naslovnica />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
