import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
	url: import.meta.env.VITE_APPWRITE_URL,
	projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
	databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
	usersCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
	postsCollectionId: import.meta.env.VITE_APPWRITE_POSTS_COLLECTION_ID,
	commentsCollectionId: import.meta.env.VITE_APPWRITE_COMMENTS_COLLECTION_ID,
	communitiesCollectionId: import.meta.env
		.VITE_APPWRITE_COMMUNITIES_COLLECTION_ID,
	savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
	seensCollectionId: import.meta.env.VITE_APPWRITE_SEENS_COLLECTION_ID,
	followsCollectionId: import.meta.env.VITE_APPWRITE_FOLLOWS_COLLECTION_ID,
	votesCollectionId: import.meta.env.VITE_APPWRITE_VOTES_COLLECTION_ID,
	mediaStorageId: import.meta.env.VITE_APPWRITE_MEDIA_STORAGE_ID,
	avatarsStorageId: import.meta.env.VITE_APPWRITE_AVATARS_STORAGE_ID,
	bannersStorageId: import.meta.env.VITE_APPWRITE_BANNERS_STORAGE_ID,
};

export const client = new Client();

client
	.setEndpoint(appwriteConfig.url)
	.setProject(appwriteConfig.projectId)

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
