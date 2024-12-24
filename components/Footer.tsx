import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full pt-20 pb-10 h-[60vh]" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to elevate <span className="text-purple">your</span> security posture to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contact me today, and let&apos;s explore how I can help you strengthen your security and achieve your objectives.
        </p>
        <a href="mailto:devama@unmatchedsolutions.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a key={info.id} href={info.link}>
              <div
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <Image src={info.img} alt="icons" width={20} height={20} />
              </div>
            </a>
          ))}
        </div>
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {currentYear} Devam Amin
        </p>

      </div>
    </footer>
  );
};

export default Footer;
