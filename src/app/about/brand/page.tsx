import PageTemplate from '@/components/layout/PageTemplate';
import PageBody from '@/components/layout/PageBody';
import Image from 'next/image';
import SocialMedia from '@/components/common/SocialMedia';
import LOGO from '@/assets/logo.png';

function Page() {

  const theBrand = [
    {
      title: 'Designing Elegance',
      image: 'https://images.unsplash.com/photo-1542062700-9b61ccbc1696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
      description: 'Welcome to a realm where elegance reigns supreme. At our clothing e-shop, we take pride in curating a collection that celebrates the essence of sophistication and style. Our journey begins with our passionate and visionary designers, who possess an uncanny ability to draw inspiration from the world\'s beauty, be it the mesmerizing patterns of nature, the captivating lines of architectural marvels, the hues of timeless artworks, or the rich tapestry of diverse cultures. With each stroke of their creative genius, our designers craft captivating and timeless designs that transcend fleeting trends. Every silhouette is meticulously sketched, ensuring that it embodies the true spirit of elegance while reflecting the uniqueness of each wearer. Whether you seek the grace of classic cuts or the allure of modern chic, our diverse range of designs promises to fulfill your sartorial desires.'
    },
    {
      title: 'Crafted to Perfection',
      image: 'https://images.unsplash.com/photo-1597484662003-7cf93e97447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80',
      description: 'In our pursuit of excellence, we leave no stone unturned. Embracing the belief that true elegance lies not only in design but also in the details, we embark on a relentless quest to source only the most exquisite fabrics and materials. From luxurious silks that caress your skin like a gentle breeze to opulent velvets that exude a regal charm, each fabric is thoughtfully hand-picked to complement our designs and elevate your style to new heights. But it is not just the materials that set our creations apart; it is the love and devotion poured into the craftsmanship. Our atelier is a sanctuary of artisanal skill, where master craftsmen with decades of experience lovingly cut, sew, and assemble each garment by hand. With painstaking precision and an unwavering commitment to perfection, they ensure that every stitch and seam harmoniously come together to create a wearable masterpiece.'
    },
    {
      title: 'Timeless Appeal',
      image: 'https://images.unsplash.com/photo-1542850771-8b2356af08af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2374&q=80',
      description: 'In a world of fast fashion and fleeting trends, we stand proud as guardians of elegance that withstands the test of time. Our collection is more than just an assemblage of clothes; it is a celebration of art, craftsmanship, and the beauty of individuality. Each garment carries within it a story of passion, creativity, and dedication, making it an heirloom of style that transcends generations. When you slip into our elegant clothes, you are not merely wearing a fashion statement; you are donning a piece of history—a symbol of enduring allure that captures the essence of who you are. Be it a graceful gown for an enchanting evening, a power ensemble that commands the boardroom, or a casual-chic outfit for a day of leisure, our collection caters to every facet of your life. Embrace the allure of timeless fashion, and let our elegant clothes become an extension of your own story. Elevate your style and bask in the confidence that comes with wearing fashion crafted to perfection. Step into the world of sophistication and grace at COMPLICE - where elegance finds a home.'
    }
  ];

  return (
    <PageTemplate>
      <PageBody>
        <div className="flex flex-col justify-start items-center gap-5 md:gap-3 mt-5 md:mt-10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5">
            <h1 className="font-custom text-h1">The</h1>
            <Image src={ LOGO } alt={ 'logo' } width={ 300 } height={ 300 } className="w-[200px]" />
            <h1 className="font-custom text-h1">Brand</h1>
          </div>
          <p className="text-base mt-5 text-justify">We don&apos;t merely follow fashion; we redefine it. Our brand, meticulously crafted by our Athens-based design
            team, delves beyond the obvious to bring you the most cutting-edge clothing, footwear, accessories, and gifts. At COMPLICE, our curation of brands isn&apos;t just about
            variety; it&apos;s about handpicking the finest to offer you an unparalleled selection, exclusive items, and innovative collaborations. But we don&apos;t stop there. We
            also provide a
            premium range of products, allowing you to express your individuality in more ways than one. With us, there are no rules – only infinite possibilities to
            showcase
            your unique style.</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-20 md:mt-10">
          { theBrand.map((member, index) => (
            <div key={ index }
                 className={ `w-full flex justify-start items-stretch bg-white gap-3 md:gap-10 ${ index % 2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col' }` }>
              <Image src={ member.image } alt={ member.title } width={ 575 } height={ 500 } className="w-full md:min-w-[575px] max-h-[300px] md:h-auto object-cover" />
              <div className="flex flex-col justify-start items-start gap-1 md:gap-2">
                <h2 className="text-h3 font-custom">{ member.title }</h2>
                <p className="text-base mt-3 text-justify">{ member.description }</p>
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
