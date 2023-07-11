'use client';

import {usePathname} from 'next/navigation';
import Link from "next/link";

function NavMap() {
  const pathname = usePathname()
  const segments = pathname.split('/')

  const excludingWords = ['t-shirts'];

  const capitalizedSegments = segments.map((segment) => {
    let capitalizedSegment;

    if (excludingWords.includes(segment)) {
      // don't remove dash if segment is in the excludingWords array but capitalize each word
      capitalizedSegment = segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('-');
    } else {
      capitalizedSegment = segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }

    return {
      url: segment,
      label: capitalizedSegment,
    };
  });


  // Remove the first segment (empty string) and the last segment (the current page)
  capitalizedSegments.shift()

  return (
    <div className="flex w-full justify-start items-center text-base md:-my-5 whitespace-nowrap">
      <Link href='/'>Home</Link>
      {capitalizedSegments.map((segment, index) => (
        <div key={index} className="flex">
          <div className="px-2">&gt;</div>
          <Link href={`/${capitalizedSegments.slice(0, index + 1).map((segment) => segment.url).join('/')}`}>{segment.label}</Link>
        </div>
      ))}
    </div>
  );
}

export default NavMap;
