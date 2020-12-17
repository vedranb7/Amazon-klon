import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [lozinka, setLozinka] = useState("");
  const prijaviSe = (e) => {};
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
            onClick={prijaviSe}
          >
            Prijavi se
          </button>
        </form>
        <p>
          Prijavom se slažete sa Uvjetima i pravilima privatnosti i korištenja
          Lažnog Klona Amazon web stranice.
        </p>
        <button className="login__registracijaButton">
          Registriraj novi Amazon račun
        </button>
      </div>
    </div>
  );
}

export default Login;
