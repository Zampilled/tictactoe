import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/header";
import {getAuthenticatedAppForUser} from "@/src/lib/firebase/serverApp";

const inter = Inter({ subsets: ["latin"] });
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Tic Tac Toe",
  description: "Play Tic Tac Toe With Friends !",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { currentUser } = await getAuthenticatedAppForUser();
  return (

      <html lang="en">

      <body>
      <Header initialUser={currentUser?.toJSON()}/>

      <main>{children}</main>
      </body>

      </html>
  );
}
