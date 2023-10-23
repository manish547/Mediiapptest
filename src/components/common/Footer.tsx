import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const socialMediaiconList = [
  { index: 0, image: "instagram", linkTo: "instagram.com" },
  { index: 0, image: "linkedin", linkTo: "linkedin.com" },
  { index: 0, image: "facebook", linkTo: "facebook.com" },
  { index: 0, image: "twitter", linkTo: "twitter.com" },
];
function Footer() {
  const [emailAddress, setEmailAddress] = useState("");

  return (
    <footer className="bg-gradient-to-br from-[#419886] to-[#004842] p-4 px-14">
      <div className="md:container pt-4 mx-auto flex items-center justify-center flex-col  ">
        {/* main div */}
        <div className="flex flex-wrap items-center xl:px-20 2xl:px-0 justify-between w-full py-4 border-b opacity-100 border-[#ABAFC7] ">
          <div className="flex flex-wrap justify-between w-full gap-5 h-full text-white py-4">
            <div className="flex flex-col justify-between">
              <Link href="/" className="flex items-center px-2 py-4">
                <Image
                  src="/images/icons/medii-white.svg"
                  height="100"
                  width="100"
                  alt="medii-logo"
                  className="h-16 -ml-6 w-44"
                />
              </Link>
              {/* links */}
              <div className="flex w-full gap-11 pb-8 2xl:pb-0">
                {socialMediaiconList.map((icon, index) => {
                  const { image, linkTo } = icon;
                  return (
                    <a
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://${linkTo ?? ""}`}
                    >
                      <Image
                        key={index}
                        src={`/images/icons/social-media/${image ?? ""}.svg`}
                        height="14"
                        width="14"
                        alt="medii-logo"
                        className="w-4 h-4 hover:cursor-pointer"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
            {/* contact info */}
            <div className="flex flex-col  mt-6 gap-7 md:gap-8  md:mt-auto md:flex-row">
              <div className="w-full">
                <h3 className="text-lg font-bold capitalize font-Nunito ">contact info</h3>
                <div className="flex flex-col gap-2 pt-3 text-sm leading-6 md:pt-10 font-Quicksand">
                  <div className="flex gap-2">
                    <span className="block text-[#D9CEA4] capitalize">
                      address:
                    </span>
                    <span className="flex-wrap block">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iste, cupiditate.
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="block text-[#D9CEA4] capitalize">
                      Phone:
                    </span>
                    <span className="flex-wrap block">
                      {" "}
                      +44 (0) 333 577 3800
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="block text-[#D9CEA4] capitalize">
                      Email:
                    </span>
                    <span className="flex-wrap block">
                      {" "}
                      info@mediihealth.com
                    </span>
                  </div>
                </div>
              </div>
              {/* Quick links */}
              <div className="w-full ">
                <h3 className="text-lg font-bold capitalize font-Nunito ">Quick Links</h3>
                <div className="flex flex-row  items-start gap-5 pt-3 text-sm leading-6 sm:items-start md:flex-row md:gap-2 md:pt-10 font-Quicksand">
                  <div className="flex flex-col gap-2">
                    <Link href="/">
                      <span className="block capitalize">home</span>
                    </Link>
                    <Link href="/about">
                      <span className="block capitalize">about</span>
                    </Link>
                    <Link href="/contact">
                      <span className="block capitalize">Privacy & policy</span>
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link href="/contact">
                      <span className="block capitalize">Contact</span>
                    </Link>
                    <Link href="/resources">
                      <span className="block capitalize">Blog</span>
                    </Link>
                    <Link href="/contact">
                      <span className="block capitalize">Term & Condition</span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* News sletetr */}
              <div className="w-full">
                <h3 className="text-lg font-bold capitalize font-Nunito">Newsletter</h3>
                <form
                  action=""
                  onSubmit={(e) => {
                    e.preventDefault();
                    //
                    emailAddress;
                  }}
                >
                  <div className="flex flex-col gap-4 text-sm leading-6 pt-4 w-[70vw] md:pt-10 sm:w-[26vw] lg:w-72">
                    <input
                      className="px-6 py-2 text-base font-medium text-black rounded-full outline-none placeholder:font-Nunito "
                      type="text"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      placeholder="Enter Your Email"
                      required
                    />
                    <button
                      type="submit"
                      className="flex gap-3 shrink-0 justify-center items-center border-none py-2 px-16 rounded-full text-base font-bold text-black bg-gradient-to-r from-[#F4B723] to-[#FFD669] shadow-[-10px_25px_50px_rgba(255, 115, 106, 0.301961)] font-Quicksand"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <span className="text-sm font-medium font-Quicksand text-[#E9E9E9] leading-6 text-center pt-3 ">© 2023 MEDii Health . All Rights Reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
