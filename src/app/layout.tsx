import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-primary min-h-screen w-full flex flex-col justify-start items-start">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
