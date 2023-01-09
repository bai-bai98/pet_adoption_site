import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "@restart/ui/esm/Button";
import { useState } from "react";

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(firstName, lastName, email, password, confirmPassword);
  };
  return (
    <form>
      <FloatingLabel controlId="floatingPassword" label="First Name">
        <Form.Control
          type="text"
          placeholder="First Name"
          className="mb-3 "
          onChange={(event) => setFirstName(event.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Last Name">
        <Form.Control
          type="text"
          placeholder="Last Name"
          className="mb-3"
          onChange={(event) => setLastName(event.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          type="email"
          placeholder="name@example.com"
          onChange={(event) => setEmail(event.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control
          type="password"
          placeholder="Password"
          className="mb-3 fLable"
          onChange={(event) => setPassword(event.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Confirm Password">
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          required
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </FloatingLabel>
      <button
        className="btn"
        onClick={handleSubmit}
        type="submit"
        disabled={
          !firstName || !lastName || !email || password != confirmPassword
        }
      >
        Sign Up
      </button>
      {password != confirmPassword && <div>passwords do not match</div>}
    </form>
  );
};

export default Signup;
