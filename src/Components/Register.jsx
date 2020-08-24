import React, { useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'

function Register({setState}) {

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    
        fetch(
          `http://localhost:7070/register`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formState),
          }
        )
          .then((res) => res.json())
          .then((data) => {
              if(data.message === "registration successful"){
                setState("room")
              }
              else {

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

    const [formState, setFormState] = useState({name : "" , email: "", password: "" });

    return (
        <Row>
        <Col>
        </Col>
        <Col>
        <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
            name="name"
            value={formState.name}
            onChange={handleOnChange}
            required
          />
          </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formState.email}
            onChange={handleOnChange}
            required
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
            required
          />
        </Form.Group>

        <Form.Group>
         <p> Already a user? <a onClick={() => setState('login') } >Sign In </a> </p>
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

export default Register
