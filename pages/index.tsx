import type { NextPage } from 'next';
import Image from "next/image";
import DefaultLayout from '../components/Layouts/DefaultLayout';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp} from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';

type socialDataType = {
  title: string;
  link: string;
  icon: JSX.Element
}

const socialDatas: socialDataType[] = [
  {
    title: "Facebook",
    link: "https://web.facebook.com/FoveroDigitalTechnologies",
    icon: <FaFacebookF />
  },
  {
    title: "Twitter",
    link: "https://twitter.com/foverodigitech",
    icon: <FaTwitter />
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/foverodigitech",
    icon: <FaInstagram />
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/company/foverodigitech",
    icon: <FaLinkedinIn />
  },
  {
    title: "WhatsApp",
    link: "https://api.whatsapp.com/send?phone=2349028034384&text=Hello,%20I%20would%20like%20to%20make%20enquiries%20about",
    icon: <FaWhatsapp />
  },
]

const Home: NextPage = () => {
  return (
      <DefaultLayout title="Construction in Progress">
        <div className="min-h-[calc(100vh-67px)] h-full px-5 flex flex-col items-center justify-center gap-y-10 text-center pb-10">
        {/* <div className="h-full flex-1 flex flex-col items-center justify-center gap-y-10 text-center"> */}
          <div>
            <h2 className="text-lg text-dark dark:text-white mb-3 tracking-wider">
            HELLO! WE ARE{" "}
            <span className="block text-5xl text-brand font-bold mt-1 dark:text-brand2">
              COMING SOON...
            </span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-light tracking-wider">
            We are building the best website for you with the best technologies.
          </p>
          </div>
        
          
          <Image
            src="/svg/building-website.svg"
            alt="Fovero Digital Technologies is coming soon"
            width={520}
            height={309}
          />
          <div className="inline-flex flex-wrap mx-auto justify-center items-center gap-5 md:gap-10 text-2xl">
            {socialDatas.map(social => <Tooltip title={social.title} placement=
            "top" arrow key={social.title}>
              <a href={social.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-light">{social.icon}</a>
            </Tooltip>)}
          </div>
        </div>
        {/* </div> */}
      </DefaultLayout>
  )
}

export default Home
