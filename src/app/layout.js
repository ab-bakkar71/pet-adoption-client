import dns from 'node:dns'
dns.setServers(['8.8.8.8','8.8.4.4'])


import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import NextThemProviders from "@/providers/NextThemProviders";
import Footer from "@/components/Footer";
import { ToastContainer } from 'react-toastify';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Pet Adoption - Find Your Perfect Furry Friend",
  description:
    "An online platform to find and adopt pets. Connect with shelters, explore available animals, and start your pet adoption journey today.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className=" bg-background text-foreground">
        <ToastContainer />
        <NextThemProviders>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </NextThemProviders>
      </body>
    </html>
  );
}
