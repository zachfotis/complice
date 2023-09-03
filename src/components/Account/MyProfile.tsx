'use client';

import { ShippingCountryType, UserType } from '../../../typings';
import { useState } from 'react';

interface IMyProfileProps {
  currentUser: UserType;
  shippingCountries: ShippingCountryType[];
}

export function MyProfile({ currentUser, shippingCountries }: IMyProfileProps) {
  const [firstName, setFirstName] = useState(currentUser.address.firstName);
  const [lastName, setLastName] = useState(currentUser.address.lastName);
  const [address, setAddress] = useState(currentUser.address.address);
  const [city, setCity] = useState(currentUser.address.city);
  const [postalCode, setPostalCode] = useState(currentUser.address.postalCode);
  const [country, setCountry] = useState(currentUser.address.country);
  const [phoneNumber, setPhoneNumber] = useState(currentUser.address.phoneNumber);

  return (
    <form className="w-full">
      { /* First Name - Last Name */ }
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5 mt-5">
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <label htmlFor="firstName" className="text-base">First Name *</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
            autoComplete="given-name"
            value={ firstName }
            onChange={ (e) => setFirstName(e.target.value) }
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <label htmlFor="lastName" className="text-base">Last Name *</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
            autoComplete="family-name"
            value={ lastName }
            onChange={ (e) => setLastName(e.target.value) }
          />
        </div>
      </div>
      { /*  Address */ }
      <div className="w-full flex flex-col justify-start items-start gap-2 mt-5">
        <label htmlFor="address" className="text-base">Address *</label>
        <input
          type="text"
          name="address"
          id="address"
          className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
          autoComplete="shipping street-address"
          value={ address }
          onChange={ (e) => setAddress(e.target.value) }
        />
      </div>
      { /*  City - Postal Code */ }
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5 mt-5">
        <div className="w-full md:flex-[3] flex flex-col justify-start items-start gap-2">
          <label htmlFor="city" className="text-base">City *</label>
          <input
            type="text"
            name="city"
            id="city"
            className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
            autoComplete="shipping address-level2"
            value={ city }
            onChange={ (e) => setCity(e.target.value) }
          />
        </div>
        <div className="w-full md:flex-[1] flex flex-col justify-start items-start gap-2">
          <label htmlFor="postalCode" className="text-base">Postal Code </label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
            autoComplete="shipping postal-code"
            value={ postalCode }
            onChange={ (e) => setPostalCode(e.target.value) }
          />
        </div>
      </div>
      { /*  Country Selector*/ }
      <div className="w-full flex flex-col justify-start items-start gap-2 mt-5">
        <label htmlFor="country" className="text-base">Country *</label>
        <select
          name="country"
          id="country"
          className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
          autoComplete="shipping country"
          value={ country }
          onChange={ (e) => setCountry(e.target.value) }
        >
          <option value="">Select a country</option>
          { shippingCountries.map((country) => (
            <option key={ country.name } value={ country.name }>{ country.name }</option>
          )) }
        </select>
      </div>
      {/*  Phone */ }
      <div className="w-full flex flex-col justify-start items-start gap-2 mt-5">
        <label htmlFor="phone" className="text-base">Phone *</label>
        <input
          type="text"
          name="phone"
          id="phone"
          required
          className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          autoComplete="tel"
          value={ phoneNumber }
          onChange={ (e) => setPhoneNumber(e.target.value) }
        />
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-2 mt-5">
        <button type="submit" className="w-full bg-primary text-white text-base font-medium py-2 rounded-sm">Save</button>
      </div>
    </form>
  );
}