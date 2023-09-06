import {Button} from "@/components";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute w-full z-10">
      <nav className="flex justify-between items-center max-w-[1440px] mx-auto sm:px-16 px-6 py-4 bg-transparent">
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <Link href='/'>
            <Button title="Sign in" containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]" textStyles="" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
