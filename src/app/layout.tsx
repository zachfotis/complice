import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import '@/styles/globals.css';
import ToastCustomContainer from '@/components/layout/ToastCustomContainer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className="flex min-h-screen w-full flex-col items-start justify-start bg-white text-primary">
    <Navbar />
    { children }
    <Footer />
    <ToastCustomContainer />
    </body>
    </html>
  );
}
