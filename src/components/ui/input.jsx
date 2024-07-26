import * as React from "react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Input as PasswordInput } from "@nextui-org/react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  
	return type !== "password" ? (
		<input
			type={type}
			className={cn(
				"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			ref={ref}
			{...props}
		/>
	) : (
		<PasswordInput
			variant="bordered"
			endContent={
				<button
					className="focus:outline-none"
					type="button"
					onClick={toggleVisibility}>
					{isVisible ? (
						<EyeSlashFilledIcon className="text-2xl pointer-events-none text-default-400" />
					) : (
						<EyeFilledIcon className="text-2xl pointer-events-none text-default-400" />
					)}
				</button>
			}
			type={isVisible ? "text" : "password"}
			className="max-w-xs"
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = "Input";

export { Input };
