import SocialMedia from './SocialMedia';

function StayTuned() {
  return (
      <section className="flex w-full flex-col items-center justify-center gap-5 px-20 py-10">
          <h2 className="text-center text-h1 font-custom">Stay Tuned With Fashion!</h2>
          <SocialMedia color="text-black" size="text-4xl" gap="gap-10"/>
      </section>
  );
}

export default StayTuned;
