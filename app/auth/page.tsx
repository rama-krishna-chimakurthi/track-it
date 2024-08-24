"use client";
import { auth, googleProvider } from "@/firebase.config";
import { saveUser } from "@/services/user.service";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const SignIn = () => {
  const [user] = useAuthState(auth);
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const creds = await signInWithPopup(auth, googleProvider);
      await saveUser(creds.user);
      router.push("/dashboard");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleLogout = () => {
    auth.signOut();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen flex items-center justify-center transition-colors duration-300`}
    >
      <div
        className={`${
          darkMode ? "bg-gray-800" : "bg-white"
        } p-8 rounded-lg shadow-lg w-96`}
      >
        {user ? (
          <>
            <h2 className="text-2xl font-semibold text-center mb-6">
              Hi, {user?.displayName}
            </h2>
            <button
              onClick={handleLogout}
              className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition-colors duration-300"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
            <button
              onClick={handleSignIn}
              className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition-colors duration-300"
            >
              Sign In
            </button>
          </>
        )}

        <div className="text-center mt-6">
          <button
            onClick={toggleDarkMode}
            className="text-sm underline focus:outline-none"
          >
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
