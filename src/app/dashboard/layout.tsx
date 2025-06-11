import DashboardAside from "./components/DashboardAside";
import ".././globals.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <DashboardAside />
      <main className="ml-64 p-4 w-full">{children}</main>
    </div>
  );
}
