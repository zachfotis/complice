'use client';

import { verifyEmail } from '@/actions/clientApi';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

export default function VerifyEmailPage() {
  const params = useParams<{ email: string; token: string }>();
  const userEmail = decodeURIComponent(params.email);
  const token = decodeURIComponent(params.token);
  const router = useRouter();
  const isMounted = useRef(false);

  useEffect(() => {
    const verifyUserEmail = async () => {
      const user = await verifyEmail(userEmail, token);
      if (user?.errors) {
        toast.error(user?.errors.map((err: { message: string }) => err.message).join('. '));
        router.push('/auth/login');
      } else if (user) {
        toast.success('Email verified successfully!');
        router.push('/account');
      }
    };

    if (isMounted.current) {
      verifyUserEmail();
    }

    isMounted.current = true;
  }, [isMounted]);

  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-5">
      <h1 className="text-3xl">Your account is being verified...</h1>
      <div className="flex flex-col justify-center items-center gap-3">
        <p>
          We are verifying your account with the email <span className="font-semibold">{userEmail}</span>.
        </p>
        <p>Please wait...</p>
      </div>
    </div>
  );
}
