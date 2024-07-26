import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootLayout, Signup, Home } from "./pages";

function App() {
	return (
		// <div className="flex items-center justify-center w-screen h-screen">
		<BrowserRouter>
			<div className="flex items-center justify-center w-screen h-screen bg-slate-500">
				{/* <div className="bg-white"> */}
				<Routes>
					<Route path="/" element={<RootLayout />}>
						<Route path="" element={<Home />} />
						<Route path="sign-up" element={<Signup />} />
						{/* <Route path="auth" element={<SignupEmail />} /> */}
						{/* public routes */}
						{/* <Route element={<AuthLayout />}>
							<Route path="/sign-in" element={<SigninForm />} />
							<Route path="/sign-up" element={<SignupForm />} />
						</Route> */}

						{/* private routes */}
						{/* <Route element={<RootLayout />}>
							<Route index element={<Home />} />
							<Route path="/explore" element={<Explore />} />
							<Route path="/saved" element={<Saved />} />
							<Route path="/all-users" element={<AllUsers />} />
							<Route path="/create-post" element={<CreatePost />} />
							<Route path="/update-post/:id" element={<EditPost />} />
							<Route path="/posts/:id" element={<PostDetails />} />
							<Route path="/profile/:id/*" element={<Profile />} />
							<Route path="/update-profile/:id" element={<UpdateProfile />} />
						</Route> */}
					</Route>
				</Routes>
				{/* </div> */}
			</div>
		</BrowserRouter>
	);
}

export default App;
