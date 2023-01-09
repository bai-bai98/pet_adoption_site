import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3 fLable"
      >
        <Form.Control
          type="email"
          placeholder="name@example.com"
          onChange={(event) => setEmail(event.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        label="Password"
        className="mb-3 fLable"
      >
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </FloatingLabel>
      <button className="btn" disabled={!email || !password}>
        Log In
      </button>
    </div>
  );
};

export default Login;
