"use client"
import { useCurrentUserDetails } from "@/Hook/useCurrentUserDetails";
import ".././globals.css";
import DashboardAside from "./components/DashboardAside";
import Loader from "../components/Loader";


export default function Layout({ children }: { children: React.ReactNode }) {
  const { isLoading } = useCurrentUserDetails()
  if (isLoading) return <Loader />
  return (

    <html lang="en">
      <body

      >
        <div className="flex">
          <DashboardAside />
          <main className=" p-4 w-full">{children}</main>
        </div>


      </body>
    </html >

  );
}
