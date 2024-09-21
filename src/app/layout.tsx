import "./globals.css";
import { Archivo_Narrow, Archivo_Black, Anek_Telugu } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
        className={`${archivo_narrow.variable} ${archivo_black.variable} ${anek_telegu.variable} flex flex-col justify-between`}
      >
        <Navigation />
        <div className="flex w-full flex-col items-center justify-center bg-hlg-dark-gray text-white">
          <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
