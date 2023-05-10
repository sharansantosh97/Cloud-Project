import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    try {
      const response = await axios.post("http://localhost:4000/signup", {
        name,
        email,
        password,
      });
      const data = response.data;

      if (data.status === 200) {
        sessionStorage.setItem("userId", data.userId);
        sessionStorage.setItem("userName", data.name);
        console.log(data.name);
        navigate("/home");
      } else {
        setMessage(response.data.message);
        setError(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const displayError = (flag) => {
    if (flag) {
      return (
        <Container style={{ marginTop: "5%" }}>
          <Alert key="danger" variant="danger">
            {message}
          </Alert>
        </Container>
      );
    }
  };

  return (
    <Container style={{ marginTop: "10em" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>

      {displayError(error)}
    </Container>
  );
};

export default Signup;
