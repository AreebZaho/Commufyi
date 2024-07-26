export const hostUrl = "http://localhost:5173/";

const logo = `${import.meta.env.PUBLIC_URL}]/logo.png`;
const logotype = `${import.meta.env.PUBLIC_URL}]/logotype.png`;
export { logo, logotype };
	
export const debounceDelay = 1000;

export const OAuth2Providers = [
	{
		name: "Google",
		logo: "",
	},
	{
		name: "Facebook",
		logo: "",
	},
	{
		name: "Instagram",
		logo: "",
	},
	{
		name: "Amazon",
		logo: "",
	},
	{
		name: "Discord",
		logo: "",
	},
	{
		name: "Apple",
		logo: "",
	},
	{
		name: "Github",
		logo: "",
	},
	{
		name: "Microsoft",
		logo: "",
	},
];

export const sidebarLinks = [
	{
		imgURL: "/assets/icons/home.svg",
		route: "/",
		label: "Home",
	},
	{
		imgURL: "/assets/icons/wallpaper.svg",
		route: "/explore",
		label: "Explore",
	},
	{
		imgURL: "/assets/icons/people.svg",
		route: "/all-users",
		label: "People",
	},
	{
		imgURL: "/assets/icons/bookmark.svg",
		route: "/saved",
		label: "Saved",
	},
	{
		imgURL: "/assets/icons/gallery-add.svg",
		route: "/create-post",
		label: "Create Post",
	},
];

export const bottombarLinks = [
	{
		imgURL: "/assets/icons/home.svg",
		route: "/",
		label: "Home",
	},
	{
		imgURL: "/assets/icons/wallpaper.svg",
		route: "/explore",
		label: "Explore",
	},
	{
		imgURL: "/assets/icons/bookmark.svg",
		route: "/saved",
		label: "Saved",
	},
	{
		imgURL: "/assets/icons/gallery-add.svg",
		route: "/create-post",
		label: "Create",
	},
];
