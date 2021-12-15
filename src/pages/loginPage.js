import { TextField, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../authentication/authContext";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    textField: {
        width: "20ch",
    },
}))

const LoginPage = (props) => {
  const context = useContext(AuthContext);
  const classes = useStyles();
  let username = "";
  let password = "";

  const login = () => {
    console.log("Loggin in");
    context.authenticate(username, password);
  };

  const changeUsername = (value) => {
    username = value;
  }

  const changePassword = (value) => {
    password = value;
  }

  // Set 'from' to the path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } };

  return context.isAuthenticated ? (
    <Redirect to={from} />
  ) : (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the protected pages </p>
      <TextField
          className={classes.textField}
          variant="outlined"
          margin="normal"
          required
          id="username"
          label="Username"
          name="username"
          size="small"
          autoFocus
          onChange={(e) => changeUsername(e.target.value)}
        />
        <TextField
          className={classes.textField}
          variant="outlined"
          margin="normal"
          required
          id="password"
          label="Password"
          name="password"
          size="small"
          autoFocus
          onChange={(e) => changePassword(e.target.value)}
        />
        <br/>
      {/* Login web form  */}
      <button onClick={login}>Submit</button>
    </>
  );
};

export default LoginPage;
