import "@/styles/globals.css";

import { ClerkProvider } from '@clerk/nextjs'
import { type Metadata } from "next";
import {Inter} from "next/font/google";
import localFont from 'next/font/local';

import { TRPCReactProvider } from "@/trpc/react";
import { Toaster } from "sonner";

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
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Toaster richColors/>
      </body>
    </html>
    </ClerkProvider>
  );
}
