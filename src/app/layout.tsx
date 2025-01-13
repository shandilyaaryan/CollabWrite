import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-tiptap/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import "./globals.css";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "CollabWrite",
  description: "A powerful collaborative app for creating documents",
  icons: "./favicon.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <NuqsAdapter>
          <ConvexClientProvider>
          <Toaster />
          {children}
          </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
