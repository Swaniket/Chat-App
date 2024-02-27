import { z } from "zod";

export const schema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, {
        message: "Name is required",
      })
      .min(3, {
        message: "Name must be 3 characters",
      })
      .max(255, { message: "Name must not be more than 255 chars long" }),

    email: z
      .string()
      .trim()
      .min(1, {
        message: "Email is required",
      })
      .min(3, {
        message: "Email must be at least 3 chars",
      })
      .max(255, { message: "Email must not be more than 255 chars long" })
      .email("This must be a valid email"),

    password: z
      .string()
      .trim()
      .min(1, {
        message: "Password is required",
      })
      .min(6, {
        message: "Password must be at least 6 chars",
      })
      .max(32, { message: "Password must not be more than 32 chars long" }),

    confirmPassword: z.string().trim().min(1, {
      message: "Confirm Password is required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
