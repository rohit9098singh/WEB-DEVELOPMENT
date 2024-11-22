

import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/auth/signup";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100 ">
			<div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg max-w-4xl w-full">
				{/* Left Section */}
				<div className="w-full md:w-1/2 p-8 bg-gray-100 drop-shadow-md rounded-l-md">
					<form
						className="flex flex-col gap-6"
						onSubmit={handleSubmit}
					>
						<h1 className="text-2xl font-bold text-gray-800">Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
						/>
						{error && <div className="text-red-600">{error}</div>}
						<button
							type="submit"
							className="bg-green-500 text-white py-3 rounded-md hover:bg-green-600"
						>
							Sign In
						</button>
					</form>
				</div>
				{/* Right Section */}
				<div className="w-full md:w-1/2 p-8 bg-gray-800 text-white flex flex-col items-center justify-center drop-shadow-md rounded-r-md">
					<h1 className="text-xl font-bold mb-4">New Here?</h1>
					<Link to="/signup">
						<button
							type="button"
							className="bg-white text-gray-800 py-2 px-4 rounded-md hover:bg-gray-100"
						>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
