import React from 'react';
import './App.sass';
import { MainArea } from './Components/MainArea/MainArea';
import FormАuthorization from './Components/FormАuthorization/FormАuthorization';

export function App() {
  return (
    <React.Fragment>
      {localStorage.getItem('name') ? <MainArea /> : <FormАuthorization/>} 

      
    </React.Fragment>
  );
}


