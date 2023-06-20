import Link from 'next/link';

function Categories() {
  const featuredClasses =
    'text-h3 font-custom text-whiteGrey bg-primary px-5 py-2 hover:outline-dashed hover:outline-primary';
  const normalClasses =
    'text-h3 font-custom text-primary px-5 py-2 hover:outline-b-2 hover:outline-dashed hover:outline-primary';
  return (
    <nav className="w-full hidden md:flex justify-start items-center gap-5 py-2 border-b border-whiteGrey overflow-y-auto snap-x">
      <Link href="/sales">
        <h3 className={featuredClasses}>Sales</h3>
      </Link>
      <Link href="/new-arrivals">
        <h3 className={normalClasses}>New Arrivals</h3>
      </Link>
      <Link href="/clothing">
        <h3 className={normalClasses}>Clothing</h3>
      </Link>
      <Link href="/accessories">
        <h3 className={normalClasses}>Accessories</h3>
      </Link>
    </nav>
  );
}

export default Categories;
