import './BaseUI.css';
import './App.css';
import Login from './component/login'; 
import { useState } from 'react';
import React from 'react';
import Home from './component/Home';

// full name
// email
// username
// password
// mobile
// city
// country
// pincode

function App() {
  const [state,setState]=useState({sessionId:-1,Credentials:[]})
  const SignUpHandler=(obj)=>{
    state.Credentials.push(obj)
    // this.setState({Credentials:this.state.Credentials})
    // console.log("p",state.Credentials)
  }
  const LogOutHandler=()=>{
    setState({sessionId:-1})
  }
  const HandleSession=(ide)=>{
    
       
       if(ide!==-1)
       {
       setState({...state,sessionId:ide})
       }
      }
      console.log("p",state.Credentials)
      if(state.sessionId===-1)
      {
        
  return (
    <div className="App">
    <Login Credentials={state.Credentials}   auth={HandleSession} SignupHandler={SignUpHandler}/>
    </div>
  );  
      } else{
        return (
          <div className="App">
    <Home sessionId={state.sessionId} LogOutHandler={LogOutHandler} userData={state.Credentials[state.sessionId]}/>
            </div>
        )
}
}

export default App;
