import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/header";
import {getAuthenticatedAppForUser} from "@/src/lib/firebase/serverApp";
import {Providers} from "@/src/app/providers";

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

      <main>
          <Header initialUser={currentUser}/>
          <Providers>
            {children}
          </Providers>
      </main>
      </body>

      </html>
  );
}
