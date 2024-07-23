import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/src/components/Header.tsx";
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
    // Basic layout for the project

  const { currentUser } = await getAuthenticatedAppForUser();
  return (

      <html lang="en">
      <body>

      <main>
          <Providers>
          <Header initialUser={currentUser}/>
            {children}
          </Providers>
      </main>
      </body>

      </html>
  );
}
