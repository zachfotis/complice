'use client';

import { resetPassword } from '@/actions/clientApi';
import { useParams, useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

function ResetPasswordForm() {
  const params = useParams<{ email: string; token: string }>();
  const userEmail = decodeURIComponent(params.email);
  const token = decodeURIComponent(params.token);
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== verifyPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    const data = await resetPassword(userEmail, token, password);

    if (data?.errors) {
      toast.error(data?.errors.map((err: { message: string }) => err.message).join('. '));
      setPassword('');
    } else if (data?.currentUser) {
      toast.success('Your password has been reset successfully!');
      router.push('/auth/login');
    }
  };

  return (
    <div className="flex-1 w-full flex flex-col justify-center items-center gap-5">
      <h1 className="text-2xl font-[500]">Reset your password</h1>
      <form
        className="w-full max-w-[550px] flex flex-col justify-between items-center gap-10 mt-5"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <label htmlFor="password" className="text-base font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            min="8"
            max="20"
          />
        </div>
        {password && password.length >= 0 && (
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <label htmlFor="verifyPassword" className="text-base font-medium">
              Verify Password
            </label>
            <input
              type="password"
              name="verifyPassword"
              id="verifyPassword"
              placeholder="Verify your password"
              className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
              min="8"
              max="20"
            />
          </div>
        )}
        <input
          type="submit"
          value="Reset Password"
          className="w-full bg-primary text-white text-base font-medium py-2 rounded-sm cursor-pointer"
        />
      </form>
    </div>
  );
}

export default ResetPasswordForm;
