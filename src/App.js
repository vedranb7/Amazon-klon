import "./App.css";
import Header from "./komponente/Header";
import Naslovnica from "./komponente/Naslovnica";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blagajna from "./komponente/Blagajna";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Header je izvan switcha kako bi se uvijek renderalo neovisno o stranici */}
        <Header />
        <Switch>
          <Route path="/blagajna">
            <Blagajna />
          </Route>
          <Route path="/">
            <Naslovnica />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
