import './BaseUI.css';
import './App.css';
import Login from './component/login'; 
import { useState } from 'react';
import React from 'react';
import Home from './component/Home';

function App() {
  const [state,setState]=useState({sessionId:-1,Credentials:[]})
  const SignUpHandler=(obj)=>{
    console.log("obj",obj)
    console.log("p",state.Credentials)
    state.Credentials.push(obj)
    // setState(state.Credentials)
  
  }
  const LogOutHandler=()=>{
    setState({...state,sessionId:-1})
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
    <Home sessionId={state.sessionId} LogOutHandler={LogOutHandler} userData={state.Credentials[state.sessionId]} data={state.Credentials}/>
            </div>
        )
}
}

export default App;
