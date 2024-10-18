import Image from "next/image";
import Link from "next/link";

import Logo from "../../images/larger-logo.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import tel from "../../images/tel.png";
import email from "../../images/email.png";

const Footer = () => {
  return (
    <footer className="bg-white h-auto w-full pt-96 px-20 pb-20">
      <div className="row flex flex-row w-full justify-between pb-40">
        <div className="col w-1/2 flex flex-col gap-20">
          <Image src={Logo} alt="logo" height={200} width={550} />
          <p className="text-[32px] text-[#161616]">
            Your Ride to the Stars<br></br>Where every Journey is Out of This
            World
          </p>
          <div className="spacer"></div>
          <div className="socials flex flex-row w-[60%] justify-between">
            <Image src={facebook} alt="facebook" height={100} width={100} />
            <Image src={twitter} alt="twitter" height={100} width={100} />
            <Image src={instagram} alt="instagram" height={100} width={100} />
            <Image src={linkedin} alt="linkedin" height={100} width={100} />
          </div>
        </div>
        <div className="col w-1/2 flex flex-row justify-around [&_p]:text-[#161616] [&_p]:text-[32px]">
          <div className="col flex flex-col gap-10">
            <h1 className="text-[40px] font-semibold">Company</h1>
            <div className="spacer"></div>
            <Link href="#">
              <p>About</p>
            </Link>
            <Link href="#">
              <p>How It Works</p>
            </Link>
            <Link href="#">
              <p>Pricing</p>
            </Link>
            <Link href="#">
              <p>Services</p>
            </Link>
          </div>
          <div className="col flex flex-col gap-10">
            <h1 className="text-[40px] font-semibold">Support</h1>
            <div className="spacer"></div>
            <Link href="#">
              <p>FAQ</p>
            </Link>
            <Link className="flex flex-row w-full items-center gap-5 " href="#">
              <Image src={tel} alt="tel" height={30} width={30} />{" "}
              <p>+63 - 123 456 7890</p>
            </Link>
            <Link className="flex flex-row w-full items-center gap-5" href="#">
              <Image src={email} alt="email" height={24} width={30} />{" "}
              <p>support@spaceexpress.com</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="row border-t-2 border-solid border-[#52145A] w-full mt-10 flex flex-row items-center justify-between">
        <p>© 2024 Space Express, All Rights Reserved</p>
        <div className="flex flex-row items-center">
          <p>Terms & Condition</p> | <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
