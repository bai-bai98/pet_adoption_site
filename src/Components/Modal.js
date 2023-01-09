import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

export function LoginModal() {
  const [show, setShow] = useState(false);
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(true);

  const handleClose = () => setShow(false);
  const handleSubmit = () => setShow(false);
  const handleShow = () => setShow(true);
  const switchSignInUp = () => {
    if (signup === false) {
      setSignup(true);
      setLogin(false);
    } else if (signup === true) {
      setSignup(false);
      setLogin(true);
    }
  };

  return (
    <div>
      <form>
        <Button
          variant="link"
          onClick={handleShow}
          className="shadow-none Modalbtn"
        >
          Login
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {signup && <h1>Sign Up</h1>}
              {login && <h1>Log In</h1>}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {signup && <Signup />}
            {login && <Login />}
          </Modal.Body>
          <Modal.Footer>
            <button onClick={switchSignInUp} className="btn">
              {signup && <div>Log in instead?</div>}
              {login && <div>Sign up instead?</div>}
            </button>
          </Modal.Footer>
        </Modal>
      </form>
    </div>
  );
}
