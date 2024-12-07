import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
export const metadata: Metadata = {
  title: "Design Company"
};
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400","500", "700"],
    style: ["normal"],
    display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          suppressHydrationWarning={true}
          className={`${roboto.className} relative bg-[#0B0E17] before:content-[''] before:block before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-[url('/background.png')] before:bg-repeat before:bg-top before:pointer-events-none before:bg-contain`}
      >
        {children}
      </body>
    </html>
  );
}
