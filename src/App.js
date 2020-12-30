import "./App.css";
import Header from "./komponente/Header";
import Naslovnica from "./komponente/Naslovnica";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blagajna from "./komponente/Blagajna";
import Login from "./komponente/Login";
import { auth } from "./firebase";
import { useStateValue } from "./komponente/StateProvider";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Placanje from "./komponente/Placanje";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // pokrenuti će se samo jednom kad se komponenta loada
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>> ", authUser);
      if (authUser) {
        // korisnik se ulogirao / korisnik je bio ulogiran
        dispatch({
          type: "POSTAVI_KORISNIKA",
          korisnik: authUser,
        });
      } else {
        // korisnik je odlogiran
        dispatch({
          type: "POSTAVI_KORISNIKA",
          korisnik: null,
        });
      }
    });
  }, []);
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
          <Route path="/placanje">
            <Header />
            <Placanje />
          </Route>
          <Route path="/">
            <Header />
            <Naslovnica />
          </Route>
        </Switch>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
