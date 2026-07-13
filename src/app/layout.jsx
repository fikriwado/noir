import { Big_Shoulders, DM_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Fikri Wado — Developer & Designer",
  description:
    "Senior developer & designer passionately creating digital experiences and solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bigShoulders.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
