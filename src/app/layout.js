import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getHeaderInfo } from "@/lib/api";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const headerInfo = await getHeaderInfo();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header logo={headerInfo.logo.url} navItems={headerInfo.navLinksCollection.items} />
          {children}
        <Footer />
      </body>
    </html>
  );
}
