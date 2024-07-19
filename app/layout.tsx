import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({
  weight: ["300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pray.prayse.app"),
  title: "Prayer Requests",
  description:
    "How can we pray for you? Write anonymous prayer requests to pray for one another, and recieve a bible verse as a response to your prayer.",
  openGraph: {
    type: "website",
    url: "https://pray.prayse.app",
    title: "Prayer Request",
    description:
      "How can we pray for you? Write anonymous prayer requests to pray for one another, and recieve a bible verse as a response to your prayer.",
    siteName: "Prayer Request",
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
  },
  authors: [{ name: "Prayse", url: "https://www.prayse.app" }],
  generator: "Prayse",
  keywords: [
    "morning prayers",
    "morning prayers christian",
    "christian",
    "pray",
    "prayer for healing",
    "night prayer",
    "night time prayer",
    "prayer for today",
    "prayer for strength",
    "prayer for protection",
    "eat sleep pray",
    "daily prayer",
    "jesuslovesyou",
    "God",
    "Jesus",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased")}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
