'use client';

import Link from 'next/link';
import { FormEvent } from 'react';
import { toast } from 'react-toastify';
import Button from '../common/Button';
import SocialMedia from '../common/SocialMedia';

function Footer() {
  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email') as string;

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${ baseUrl }/newsletter/subscribe-user/${ email }`, {
        method: 'POST',
        credentials: 'include',
        cache: 'no-cache',
      });
      const data = await response.json();
      if (data.message) {
        toast.success(data.message);
      } else {
        toast.error(data.errors.map((err: any) => err.message).join(', '));
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.message || 'An error occurred');
    } finally {
      form.reset();
    }
  };

  return (
    <footer className="w-full bg-primary text-whiteGrey mt-auto">
      <div className="mx-auto flex w-full flex-col items-center justify-start max-w-[1680px]">
        <div className="flex w-full flex-1 flex-wrap items-stretch justify-evenly gap-10 py-5">
          {/* Newsletter */}
          <div className="flex flex-col flex-wrap items-start justify-start gap-5 p-5">
            <h1 className="text-h4 font-custom">NEWSLETTER</h1>
            <p className="text-sm text-accent">Sign up to be the first to know about drops, special offers and more.</p>
            <form
              className="w-full mt-5 flex items-stretch justify-center gap-3"
              onSubmit={ handleSubscribe }
            >
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 text-sm text-black  bg-whiteGrey"
              />
              <Button text="Subscribe" variant="sm-light" />
            </form>
          </div>

          {/* Information */}
          <div className="flex flex-1 flex-col flex-wrap items-start justify-start gap-5 p-5">
            <h1 className="text-h4 font-custom">INFORMATION</h1>
            <ul className="flex flex-col items-start justify-start gap-5">
              <li className="text-base text-accent">
                <Link href={'/faq'}>FAQ</Link>
              </li>
              <li className="text-base text-accent">
                <Link href={'/shipping'}>Shipping Policy</Link>
              </li>
              <li className="text-base text-accent">
                <Link href={'/privacy'}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          {/* Complice */}
          <div className="flex flex-1 flex-col flex-wrap items-start justify-start gap-5 p-5">
            <h1 className="text-h4 font-custom">COMPLICE TEAM</h1>
            <ul className="flex flex-col items-start justify-start gap-5">
              <li className="text-base text-accent">
                <Link href={'/about'}>About Us</Link>
              </li>
              <li className="text-base text-accent">
                <Link href={'/contact'}>Contact Us</Link>
              </li>
              <li className="text-base text-accent">
                <Link href={'/members'}>Membership Benefits</Link>
              </li>
            </ul>
          </div>
          {/* Social */}
          <div className="flex flex-1 flex-col flex-wrap items-start justify-start gap-5 p-5">
            <h1 className="text-h4 font-custom">SOCIAL MEDIA</h1>
            <SocialMedia color="text-white" gap="gap-5" />
          </div>
        </div>
        {/*  All rights reserved*/}
        <div className="flex w-full flex-wrap items-center justify-center gap-10 border-t py-5 border-secondary">
          <p className="text-sm text-whiteGrey">© {new Date().getFullYear()} COMPLICE. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
