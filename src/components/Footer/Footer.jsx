import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { BiSolidEnvelope } from "react-icons/bi";
import Link from "next/link";

const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },

  { name: "Contact" },
];
const social = [
  {
    name: "Email",
    icon: <BiSolidEnvelope />,
    url: "mailto:syedhasanmohammad@gmail.com",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    url: "https://github.com/sayid-hasan",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    url: "https://www.linkedin.com/in/mohammed-syed-hasan",
  },
  {
    name: "Facebook",
    icon: <AiFillFacebook />,
    url: "https://www.facebook.com/sayid.hasan.560",
  },
];

const Footer = () => {
  return (
    <div
      id="footer"
      className="mt-8 md:mt-16 pb-5 md:pb-10 bg-black max-w-7xl mx-auto font-oswald"
    >
      <div className="max-w-7xl mx-auto">
        <div className="nav__link__container flex flex-col md:flex-row justify-center items-center gap-5 ">
          {menu.map((list, ind) => (
            <Link
              key={ind}
              activeClass="active"
              className="tab__item relative px-3 py-5 font-semibold text-lg cursor-pointer transition-all duration-500 hover:text-[#8750fd] "
              href={`/#${list.name.toLowerCase()}`}

              // onClick={() => setShowDrawer(!showDrawer)}
            >
              {list.name}
            </Link>
          ))}
        </div>
        {/* social */}
        <div className="flex justify-center">
          <div className="flex justify-center gap-5  md:justify-start items-center ">
            {social.map((item, ind) => (
              <Link
                key={ind}
                href={item.url}
                className="w-12 h-12 flex justify-center items-center hover:text-3xl transition-all duration-300 hover:w-fit aspect-square text-2xl text-white"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="copyright__container text-center mt-6">
          <h3 className="mb-4 text-base font-medium text-[#f6f3fc]">
            Copyright &copy; All rights reserved - | 2024
          </h3>
          <p className="text__muted tracking-[3px]">
            Build with passion by Sayid Hasan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
