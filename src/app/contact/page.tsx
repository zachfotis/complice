'use client';

import PageBody from '@/components/layout/PageBody';
import Categories from '@/components/layout/Categories';
import PageTemplate from '@/components/layout/PageTemplate';
import { createTheme, TextField, ThemeProvider } from '@mui/material';
import PageTitle from '@/components/layout/PageTitle';
import { FormEvent } from 'react';
import { toast } from 'react-toastify';

function Page() {

  const customTheme = createTheme({
    palette: {
      primary: {
        main: 'rgba(6, 15, 20, 1)'
      }
    }
  });
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      phone: data.get('phone'),
      message: data.get('message')
    });

    toast.success('Message sent!');
  };

  return (
    <PageTemplate>
      <PageBody>
        <Categories />
        <PageTitle title="Contact Us" />
        <p className="text-center text-lg font-medium">We would love to hear from you!</p>
        <ThemeProvider theme={ customTheme }>
          <form className="w-full max-w-[1000px] flex flex-col justify-start items-center gap-10" onSubmit={ handleSubmit }>
            <div className="w-full flex flex-col md:flex-row justify-start itmes-center gap-10 md:gap-5">
              <TextField
                id="first-name"
                name="firstName"
                label="First Name"
                type="text"
                required
                fullWidth
              />
              <TextField
                id="last-name"
                name="lastName"
                label="Last Name"
                type="text"
                required
                fullWidth
              />
            </div>
            <div className="w-full flex flex-col md:flex-row justify-start itmes-center gap-10 md:gap-5">
              <TextField
                id="email"
                name="email"
                label="Email"
                type="email"
                required
                fullWidth
              />
              <TextField
                id="phone"
                name="phone"
                label="Phone Number"
                type="tel"
                required
                fullWidth
              />
            </div>
            <TextField
              id="message"
              name="message"
              label="Message"
              type="text"
              required
              fullWidth
              multiline
              rows={ 6 }
            />
            <input
              type="submit"
              value="Submit"
              className="text-primary w-full md:w-fit md:min-w-[300px] text-lg font-medium py-2 px-4 border border-primary hover:bg-primary hover:text-white cursor-pointer"
            />
          </form>
        </ThemeProvider>
      </PageBody>
    </PageTemplate>
  );
}

export default Page;
