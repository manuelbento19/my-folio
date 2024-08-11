import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {ChakraProvider} from '@chakra-ui/react';
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyFolio",
  description: "Create your own portfolio without code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
