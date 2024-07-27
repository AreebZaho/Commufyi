import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupFormSchema } from "@/validation";
import { useDebounce } from "@/hooks";
import { debounceDelay as delay } from "@/constants";
import { useUsernameExists, useEmailExists } from "@/react-query/queries";

export default function SignupForm() {
	const form = useForm({
		resolver: zodResolver(SignupFormSchema),
		defaultValues: {
			email: "",
			username: "",
			password: "",
		},
	});

	const username = form.watch("username", "");
	const debouncedUsername = useDebounce(username, delay);
	const { isError: isErrorUsername, data: usernameExists, error: errorUsername, isFetching: isFetchingUsername } = useUsernameExists(debouncedUsername);
	const email = form.watch("email", "");
	const debouncedEmail = useDebounce(email, delay);
	const { isError: isErrorEmail, data: emailExists, error: errorEmail, isFetching: isFetchingEmail } = useEmailExists(debouncedEmail);

	const handleSignup = (values) => {
		console.log(values);
	};

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(handleSignup)} className="space-y-10">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="name@example.com" {...field} />
								</FormControl>
								<FormMessage>{usernameExists && "Username unavailable :(" || null}</FormMessage>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input placeholder="TinyDragon42" {...field} />
								</FormControl>
								<FormMessage>{emailExists && "Email unavailable :(" || null}</FormMessage>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input placeholder="" type="password" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" disabled>
						Continue
					</Button>
				</form>
			</Form>
		</>
	);
}
