import SocialMedia from './SocialMedia';

function StayTuned() {
  return (
    <section className="w-full px-20 py-10 flex flex-col justify-center items-center gap-5">
      <h2 className="text-h1 font-custom">Stay Tuned With Fashion!</h2>
      <SocialMedia color="text-black" size="text-4xl" gap="gap-10" />
    </section>
  );
}

export default StayTuned;
