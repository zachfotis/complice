import { ShippingAddressType, ShippingCountryType } from '../../../typings';

interface ShippingDetailsProps {
  shippingAddress: ShippingAddressType;
  setShippingAddress: React.Dispatch<React.SetStateAction<ShippingAddressType>>;
  shippingCountries: ShippingCountryType[];
}

function ShippingDetails({ shippingAddress, setShippingAddress, shippingCountries }: ShippingDetailsProps) {
  return (
    <div className="w-full max-w-[1000px] mt-5 lg:mt-10">
      {/* Title */}
      <div className="w-full flex justify-between items-center border-b border-gray-200 pb-2">
        <h1 className="text-h3 font-custom">Shipping Details</h1>
      </div>
      {/* First Name - Last Name */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5 mt-5">
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <label htmlFor="firstName" className="text-base">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
            autoComplete="given-name"
            value={shippingAddress.firstName}
            onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value })}
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <label htmlFor="lastName" className="text-base">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
            autoComplete="family-name"
            value={shippingAddress.lastName}
            onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value })}
          />
        </div>
      </div>
      {/*  Address */}
      <div className="w-full flex flex-col justify-start items-start gap-2 mt-5">
        <label htmlFor="address" className="text-base">
          Address *
        </label>
        <input
          type="text"
          name="address"
          id="address"
          className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
          autoComplete="shipping street-address"
          value={shippingAddress.address}
          onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
        />
      </div>
      {/*  City - Postal Code */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5 mt-5">
        <div className="w-full md:flex-[3] flex flex-col justify-start items-start gap-2">
          <label htmlFor="city" className="text-base">
            City *
          </label>
          <input
            type="text"
            name="city"
            id="city"
            className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
            autoComplete="shipping address-level2"
            value={shippingAddress.city}
            onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
          />
        </div>
        <div className="w-full md:flex-[1] flex flex-col justify-start items-start gap-2">
          <label htmlFor="postalCode" className="text-base">
            Postal Code *
          </label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
            autoComplete="shipping postal-code"
            value={shippingAddress.postalCode}
            onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
          />
        </div>
      </div>
      {/*  Country Selector*/}
      <div className="w-full flex flex-col justify-start items-start gap-2 mt-5">
        <label htmlFor="country" className="text-base">
          Country *
        </label>
        <select
          name="country"
          id="country"
          className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
          autoComplete="shipping country"
          value={shippingAddress.country}
          onChange={(e) => {
            setShippingAddress({ ...shippingAddress, country: e.target.value });
          }}
        >
          <option value="">Select a country</option>
          {shippingCountries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      {/*  Phone */}
      <div className="w-full flex flex-col justify-start items-start gap-2 mt-5">
        <label htmlFor="phone" className="text-base">
          Phone *
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          required
          className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          autoComplete="tel"
          value={shippingAddress.phoneNumber}
          onChange={(e) => setShippingAddress({ ...shippingAddress, phoneNumber: e.target.value })}
        />
      </div>
      {/*  E-mail */}
      <div className="w-full flex flex-col justify-start items-start gap-2 mt-5">
        <label htmlFor="email" className="text-base">
          E-mail *
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full border border-gray-400 rounded-sm px-5 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
          autoComplete="email"
          value={shippingAddress.email}
          onChange={(e) => setShippingAddress({ ...shippingAddress, email: e.target.value })}
        />
      </div>
    </div>
  );
}

export default ShippingDetails;
