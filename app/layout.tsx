import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapClient from "@/components/BoostrapClient";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local"
import { UserProvider } from "@/context/UserContext";

const rubik = localFont({
  src: [
    {
      path: "../public/fonts/Rubik-Italic-VariableFont_wght.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/Rubik-VariableFont_wght.ttf",
      weight: "800",
      style: "normal"
    }
  ],
  variable: "--font-rubik",
  display: "swap"
})


export const metadata: Metadata = {
  title: "Farm Management",
  description: "Farm Management",
  icons: {
    icon: "/icon_website.png"
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} antialiased`}
        style={{
          minHeight: "100vh", // full tinggi layar
          margin: 0,
          background: "linear-gradient(100deg, #2196f3, #ffffff)", // gradient biru putih
          backgroundAttachment: "fixed" // biar tetap saat scroll
        }}
      >
        <UserProvider>
          <Navbar/>
          <div className="container-fluid" style={{marginTop: "100px"}}>
              {children}
          </div>
        </UserProvider>
        <BootstrapClient/>
      </body>
    </html>
  );
}
