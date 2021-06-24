import React from "react";
import Login from "./Login";
import useStorage from '../hooks/useStorage'
import Dashboard from './Dashboard'


function App() {
  const [id, setId] = useStorage('id');
  return ( 
    id ? <Dashboard id={id} /> : <Login SubId={setId} /> 
  )
}

export default App;
