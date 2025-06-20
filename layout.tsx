import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const metadata = {
  title: "Proturbo - Turbochargers Mexico",
  description:
    "Proturbo - Turbochargers and components distributor in Mexico and USA. More than 25 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} font-sans bg-black text-white min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
