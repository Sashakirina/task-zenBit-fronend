import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</Layout>
	);
}

export default App;
