import { ID, Query, OAuthProvider } from "appwrite";
import { appwriteConfig, account, databases, storage, avatars } from "./config";
import { hostUrl } from "@/constants";

// ============================================================
// AUTH
// ============================================================

export async function usernameExists(username) {
	try {
		const res = await databases.listDocuments(
			appwriteConfig.databaseId,
			appwriteConfig.usersCollectionId,
			[Query.select("username")]
		);
		return res.documents.some((doc) => doc.username === username);
	} catch (error) {
		console.error(error);
	}
	return null;
}

export async function getEmails() {
	try {
		const res = await databases.listDocuments(
			appwriteConfig.databaseId,
			appwriteConfig.usersCollectionId,
			[Query.select("email")]
		);
		return res;
	} catch (error) {
		console.error(error);
		// throw new Error("Something went wrong");
	}
	return null;
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
