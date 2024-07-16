import RankImage from '@/assets/rank_banner.png';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../common/Button';

function Banner() {
  return (
    <section className="md:mb-10 flex w-full max-w-[1680px] flex-col items-center justify-start gap-5 text-white mx-auto">
      <div className="relative flex w-full h-[450px] flex-col items-center justify-start gap-5 p-10 md:p-20">
        <div className="h-full flex flex-col items-center justify-center text-whiteGrey gap-5">
          <h1 className="text-center text-h2 font-custom">New Here?</h1>
          <h3 className="text-center text-h3 font-custom">Register and get 10% off your first order!</h3>
          <Link href="/auth/register" className="my-5">
            <Button text="Register Now" variant="sm-light" />
          </Link>
          <h3 className="text-center text-h4 font-custom">Get even more discounts and gifts by ranking up!</h3>
        </div>
        <Image src={ RankImage } alt="Rank Image" width={ 1600 } height={ 600 } className="w-full h-full object-cover absolute top-0 left-0 -z-10 filter brightness-75" />
      </div>
    </section>
  );
}

export default Banner;
