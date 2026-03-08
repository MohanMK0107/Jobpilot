import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
import { AppContextProvider } from "@/src/utils/AppContext";
import "./globals.css";
import Sidebar  from "../components/Sidebar";
import Layoutwrapper from "../components/Layoutwrapper";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-monteserrat",
});
export const metadata: Metadata = {
  title: "Job Application Tracker",
  description: "Track your job applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${montserrat.variable} antialiased bg-gray-100`}
      >
        <AppContextProvider>
          <Layoutwrapper>
              {/* Page Content */}
              <main className="flex-1">{children}</main>

          </Layoutwrapper>
        </AppContextProvider>
      </body>
    </html>
  );
}
