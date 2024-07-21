import LOGO from '@/assets/logo.png';
import SocialMedia from '@/components/common/SocialMedia';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'A group of friends and family coming together to unveil themselves through fashion. Complice is a slow fashion brand born and made in Greece. This commitment to slow fashion emphasizes quality over quantity and means that each piece is designed to be timeless, durable, and versatile, offering long-lasting value to its wearers.',
};

function Page() {
  const theBrand = [
    {
      title: 'Partners in Crime',
      description:
        'A group of friends and family coming together to unveil themselves through fashion. Complice is a slow fashion brand born and made in Greece. This commitment to slow fashion emphasizes quality over quantity and means that each piece is designed to be timeless, durable, and versatile, offering long-lasting value to its wearers.',
    },
    {
      title: 'Vision and Inspiration',
      description:
        "Our vision is clear and unified: to create a harmonious blend of street luxury & culture and a blend of comfort & quality in their streetwear collections. Here we draw inspiration from the vibrant energy of the streets and the creative pulse of our city. Each piece is crafted with attention to detail and captures the essence of urban life. Complice clothing is not just about covering the body, it's about making a statement and embracing a lifestyle that mirrors your everyday street adventures, individuality, and artistic spirit.",
    },
    {
      title: 'Celebrating Diversity and Creativity',
      description:
        'Our collections are a celebration of diversity, creativity, and the unique story of each person. Whether you’re rocking our athletic-inspired pieces, our effortlessly cool streetwear, or our statement graphic tees, the streets become your runway. Welcome to Complice, where the streets are alive with your story.',
    },
  ];

  return (
    <PageTemplate>
      <PageBody>
        <div className="flex flex-col justify-start items-center gap-5 md:gap-3 mt-5 md:mt-10 max-w-[1000px]">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <h1 className="font-custom text-h1">The</h1>
            <Image src={LOGO} alt={'logo'} width={300} height={300} className="w-[200px]" />
            <h1 className="font-custom text-h1">Brand</h1>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-10 max-w-[1000px]">
          {theBrand.map((member, index) => (
            <div key={member.title} className="flex flex-col justify-start items-start gap-1 md:gap-2">
              <h2 className="text-h3 font-custom">{member.title}</h2>
              <p className="text-base text-justify">{member.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-start items-center gap-7 my-10">
          <h1 className="text-h2 font-custom">Follow Us</h1>
          <SocialMedia color="text-black" size="text-h1" gap="gap-14" />
        </div>
      </PageBody>
    </PageTemplate>
  );
}

export default Page;
