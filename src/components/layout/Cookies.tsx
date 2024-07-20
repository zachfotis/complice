'use client';

import Button from '@/components/common/Button';
import useLocalStorage from '@/hooks/useLocalStorage';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Cookies() {
  const [hasAgreed, setHasAgreed] = useLocalStorage<boolean>('cookiesConsent', false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  if (hasAgreed) return null;

  return (
    <div className="fixed bottom-0 w-full bg-white px-5 md:px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-10 border-t-2 border-bronze z-50">
      <div className="flex flex-col justify-start items-start gap-3">
        <h1 className="text-lg font-[600]">Cookies Consent</h1>
        <p className="text-base">
          This website uses cookies to function properly and give you the best experience.
          By using this website, you agree to our cookie and privacy policy. For more information, please read our <strong><Link href="/privacy">Privacy Policy</Link></strong>.
          If you do not agree, please leave the website immediately.
        </p>
      </div>
      <div className="whitespace-nowrap">
        <Button text="I Agree" variant="md-outline" onClick={ () => setHasAgreed(true) } />
      </div>
    </div>
  );
}
