import React, { useContext, useEffect, useState } from "react";
import './Login.scss';
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { AppContext } from "../Context/Context";

function Login() {
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const userData = {
    email: "soft-innovation@gmail.com",
    password: "soft123"
  }

  const {
    email,
    setEmail,
    password,
    setPassword,
    setLoginModalWindow,
    setLoginButton,
  } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    const savedLoginStatus = localStorage.getItem('loginStatus');
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setLoginButton(savedLoginStatus)
    }
    // eslint-disable-next-line
  }, []);

  const handleSubmit = () => {
    setEmailError("")
    setPasswordError("")

    // eslint-disable-next-line
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{1,5}$/.test(email)) {
      setEmailError(true)
    }

    if (email === "") {
      setEmailError(true)
    }

    if (password.length < 7) {
      setPasswordError(true)
    }

    if (password === "") {
      setPasswordError(true)
    }

    if (userData.email === email && userData.password === password) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('loginStatus', ("closed"))
      setLoginModalWindow("closed")
      navigate("/articles");
      setLoginButton("closed")
    } else {
      alert('Wrong username or password');
    }
  }

  return (
    <div className="login">

      <h1 className="login__title">Login</h1>

      <div className="login__input-container">
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          required={true}
          error={emailError}
          helperText={emailError ? "Please enter a valid email" : ''}
          onChange={event => setEmail(event.target.value)}
          value={email}
        />
        {/* <label className="login__error">{emailError}</label> */}

        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          error={passwordError}
          helperText={passwordError ? "The password must be min 7 characters" : ''}
          required={true}
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        {/* <label className="login__error">{passwordError}</label> */}
      </div>

      <div className="login__button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button variant="outlined" component={Link} to="/" >
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default Login;