import { ID, Query, OAuthProvider } from "appwrite";
import { appwriteConfig, account, databases, storage, avatars } from "./config";
import { hostUrl, serverErrorMessage } from "@/constants";

// ============================================================
// AUTH
// ============================================================

export async function usernameExists(username) {
	try {
		const res = await databases.listDocuments(
			appwriteConfig.databaseId,
			appwriteConfig.usersCollectionId,
			[Query.equal("username", username.toLowerCase())]
		);
		if (!res) throw new Error(serverErrorMessage);
		return res.total > 0;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function emailExists(email) {
	try {
		const res = await databases.listDocuments(
			appwriteConfig.databaseId,
			appwriteConfig.usersCollectionId,
			[Query.equal("email", email.toLowerCase())]
		);
		if (!res) throw new Error(serverErrorMessage);
		return res.total > 0;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function createUserAccount({ email, password, username }) {
	try {
		const res = await account.create(ID.unique(), email, password, username);
		if (!res) throw new Error(serverErrorMessage);
		return res;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function createSessionUserIdSecret(userId, secret) {
	try {
		const result = await account.createSession(userId, secret);
		console.log(result);
		return result;
	} catch (error) {
		console.error(error);
	}
	return null;
}

export function createOAuth2Session(provider) {
	try {
		account.createOAuth2Session(
			OAuthProvider[provider],
			`${hostUrl}auth`,
			`${hostUrl}sign-up`
		);
	} catch (error) {
		console.error(error);
	}
}
