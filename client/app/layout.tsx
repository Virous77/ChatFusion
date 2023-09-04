import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { GlobalContextProvider } from "@/store/useGlobalContext";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatFusion",
  description: "A app built for blazing fast chat experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
