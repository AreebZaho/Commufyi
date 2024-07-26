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
import { useUsernameExits, useDebounce } from "@/hooks";
import { debounceDelay as delay } from "@/constants";

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
	const email = form.watch("email", "");
	const debouncedUsername = useDebounce(username.toLowerCase(), delay);
	const { exists, loading, error } = useUsernameExits(debouncedUsername);

	const handleSignup = (values) => {
		console.log(values);
	};

	return (
		<>
			{username !== "" && exists && <h1>Exists</h1>}
			{username !== "" && loading && <h1>Loading</h1>}
			{username !== "" && error && <h1>Error</h1>}
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
								{(exists && (
									<FormMessage>Username already exists</FormMessage>
								)) || <FormMessage />}
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
								{(exists && (
									<FormMessage>Username already exists</FormMessage>
								)) || <FormMessage />}
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
					<Button type="submit" disabled={exists}>Continue</Button>
				</form>
			</Form>
		</>
	);
}
