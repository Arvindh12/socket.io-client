import React, { useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'

function Login({setState , setUser}) {
    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    
        fetch(
          `http://localhost:7070/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formState),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if(data.length === 0){
              // Password not matching 
              console.log("password not matching")
              setAlert(true)
              return
            }
            else {
              console.log("password matching")
              setState("room")
              setUser(data.data)
            }
          });
      };
    const handleOnChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        var tempFormState = JSON.parse(JSON.stringify(formState));
        tempFormState[name] = value;
        setFormState(tempFormState);
      };
    
      const [formState, setFormState] = useState({ email: "", password: "" });
      const [alert, setAlert] = useState(false)
    return (
        <Row>
        <Col>
        </Col>
        <Col>
        <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formState.email}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formState.password}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group>
         <p> Not a user? <a onClick={() => setState('register')}>Sign Up</a> </p>
          </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </Col>
        <Col>
        </Col>
        </Row>
        
    )
}

export default Login
