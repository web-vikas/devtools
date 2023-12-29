import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevTools | Code Screenshot Generator",
  description:
    "Effortlessly capture and share code screenshots with this powerful DevTools extension. Enhance your coding experience by generating visual representations of your code snippets. Create By - Vikas Kumar Patel along with Your Code Lab , Thanks Man !",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}
        <Toaster />
      </body>
    </html>
  );
}
