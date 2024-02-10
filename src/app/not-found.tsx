import Image from 'next/image';
import NotFoundImage from '@/assets/no-results.png';
import Link from 'next/link';
import Button from '@/components/common/Button';
import PageTemplate from '@/components/layout/PageTemplate';
import PageBody from '@/components/layout/PageBody';

export default function NotFound() {
  return (
    <PageTemplate>
      <PageBody>
        <section className="flex-1 flex flex-col items-center justify-center gap-5 text-center">
          <Image src={ NotFoundImage } alt="Success" width={ 500 } height={ 500 } className="ml-10 md:ml-32" />
          <p className="text-2xl font-bold">Page not found</p>
          <p>The page you are looking for does not exist. Go back to the home page and try again.</p>
          <Link href="/" className="mt-5">
            <Button text="Go back to home" />
          </Link>
        </section>
      </PageBody>
    </PageTemplate>
  );
}
