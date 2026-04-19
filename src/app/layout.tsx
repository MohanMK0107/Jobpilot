import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
import { AppContextProvider } from "@/src/utils/AppContext";
import "./globals.css";
import Sidebar  from "../components/Sidebar";
import Layoutwrapper from "../components/Layoutwrapper";
import { SessionProviderWrapper } from "../lib/SessionProviderWrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Toaster } from "react-hot-toast";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession(authOptions);


  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${montserrat.variable} antialiased bg-gray-100`}
      >
        <SessionProviderWrapper session={session}>
        <AppContextProvider>
          <Layoutwrapper>
              {/* Page Content */}
              <main className="flex-1">
                <Toaster position="top-right" reverseOrder={false}/>
                {children}
              </main>
          </Layoutwrapper>
        </AppContextProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
