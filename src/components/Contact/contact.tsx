'use client';

import { ThemeProvider } from '@emotion/react';
import { createTheme, TextField } from '@mui/material';
import { FormEvent } from 'react';
import { toast } from 'react-toastify';

export function ContactUs() {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: 'rgba(6, 15, 20, 1)',
      },
    },
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${baseUrl}/contact/new-message`, {
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
          phone,
          message,
        }),
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
    <ThemeProvider theme={customTheme}>
      <form className="w-full max-w-[1000px] flex flex-col justify-start items-center gap-10" onSubmit={handleSubmit}>
        <div className="w-full flex flex-col md:flex-row justify-start itmes-center gap-10 md:gap-5">
          <TextField id="first-name" name="firstName" label="First Name" type="text" required fullWidth />
          <TextField id="last-name" name="lastName" label="Last Name" type="text" required fullWidth />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-start itmes-center gap-10 md:gap-5">
          <TextField id="email" name="email" label="Email" type="email" required fullWidth />
          <TextField id="phone" name="phone" label="Phone Number" type="tel" required fullWidth />
        </div>
        <TextField id="message" name="message" label="Message" type="text" required fullWidth multiline rows={6} />
        <input
          type="submit"
          value="Submit"
          className="text-primary w-full md:w-fit md:min-w-[300px] text-lg font-medium py-2 px-4 border border-primary hover:bg-primary hover:text-white cursor-pointer"
        />
      </form>
    </ThemeProvider>
  );
}
