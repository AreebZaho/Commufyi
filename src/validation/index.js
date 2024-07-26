import * as z from "zod";

// ============================================================
// USER SCHEMAS
// ============================================================

export const SignupFormSchema = z.object({
	email: z.string().email(),
	username: z
		.string()
		.min(3, {
			message: "Username must be at least 3 characters",
		})
		.regex(/^[a-zA-Z0-9_]*$/, {
			message: "Username must contain only letters, numbers, and underscores",
		})
		.max(30, {
			message: "Username must be less than 30 characters",
		}),
	password: z
		.string()
		.min(8, {
			message: "Password must be at least 8 characters",
		})
		.max(100, { message: "Password must be less than 100 characters" }),
});

export const OTPSchema = z.object({
	pin: z.string().min(6, {
		message: "Your one-time password must be 6 characters",
	}),
});

