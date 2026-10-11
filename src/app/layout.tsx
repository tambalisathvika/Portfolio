import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Tambali Sathvika | Web Developer & Workflow Automation Builder",
  description:
    "Web developer and n8n workflow automation builder based in India. Building responsive websites, small business pages, cafe websites, and automated Google Sheets & Gmail pipelines.",
  keywords: [
    "Tambali Sathvika",
    "Web Developer",
    "Workflow Automation",
    "n8n Developer",
    "Small Business Websites",
    "Landing Page Developer",
    "Frontend Developer",
    "Freelance Web Developer India",
  ],
  authors: [{ name: "Tambali Sathvika" }],
  openGraph: {
    title: "Tambali Sathvika | Web Developer & Workflow Automation Builder",
    description:
      "Turning ideas into practical digital solutions: responsive websites, cafe portals, and smart n8n automations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-[#090d16] text-gray-100 antialiased selection:bg-indigo-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
