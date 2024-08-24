"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CiDollar } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import Footer from "./Footer";

const SideNav = () => {
  const pathname = usePathname();
  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block p-5">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/next.svg"
            width={34}
            height={34}
            alt="Track it logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Track it</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-purple-500": isActive })}
            >
              <div
                className={`${isActive ? "text-white" : ""} relative size-6`}
              >
                {/* <Image 
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                /> */}
                {item.imgURL}
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}

        {/* <PlaidLink user={user} /> */}
      </nav>

      <Footer />
    </aside>
  );
};

export default SideNav;

export const sidebarLinks = [
  {
    imgURL: <FaHome size="1.5rem" />,
    route: "/dashboard",
    label: "Home",
  },
  {
    imgURL: <CiDollar size="1.5rem" />,
    route: "/my-assets",
    label: "My Assets",
  },
  {
    imgURL: <GrTransaction size="1.5rem" />,
    route: "/transaction-history",
    label: "Transaction History",
  },
];
