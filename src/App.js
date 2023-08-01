import React,{useState} from "react";
import "./App.css";

import SigninPage from "./SigninPage";
import WelcomePage from "./WelcomePage";

export default function App() {
  
  const [isSignin, setIsSignin] = useState(false);
  const [userData, setUserData] = useState({});
  const userObjArrStored=JSON.parse(localStorage.getItem("userObjArrStoredKey"));
  
  const handleSignin = (userData) => {
    setIsSignin(true);
    setUserData(userData);
  };
  const handleSignout = () => {
    setIsSignin(false);
  };
  const handleRemoveAccount=()=>{
    let index=userObjArrStored.findIndex((eachUser)=>{
      if(eachUser.username===userData.username && eachUser.password===userData.password){
        return true;
      }
    });
    userObjArrStored.splice(index,1);
    localStorage.setItem("userObjArrStoredKey",JSON.stringify(userObjArrStored));
    setIsSignin(false);
  }

  return (
    <div className="bg-container">
      {isSignin ? (
        <div>
          <WelcomePage userData={userData} onRemoveAccount={handleRemoveAccount} onSignout={handleSignout} />
          
        </div>
      ) : (
        <div className="login-container">
          <h1>Home Page</h1>
          <SigninPage onSignin={handleSignin} />
        </div>
      )}
    </div>
  );
}
