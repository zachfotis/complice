'use client';

import { forgotPassword } from '@/actions/clientApi';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await forgotPassword(email);
    if (data?.errors) {
      setEmail('');
    } else if (data?.email) {
      toast.success('An email has been sent to your email!');
    }
    setIsSuccess(true);
  };

  return isSuccess ? (
    <div className="flex-1 w-full flex flex-col justify-center items-center gap-5">
      <h1 className="text-2xl font-[500]">Check your email!</h1>
      <div className="flex flex-col justify-center items-center gap-3">
        <p>If the email address you entered is registered with us, you will receive an email shortly.</p>
        <p>Please check your email and follow the instructions.</p>
      </div>
    </div>
  ) : (
    <div className="flex-1 w-full flex flex-col justify-center items-center gap-5">
      <h1 className="text-2xl font-[500]">Forgot your password?</h1>
      <p>Enter your email address to receive a password reset link.</p>
      <form
        className="w-full max-w-[550px] flex flex-col justify-between items-center gap-10 mt-5"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Request Reset Password"
          className="w-full bg-primary text-white text-base font-medium py-2 rounded-sm cursor-pointer"
        />
      </form>
    </div>
  );
}

export default ForgotPasswordForm;
