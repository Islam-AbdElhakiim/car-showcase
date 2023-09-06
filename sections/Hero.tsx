"use client";

import Image from "next/image";
import {Button} from "@/components";
import Link from "next/link";

const Hero = () => {
  const handleScroll = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    let target = e.currentTarget.href?.replace(/.*\#/, "");
    document.getElementById(target)?.scrollIntoView({
      behavior:"smooth"
    })
  }
  return (
    <section className="hero ">
      <div className="flex-1 pt-36 padding-x ">
        <h1 className="hero__title">
          Find, book, rent a car— quick and super easy!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <Link href='#explore' onClick={handleScroll}>
        <Button
          title="Explore Cars"
          type={"button"}
          containerStyles="bg-primary-blue mt-10 text-white"
          clickHandle={() => console.log("clicked")}
          textStyles=""
        />
        </Link>
      </div>
      <div className="w-full relative justify-end hidden lg:flex xl:flex-[1.5] xl:h-screen ">
        <div className="relative xl:w-full w-[90%] h-[590px] xl:h-full">
          <Image
            src={"/hero.png"}
            alt="Hero Image"
            fill
            className="object-contain z-10"
          />
        </div>
        <div className="absolute xl:h-screen md:h-[590px] h-[350px] w-[100vw] md:-top-[12vh] top-[12vh] xl:-right-[53vw] -right-[30vw]">
          <Image
            src={"/hero-bg.png"}
            fill
            alt="Hero background Image"
            className=" object-fill"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
