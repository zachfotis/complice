'use client';

import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { UserType } from '../../../typings';

function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${ baseUrl }/auth/currentuser`, {
        method: 'GET',
        credentials: 'include',
        cache: 'no-cache',
      });
      const data = await response.json();
      if (data.currentUser) {
        setCurrentUser(data.currentUser);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (currentUser) {
      toast.success('Logged in successfully!');
      redirect('/account');
    }
  }, [currentUser]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== verifyPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${ baseUrl }/auth/signup`, {
      method: 'POST',
      credentials: 'include',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.errors) {
      toast.error(data.errors.map((err: { message: string; }) => err.message).join('. '));
    } else if (data.email) {
      setCurrentUser(data);
    }
  };

  return (
    <form className="w-full max-w-[550px] flex flex-col justify-between items-center gap-5 mt-5 md:mt-10" onSubmit={ handleSubmit }>
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <label htmlFor="firstname" className="text-base font-medium">First Name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Enter your first name"
          className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          required
          autoComplete="given-name"
          value={ firstName }
          onChange={ (e) => setFirstName(e.target.value) }
        />
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <label htmlFor="lastname" className="text-base font-medium">Last Name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Enter your last name"
          className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          required
          autoComplete="family-name"
          value={ lastName }
          onChange={ (e) => setLastName(e.target.value) }
        />
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <label htmlFor="email" className="text-base font-medium">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          required
          autoComplete="email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <label htmlFor="password" className="text-base font-medium">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
          autoComplete="current-password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
          min="8"
          max="20"
        />
      </div>
      { password && password.length >= 0 && (
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <label htmlFor="verifyPassword" className="text-base font-medium">Verify Password</label>
          <input
            type="password"
            name="verifyPassword"
            id="verifyPassword"
            placeholder="Verify your password"
            className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
            value={ verifyPassword }
            onChange={ (e) => setVerifyPassword(e.target.value) }
            min="8"
            max="20"
          />
        </div>
      ) }
      <input type="submit" value="Register" className="w-full bg-primary text-white text-base font-medium py-2 rounded-sm cursor-pointer" />

      <Link href={ '/auth/login' } className="text-base text-center font-medium text-primary">
        Already have an account? Login
      </Link>
    </form>
  );
}

export default RegisterForm;
