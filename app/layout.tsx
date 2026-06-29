import type { Metadata } from "next";
import { dmSans, newIconScript, stretchPro, ticketing } from "@/lib/fonts";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";
import { RefreshRedirect } from "@/components/ui/RefreshRedirect";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Basirat Basanya — Frontend Developer",
  description:
    "Portfolio of Basirat Basanya, a frontend developer passionate about building modern, responsive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${stretchPro.variable} ${newIconScript.variable} ${ticketing.variable} h-full`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-black font-sans text-white antialiased"
      >
        <SmoothScrollProvider>
          <RefreshRedirect />
          <Preloader />
          <CustomCursor />
          <Navigation />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}