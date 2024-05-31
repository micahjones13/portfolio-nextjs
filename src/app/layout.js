import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Micah Jones",
  description: "Portfolio for Micah Jones",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        src="https://kit.fontawesome.com/2e33855987.js"
        crossOrigin="anonymous"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
