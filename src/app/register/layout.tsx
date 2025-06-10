"use client"

import { Toaster } from 'react-hot-toast';
import '../globals.css'

export default function RegisterLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <Toaster/>
        
        {children}
      </body>
    </html>
  );
}