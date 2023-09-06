import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { GlobalContextProvider } from "@/store/useGlobalContext";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Providers from "@/providers/providers";

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
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            storageKey="discord-key"
          >
            <Providers>
              <GlobalContextProvider>{children}</GlobalContextProvider>
            </Providers>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
