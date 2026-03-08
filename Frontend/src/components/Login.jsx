import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4001/user/login", data);
      // console.log(res.data); // add this

      if (res.data) {
        // Save token
        localStorage.setItem("token", res.data.token);

        // Save user info
        localStorage.setItem("user", JSON.stringify(res.data.user));

        // Update auth context
        setAuthUser(res.data.user);

        toast.success("Login successful!");
        // Close modal
        document.getElementById("my_modal_3").close();
        

        // redirect to home page
        // navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Invalid email or password");
    }
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box w-full max-w-md relative">
        {/* Close Button */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">
            ✕
          </button>
        </form>

        <h3 className="text-2xl font-bold text-center mb-6">Login</h3>

        {/* FORM START */}
        <form onSubmit={handleSubmit(onSubmit)}>
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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>
        {/* FORM END */}

        {/* Signup Link */}
        <p className="text-center mt-4 text-sm">
          Not registered?{" "}
          <Link to="/signup" className="text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </dialog>
  );
}

export default Login;
