import React from "react";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";

const Search = () => {
  return (
    <div className="Search">
      <FloatingLabel controlId="floatingSelect" label="Animal Type">
        <Form.Select aria-label="Floating label select example">
          <option>Dog</option>
          <option>Cat</option>
          <option>Fish</option>
          <option>Snake</option>
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Adoption Status">
        <Form.Select>
          <option>Adopt</option>
          <option>Foster</option>
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3 fLable"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
    </div>
  );
};

export default Search;
