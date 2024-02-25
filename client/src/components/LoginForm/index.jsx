import { Card, Form, FloatingLabel, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./index.css";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("This must be a valid email"),
  password: z.string().min(1, { message: "Password is required" }),
});

function LoginForm() {
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
          <Form.Group className="mb-3" controlId="password">
            <FloatingLabel
              controlId="floatingInput"
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

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
