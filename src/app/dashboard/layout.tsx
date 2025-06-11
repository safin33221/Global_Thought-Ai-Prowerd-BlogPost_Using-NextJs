
import ".././globals.css";
import DashboardAside from "./components/DashboardAside";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <DashboardAside/>
      <main className=" p-4 w-full">{children}</main>
    </div>
  );
}
