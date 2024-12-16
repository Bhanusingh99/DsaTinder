import React from "react";
import Input from "./input";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl w-full flex bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2 p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-1">Welcome back</h2>
            <p className="text-gray-600 text-sm">
              Please enter your details to sign in
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <button
              type="button"
              className="w-full mb-4 flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                />
              </svg>
              Login with Google
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(value) => setFormData({ ...formData, email: value })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(value) =>
                setFormData({ ...formData, password: value })
              }
            />

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Sign In
            </button>

            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/sign-up" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>

        <div className="w-1/2 bg-gray-100 p-8">
          <div
            className="h-full rounded-lg bg-sage-green p-8 flex flex-col justify-end"
            style={{ backgroundColor: "#9CAF88" }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              Welcome Back to Your Furniture Journey
            </h2>
            <p className="text-white/90 mb-4">
              Continue exploring our collection of exceptional furniture pieces
              designed to transform your space
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  ✓
                </span>
                <span className="text-white text-sm">Secure login</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  🔒
                </span>
                <span className="text-white text-sm">Privacy protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
