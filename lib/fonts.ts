import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const stretchPro = localFont({
  src: "../fonts/StretchProRegular.woff2",
  variable: "--font-stretch-pro",
  display: "swap",
});

export const newIconScript = localFont({
  src: "../fonts/NewIconScript-Regular.woff2",
  variable: "--font-new-icon-script",
  display: "swap",
});

export const ticketing = localFont({
  src: "../fonts/Ticketing.woff2",
  variable: "--font-ticketing",
  display: "swap",
});