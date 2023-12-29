import "@/app/globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";

export const metadata = {
  title: "DevTools | Resume Builder",
  description: "Thanks Man !",
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
      <body>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
