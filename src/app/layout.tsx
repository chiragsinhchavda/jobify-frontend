import type { Metadata } from "next";
import { Josefin_Sans } from 'next/font/google';

export const metadata: Metadata = {
  title: "Jobify",
  description: "A job tracker web application for job seekers to track their applied jobs.",
};

const josefinSans = Josefin_Sans({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
