import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollEffects from "@/components/ScrollEffects";
import AnnouncementBar from "@/components/AnnouncementBar";
import UtilityBar from "@/components/UtilityBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "AccelEye | AI-assisted Weapon & Violence Detection with 24/7 Human Verification",
    template: "%s | AccelEye",
  },
  description:
    "AI-assisted weapon detection, digital wellness analytics and 24/7 human monitoring and verification for schools, cities, churches and communities.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <AnnouncementBar />
        <UtilityBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollEffects />
        <ToastProvider />
      </body>
    </html>
  );
}
