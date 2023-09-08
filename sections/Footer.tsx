import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className=" flex flex-col text-black-100 mt-5 border-t border-gray-100">
      {/* section 1  */}
      <div className="flex max-md:flex-col max-md:items-center flex-wrap sm:px-16 px-6 py-10">
        <div className="flex flex-col items-start justify-start gap-6">
          <Image src="/logo.svg" alt="Logo Image" width={118} height={18} className='object-contain' />
          <p className='text-base text-gray-700'>
          Carhub 2023 <br />
          All Rights Reserved &copy;
        </p>
        </div>

        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
            {footerLinks.map(category => (
                <div key={category.title} className="footer__link">
                <h3 className="font-bold">{category.title}</h3>
                <div className="flex flex-col gap-5 ">
                  {category.links.map((link) => (
                    <Link
                      key={link.title}
                      href={link.url}
                      className="text-gray-500"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* section 2  */}
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 max-md:justify-center '>
      <p>@2023 CarHub. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
