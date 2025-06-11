import { NavigationMenuDemo } from "../components/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
     
      <NavigationMenuDemo />

      {children}


    </body>
    </html >
  );
}
