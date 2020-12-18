import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [lozinka, setLozinka] = useState("");
  const prijava = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, lozinka)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const registracija = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, lozinka)
      .then((auth) => {
        //uspješno napravljen novi korisnik
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));

    //ovdje ide firebase registracija
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Logo"
        />
      </Link>
      <div className="login__container">
        <h1>Prijavi se</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Lozinka</h5>
          <input
            type="password"
            value={lozinka}
            onChange={(e) => setLozinka(e.target.value)}
          />
          <button
            className="login__prijavaButton"
            type="submit"
            onClick={prijava}
          >
            Prijavi se
          </button>
        </form>
        <p>
          Prijavom se slažete sa Uvjetima i pravilima privatnosti i korištenja
          Lažnog Klona Amazon web stranice.
        </p>
        <button className="login__registracijaButton" onClick={registracija}>
          Registriraj novi Amazon račun
        </button>
      </div>
    </div>
  );
}

export default Login;
