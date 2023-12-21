import MainHeader from "@/components/layout/MainHeader";
import { ReactNode } from "react";
import "../styles/globals.css";



interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
    <body>
    <MainHeader />
    <main className="main">
      { children }
    </main>
    </body>
    </html>
  );
}


