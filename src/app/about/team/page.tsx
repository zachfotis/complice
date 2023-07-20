import PageTemplate from '@/components/layout/PageTemplate';
import PageBody from '@/components/layout/PageBody';
import Image from 'next/image';
import SocialMedia from '@/components/common/SocialMedia';

function Page() {

  const teamMembers = [
    {
      name: 'Jane Smith',
      role: 'Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
      shortBio: 'Jane Smith is a renowned fashion designer, known for her innovative and trend-setting designs. With a career spanning over two decades, she has made significant contributions to the fashion industry. Jane\'s unique approach to design, which combines traditional techniques with modern aesthetics, has earned her a place among the leading designers of the contemporary fashion world. Her work has been showcased in major fashion weeks around the globe, and she has collaborated with some of the biggest names in the industry. Jane\'s designs are characterized by their sophistication, creativity, and attention to detail, reflecting her commitment to quality and style.'
    },
    {
      name: 'John Doe',
      role: 'Designer',
      image: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
      shortBio: 'Joe Doe is a distinguished fashion designer, celebrated for his avant-garde and visionary designs. His career in the fashion industry spans over 15 years, during which he has consistently pushed the boundaries of style and design. Joe\'s design philosophy blends classic elements with a contemporary edge, earning him recognition as one of the most influential designers in today\'s fashion scene. His collections have graced runways worldwide, and he has partnered with numerous high-profile brands. Known for his meticulous attention to detail and commitment to quality, Joe\'s designs embody a unique blend of elegance and innovation.'
    },
    {
      name: 'John Smith',
      role: 'Sales Manager',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
      shortBio: 'John Smith is a sales manager at the company. He has been working in the industry for over 10 years and has a wealth of experience in sales and marketing. John is passionate about helping people find the right product for their needs, and he\'s always happy to answer any questions you may have. He\'s also an avid golfer, so if you\'re looking for someone who knows how to swing a club, John is your guy!'
    }
  ];

  return (
    <PageTemplate>
      <PageBody>
        <h1 className="text-h1 font-custom mt-5 md:mt-10">About Our Team</h1>
        <div className="w-full flex flex-col justify-center items-center gap-20 md:mt-10">
          { teamMembers.map((member, index) => (
            <div key={ index }
                 className={ `w-full max-w-[1000px] flex justify-start items-stretch bg-white gap-3 md:gap-10 ${ index % 2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col' }` }>
              <Image src={ member.image } alt={ member.name } width={ 500 } height={ 500 } className="w-[350px] h-[250px] md:h-auto object-cover" />
              <div className="flex flex-col justify-start items-start gap-1 md:gap-2">
                <h2 className="text-h3 font-custom">{ member.name }</h2>
                <p className="text-h4">{ member.role }</p>
                <p className="text-base mt-3 text-justify">{ member.shortBio }</p>
              </div>
            </div>
          )) }
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
