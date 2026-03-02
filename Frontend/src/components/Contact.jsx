import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-16">
        <div className="bg-base-100 shadow-2xl rounded-2xl p-8 w-full max-w-lg">

          <h2 className="text-3xl font-bold text-center mb-8">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Name */}
            <div className="form-control mb-5">
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
            <div className="form-control mb-5">
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

            {/* Message */}
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                placeholder="Enter your message"
                className="textarea textarea-bordered w-full h-32"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 rounded-lg transition duration-200"
            >
              Submit
            </button>

          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;