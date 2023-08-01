import React, { useState } from "react";
import "./SigninPage.css";

const SigninPage = ({ onSignin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const userObjArrStored = JSON.parse(
    localStorage.getItem("userObjArrStoredKey")
  );
  console.log(userObjArrStored);

  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSigninLogin = (event) => {
    event.preventDefault();
    const userData = { username: username, password: password };
    let exist = false;

    if (userObjArrStored === null) {
      exist = false;
    } else {
      for (let eachUser of userObjArrStored) {
        if (
          eachUser.username === userData.username &&
          eachUser.password === userData.password
        ) {
          onSignin(userData);
          exist = true;
          break;
        }
      }
    }
    if (exist === false) {
      setUsername("");
      setPassword("");
      setError("Enter correct Username and Password!");
    }
  };

  const handleSignupLogin = (event) => {
    event.preventDefault();
    const userData = { username: username, password: password };
    if(userData.username.trim()==="" || userData.password.trim()===""){
      setError("Enter valid Username and password!");
    }
    else{
      
    if (userObjArrStored === null) {
      localStorage.setItem("userObjArrStoredKey", JSON.stringify([userData]));
    } else {
      let exist = false;
      for (let eachUser of userObjArrStored) {
        if (
          eachUser.username === userData.username &&
          eachUser.password === userData.password
        ) {
          exist = true;
          break;
        }
      }
      if (exist) {
        setError("You already have an account. You can sign in.");
      } else {
        userObjArrStored.push(userData);
        localStorage.setItem(
          "userObjArrStoredKey",
          JSON.stringify(userObjArrStored)
        );
        setError(
          "Your account has been successfully created. You can now sign in."
        );
      }
    }
    }
    setUsername("");
    setPassword("");
  };
  return (
    <div>
      <form className="login-form">
        <div className="form-group">
          <label>User Name:</label>
          <input
            placeholder="Enter username"
            type="text"
            value={username}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>password:</label>
          <input
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="buttons-container">
          <button type="submit" className="signin-btn" onClick={handleSigninLogin}>
            Sign In
          </button>
          <button type="submit" className="signup-btn" onClick={handleSignupLogin}>
            Sign Up
          </button>
        </div>
      </form>
      {error && <p className="message">{error}</p>}
    </div>
  );
};
export default SigninPage;
