import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Cursor from "@/components/cursor";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['300', '400', '500', '600' ,"700", "800"],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Gabriel Fulaneto",
  description: "Website de portfólio digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}} antialiased`}
      >
        <Cursor />
        <Navbar />
        <main className="md:p-20">
          {children}
        </main>
      </body>
    </html>
  );
}
