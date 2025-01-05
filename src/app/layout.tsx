import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import {Inter} from "next/font/google";
import localFont from 'next/font/local';

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Repotalk",
  description: "An app to explore GitHub repositories, ask codebase questions, analyze meeting audio, and create issues seamlessly",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const inter = Inter({subsets:["latin"],weight:["100","200","300","400","500","700"]});
export const gilroyBold = localFont({
  src:[
    {
      path:'../../public/font/gilroy_bold.ttf',
      weight:'700'
    }
  ]
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
