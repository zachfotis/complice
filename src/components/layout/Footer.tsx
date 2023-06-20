import Button from '../common/Button';
import SocialMedia from '../common/SocialMedia';

function Footer() {
  return (
    <footer className="w-full bg-primary text-whiteGrey">
      <div className="w-full max-w-[1680px] mx-auto flex flex-col justify-start items-center">
        <div className="flex-1 w-full flex justify-evenly items-stretch gap-10 flex-wrap py-5">
          {/* Newsletter */}
          <div className="flex flex-col justify-start items-start gap-5 flex-wrap p-5">
            <h1 className="text-h4 font-custom">NEWSLETTER</h1>
            <p className="text-sm text-accent">Sign up to be the first to know about drops, special offers and more.</p>
            <div className="flex justify-center items-stretch gap-2 mt-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-[300px] px-5 bg-whiteGrey text-black text-sm"
              />
              <Button text="Subscribe" variant="sm-light" />
            </div>
          </div>

          {/* Information */}
          <div className="flex-1 flex flex-col justify-start items-start gap-5 flex-wrap p-5">
            <h1 className="text-h4 font-custom">INFORMATION</h1>
            <ul className="flex flex-col justify-start items-start gap-5">
              <li className="text-base text-accent">Help</li>
              <li className="text-base text-accent">FAQ</li>
              <li className="text-base text-accent">Shipping</li>
              <li className="text-base text-accent">Terms & Conditions</li>
            </ul>
          </div>
          {/* Complice */}
          <div className="flex-1 flex flex-col justify-start items-start gap-5 flex-wrap p-5">
            <h1 className="text-h4 font-custom">COMPLICE TEAM</h1>
            <ul className="flex flex-col justify-start items-start gap-5">
              <li className="text-base text-accent">About Us</li>
              <li className="text-base text-accent">Contact Us</li>
              <li className="text-base text-accent">Privacy Policy</li>
            </ul>
          </div>
          {/* Social */}
          <div className="flex-1 flex flex-col justify-start items-start gap-5 flex-wrap p-5">
            <h1 className="text-h4 font-custom">SOCIAL MEDIA</h1>
            <SocialMedia color="text-white" gap="gap-5" />
          </div>
        </div>
        {/*  All rights reserved*/}
        <div className="w-full flex justify-center items-center gap-10 flex-wrap py-5 border-t border-secondary">
          <p className="text-sm text-whiteGrey">© {new Date().getFullYear()} COMPLICE. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
