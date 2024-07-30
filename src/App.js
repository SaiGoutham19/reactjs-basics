import React, { Component } from 'react';
import './App.css';
import Greeting from './components/Greeting';
import SignupForm from './components/SignupForm';
function App(){
  const user={
    name:"sharath kumar",
    age:30,
  };
  return(
    <div>
      <Greeting name={user.name} age={user.age}/>
      <SignupForm/>
     </div>
  );
}
export default App;

