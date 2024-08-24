import Image from "next/image";
import AuthGuard from "./AuthGuard";
import DashboardHome from "@/components/DashboardHome";
import SideNav from "@/components/SideNav";

export default function Dashboard() {
  return (
    <AuthGuard>
      {/* <div className="flex">
        <SideNav />
        <DashboardHome />
      </div> */}
      <div className="container flex-1 items-start md:grid md:grid-cols-[300px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10">
        <SideNav />

        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          {/* <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div> */}
          <DashboardHome />
        </main>
      </div>
    </AuthGuard>
  );
}
