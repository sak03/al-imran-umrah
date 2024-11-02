import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Al Imran | Tours & Travels",
  description: "Al Imran tours & travels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={{position:"fixed", top:"0px", width:"100vw", backgroundColor:"lightgray", zIndex:999}}>
          <Header />
        </div>
        <div style={{position:"relative", top:"4rem"}}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
