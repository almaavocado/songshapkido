import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import logo from "../assets/hapkido-logo.png";

function Footer() {
  const iconsTab = [
    { icon: <FaInstagram />, link: 'https://www.instagram.com/songshapkidowestla' },
    { icon: <AiFillYoutube />, link: 'https://youtube.com/@SongsHapkidoWLA?si=Tiu2iKtN-pjdvIYd' },
    { icon: <FaFacebookF />, link: 'https://www.facebook.com/profile.php?id=61552570045697&mibextid=LQQJ4d' },
    
  ];

  return (
    <footer className="bg-slate-800 py-4 sm:py-8 md:py-12">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <img
          src={logo}
          alt="footer_logo"
          className="w-16 sm:w-20 md:w-24 mb-4"
        />
        <p className="text-xs sm:text-sm font-medium text-white text-center ">
          4354 Sepulveda Blvd, Culver City, CA 90230
        </p>
        <p className="text-xs sm:text-sm font-medium text-white text-center mb-4">
          (310)-391-1714
        </p>
        <div className="flex gap-4 justify-center">
          {iconsTab.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl bg-slate-300 p-2 rounded-full hover:bg-red-800 hover:text-white transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="text-xs sm:text-sm font-medium text-white text-center mt-4">
          Privacy Policy | © {new Date().getFullYear()} Song's Hapkido West Los Angeles <br />
          Created by{" "}
          <a
            href="https://almaalvarado.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-100 hover:text-red-800 underline"
          >
            Alma Alvarado
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
