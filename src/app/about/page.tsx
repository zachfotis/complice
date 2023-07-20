import PageTemplate from '@/components/layout/PageTemplate';
import PageBody from '@/components/layout/PageBody';
import Image from 'next/image';
import LOGO from '@/assets/logo.png';
import Button from '@/components/common/Button';
import Link from 'next/link';

function Page() {
  return (
    <PageTemplate>
      <PageBody>
        <div className="flex flex-col justify-start items-center gap-3 mt-10">
          <div className="flex justify-center items-center gap-5">
            <h1 className="font-custom text-h1">About</h1>
            <Image src={ LOGO } alt={ 'logo' } width={ 300 } height={ 300 } className="w-[200px]" />
          </div>
          <p className="text-base">Everything you need to know about your favorite brand.</p>
        </div>
        <div className="flex justify-center items-center gap-10 mt-10">
          <div className="flex flex-col justify-start items-center gap-5">
            <Image
              src="https://images.unsplash.com/photo-1542327534-59a1fe8daf73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
              alt="logo"
              className="w-[475px] h-[550px] object-cover rounded-sm"
              width={ 475 }
              height={ 550 }
            />
            <h2 className="font-custom text-h2">The Team</h2>
            <Link href="/about/team">
              <Button text="Read More" variant={ 'md-outline' } />
            </Link>
          </div>
          <div className="flex flex-col justify-start items-center gap-5">
            <Image
              src="https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
              alt="logo"
              className="w-[475px] h-[550px] object-cover rounded-sm"
              width={ 475 }
              height={ 550 }
            />
            <h2 className="font-custom text-h2">The Brand</h2>
            <Link href="/about/brand">
              <Button text="Read More" variant={ 'md-outline' } />
            </Link>
          </div>
        </div>
      </PageBody>
    </PageTemplate>
  );
}

export default Page;
