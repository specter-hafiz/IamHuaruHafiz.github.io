import type { Metadata } from "next";
import { Archivo  } from "next/font/google"
import "@styles/globals.css";
import Nav from "./ui/nav/nav";
import Cursor from "./ui/components/cursor/cursor";



const archivo = Archivo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Hafiz Huaru",
  description: "portfolio, mobile developer, flutter developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <Nav/>
        <Cursor/>
        {children}
      </body>
    </html>
  );
}
