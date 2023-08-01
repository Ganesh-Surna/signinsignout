import React from "react";
import "./WelcomePage.css";

const WelcomePage = ({ userData,onSignout,onRemoveAccount }) => {
  const handleSignout=()=>{
    onSignout();
  };
  const handleRemoveAccount=()=>{
    onRemoveAccount();
  }
  return (
    <div className="welcome-page">
      <h1>Hello {userData.username}!</h1>
      <p>Your password is "{userData.password}"</p>
      <div className="buttons-group">
        <button className="signout-btn" onClick={handleSignout}>Sign Out</button>
        <button className="remove-btn" onClick={handleRemoveAccount}>Remove Account</button>
      </div>
    </div>
  );
};
export default WelcomePage;
