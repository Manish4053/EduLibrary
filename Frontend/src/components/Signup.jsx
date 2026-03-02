import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="bg-base-100 shadow-2xl rounded-2xl p-8 w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={() => navigate(-1)}
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        {/* FORM START */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
                {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Button */}
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 rounded-lg transition duration-200">
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </form>
        {/* FORM END */}
      </div>
    </div>
  );
}

export default Signup;
