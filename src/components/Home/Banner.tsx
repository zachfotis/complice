import Button from '../common/Button';

function Banner() {
  return (
    <section className="my-0 md:my-10 flex w-full flex-col items-center justify-start gap-5 text-white mx-auto md:px-5 md:max-w-[1680px]">
      {/* Banner to get 10% with registration */ }
      <div className="flex w-full flex-col items-center justify-start gap-5 bg-primary px-10 py-20 ">
        <h1 className="text-center text-h2 font-custom"> New Here? </h1>
        <h3 className="text-center text-h3 font-custom">Get 10% off your first order!</h3>
        <Button text="Register Now" variant="sm-light" />
      </div>
    </section>
  );
}

export default Banner;
