import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Jumbotron } from "react-bootstrap";
import socketIOClient from "socket.io-client";

function Room({user}) {
  const [response, setResponse] = useState("");
  const handleEnable = () => {
    var socket = socketIOClient("http://localhost:7070");
    socket.emit("enable", "e");
  };
  const handleDisable = () => {
    var socket = socketIOClient("http://localhost:7070");
    socket.emit("disable", "d");
  };
  useEffect(() => {
    var socket = socketIOClient("http://localhost:7070");
    socket.on("connection", (data) => {
      setResponse(data);
      console.log(data);
    });
    socket.on("enable", (data) => {
      setResponse("enable");
      console.log(data);
    });
    socket.on("disable", (data) => {
      setResponse("disable");
      console.log(data);
    });

    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
    //
  }, []);

  return (
    <>
      <Row>
        <Col>
          <Jumbotron fluid>
            <Container>
              <h1>Welcome - {user.name}</h1>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col  className={"mt-2 text-center"} >
          <Button
            variant={"success"}
            disabled={response === "enable" ? true : false}
            onClick={handleEnable}
          >
            Enable
          </Button>
        </Col>
        <Col  className={"mt-2 text-center"} >
          <Button
            variant={"danger"}
            disabled={response === "disable" ? true : false}
            onClick={handleDisable}
          >
            Disable
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className={"mt-5 text-center"} ><h2>Status {response}</h2></Col>
      </Row>
</>
  );
}

export default Room;
