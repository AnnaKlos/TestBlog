import { Header } from "@/components";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Page",
  description: "Welcome to my blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
