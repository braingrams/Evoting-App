import { Header } from "@/src/Components/Header";
import "./globals.css";
import { Work_Sans } from "next/font/google";

const inter = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Harmonics SUG EVoting App",
  description: "A web application for voting candidate of your choice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
