import Headroom from "../components/Headroom";
import { NavigationMenuDemo } from "../components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="">
      {/* Maybe a different navbar or header here */}
      <Headroom>

        <NavigationMenuDemo />
      </Headroom>
      {children}
    </main>
  )
}


