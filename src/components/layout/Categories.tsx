'use client'
import Link from 'next/link';
import { usePathname } from "next/navigation";

function Categories() {
  const pathname = usePathname()
  const segments = pathname.split('/')

  // If segments length is 2, get the last else get the second last
  const activeSegment = segments.length === 2 ? segments[1] : segments[segments.length - 2]

  const featuredClasses =
    'min-w-[100px] text-center text-h3 font-custom text-whiteGrey bg-primary px-3 py-2 hover:outline-dashed hover:outline-primary';
  const normalClasses =
    'min-w-[100px] text-center text-h3 font-custom text-primary px-3 py-2 hover:outline-b-2 hover:outline-dashed hover:outline-primary';

  const getClasses = (segment: string, classType: string) => {
    const classes = classType === 'featured' ? featuredClasses : normalClasses

    if (segment === activeSegment && classType === 'normal') {
      return `${classes} border-b-2 border-primary`
    } else {
      return classes
    }
  }
  return (
    <nav
      className="hidden w-full snap-x items-center justify-start gap-7 overflow-y-auto border-b py-2 border-whiteGrey md:flex">
      <Link href="/sales">
        <h3 className={getClasses('sales', 'featured')}>Sales</h3>
      </Link>
      <Link href="/new-arrivals">
        <h3 className={getClasses('new-arrivals', 'normal')}>New Arrivals</h3>
      </Link>
      <Link href="/clothing">
        <h3 className={getClasses('clothing', 'normal')}>Clothing</h3>
      </Link>
      <Link href="/accessories">
        <h3 className={getClasses('accessories', 'normal')}>Accessories</h3>
      </Link>
    </nav>
  );
}

export default Categories;
