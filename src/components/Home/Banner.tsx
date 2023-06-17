import Button from '../common/Button';

function Banner() {
  return (
    <section className="w-full bg-primary text-white flex flex-col justify-start items-center gap-5 py-20 px-10 my-10">
      {/* Banner to get 10% with registration */}
      <div className="w-full flex flex-col justify-start items-center gap-5">
        <h1 className="text-h2 font-custom text-center"> New Here? </h1>
        <h3 className="text-h3 font-custom text-center">Get 10% off your first order!</h3>
        <Button text="Register Now" variant="sm-light" />
      </div>
    </section>
  );
}

export default Banner;
