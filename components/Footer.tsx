"use client";
import { auth } from "@/firebase.config";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useAuthState, SignOutHook } from "react-firebase-hooks/auth";

const Footer = () => {
  const router = useRouter();
  const type: "desktop" | "mobile" = "desktop";
  const [user] = useAuthState(auth);

  const handleLogOut = async () => {
    await auth.signOut();

    router.replace("/auth");
  };

  return (
    <footer className="flex cursor-pointer items-center justify-between gap-2 py-6 fixed bottom-0">
      <div className="flex size-10 items-center justify-center max-xl:hidden">
        <img className="rounded-full" src={user?.photoURL!} alt="user" />
      </div>

      <div className="flex flex-1 flex-col justify-center max-xl:hidden max-w-[200px]">
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          {user?.displayName}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>

      <div
        className="relative size-5 max-xl:w-full max-xl:flex max-xl:justify-center max-xl:items-center"
        onClick={handleLogOut}
      >
        <Image src="icons/logout.svg" fill alt="jsm" />
      </div>
    </footer>
  );
};

export default Footer;
