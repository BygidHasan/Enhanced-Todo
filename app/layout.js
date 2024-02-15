import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Provider from "@/store/ProviderController";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enhanced Todo App",
  description: "a todo app with lots of features",
};

export default function RootLayout({ children }) {
  return (
    <Provider>
      <html lang="en">
        <body className={inter.className}>
          <div className="h-dvh flex bg-gradient-to-r from-teal-700 to-teal-200">
            <Navbar />
            {children}
          </div>
          </body>
      </html>
    </Provider>
  );
}
