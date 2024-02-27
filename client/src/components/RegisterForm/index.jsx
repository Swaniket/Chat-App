import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Card, Form, FloatingLabel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { schema } from "./schema";

function RegisterForm() {
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
      <h1 className="header-style">Register</h1>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Name */}
          <Form.Group className="mb-3" controlId="Name">
            <FloatingLabel controlId="Name" label="Name" className="mb-3">
              <Form.Control
                {...register("name")}
                type="text"
                placeholder="Enter you name"
              />
            </FloatingLabel>
            {errors.name && (
              <div className="form-error-text">*{errors.name.message}</div>
            )}
          </Form.Group>

          {/* Email */}
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

          {/* Password */}
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

          {/* Confirm Password */}
          <Form.Group className="mb-3" controlId="confirmPassword">
            <FloatingLabel
              controlId="confirmPassword"
              label="Confirm Password"
              className="mb-3"
            >
              <Form.Control
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm Password"
              />
            </FloatingLabel>
            {errors.confirmPassword && (
              <div className="form-error-text">
                *{errors.confirmPassword.message}
              </div>
            )}
          </Form.Group>

          {/* Button Group */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="link"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
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

export default RegisterForm;
