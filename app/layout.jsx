import "./globals.css";
import { Providers } from "./providers";
import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata = {
  title: "Landing Page 2",
  description: "A landing page for a fictional product",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bricolage.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
