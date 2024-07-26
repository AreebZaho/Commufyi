import { useState, useEffect } from "react";
import { usernameExists } from "@/db/api";

export const useUsernameExits = (username) => {
	const [exists, setExists] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	useEffect(() => {
		const check = async () => {
			setLoading(true);
			const res = await usernameExists(username);
			setLoading(false);
      if (res !== null) setExists(res);
      else setError("Error: Username already exists");
		};
		check();
	}, [username]);
	return { exists, loading, error };
};
