
import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      setAuthUser(null);

      toast.success("Logout successfully");
    } catch (error) {
      toast.error("Error: " + error);
    }
  };

  return (
    <button
      className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default Logout;
