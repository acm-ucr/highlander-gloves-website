import "./globals.css";
import {
  Archivo_Narrow,
  Archivo_Black,
  Anek_Telugu,
  Anton,
  Asap_Condensed,
} from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const archivo_narrow = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--font-archivo-narrow",
});

const archivo_black = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo-black",
  weight: "400",
});

const anek_telegu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-anek-telegu",
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
});

const asap_condensed = Asap_Condensed({
  subsets: ["latin"],
  variable: "--font-asap-condensed",
  weight: "400",
});

export const metadata = {
  title: "UCR Highlander Gloves",
  description: "The official boxing club at UCR.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${archivo_narrow.variable} ${archivo_black.variable} ${anek_telegu.variable} ${anton.variable} ${asap_condensed.variable} flex flex-col justify-between`}
      >
        <Navigation />
        <div className="flex w-full flex-col items-center justify-center bg-hlg-dark-gray text-white">
          <ReactQueryClientProvider>
            <Toaster />
            {children}
          </ReactQueryClientProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
