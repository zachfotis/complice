import Button from '../common/Button';

function Banner() {
  return (
    <section className="my-5 md:my-10 flex w-full flex-col items-center justify-start gap-5 px-10 py-20 text-white bg-primary">
      {/* Banner to get 10% with registration */ }
      <div className="flex w-full flex-col items-center justify-start gap-5">
        <h1 className="text-center text-h2 font-custom"> New Here? </h1>
        <h3 className="text-center text-h3 font-custom">Get 10% off your first order!</h3>
        <Button text="Register Now" variant="sm-light" />
      </div>
    </section>
  );
}

export default Banner;
