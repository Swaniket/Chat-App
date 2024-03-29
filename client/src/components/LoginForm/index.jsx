/* eslint-disable react/no-unescaped-entities */
import { Card, Form, FloatingLabel, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import "./index.css";

function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <>
      <h1 className="header-style">Login</h1>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Email Field */}
          <Form.Group className="mb-3" controlId="email">
            <FloatingLabel
              controlId="email"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                {...register("email")}
                type="email"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            {errors.email && (
              <div className="form-error-text">*{errors.email.message}</div>
            )}
          </Form.Group>

          {/* Password Field */}
          <Form.Group className="mb-3" controlId="password">
            <FloatingLabel
              controlId="password"
              label="Password"
              className="mb-3"
            >
              <Form.Control
                {...register("password")}
                type="password"
                placeholder="Password"
              />
            </FloatingLabel>
            {errors.password && (
              <div className="form-error-text">*{errors.password.message}</div>
            )}
          </Form.Group>

          {/* Button Group */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="link"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </Button>
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "Login"}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </>
  );
}

export default LoginForm;
