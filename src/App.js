import React, { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Room from './Components/Room';
import { Container } from 'react-bootstrap';

function App() {
  const [ user, setUser ] = useState('')
  const [ state , setState ] = useState("login")
  return (
<Container>
  {
{"login" :  <Login setState={setState} setUser={setUser} /> ,
 "register" : <Register setState={setState} setUser={setUser} />,
 "room" : <Room user={user}/>
}[state] }

</Container>
  );
}

export default App;
