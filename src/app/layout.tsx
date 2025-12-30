import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'

export const metadata: Metadata = {
  title: 'HometoHome - Furniture and More.',
  description: 'Experience designer furniture crafted for modern luxury direct from our Jodhpur factory.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Header />
        <div className="relative bg-background text-foreground min-h-screen">
          {children}
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
