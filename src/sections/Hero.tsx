import profileImage from "@/assets/images/portfolio-picture.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div
      id="home"
      className="py-32 md:py-48 lg:py-60 lg:mb-2 relative z-0 overflow-x-clip"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={350}
          rotation={20}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={510}
          rotation={144}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-14 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={580}
          rotation={79}
          shouldOrbit
          orbitDuration="39s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-5 text-blue-100/10" />
        </HeroOrbit>
        <HeroOrbit
          size={300}
          rotation={178}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-10 text-blue-100/30" />
        </HeroOrbit>
        <HeroOrbit
          size={780}
          rotation={-15}
          shouldOrbit
          orbitDuration="45s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-10 text-blue-100/30" />
        </HeroOrbit>
        <HeroOrbit
          size={630}
          rotation={98}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={780}
          rotation={-2}
          shouldOrbit
          orbitDuration="57s"
          shouldSpin
          spinDuration="3s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={690}
          rotation={200}
          shouldOrbit
          orbitDuration="51s"
          shouldSpin
          spinDuration="9s"
        >
          <div className="size-4 bg-white/30 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={750}
          rotation={85}
          shouldOrbit
          orbitDuration="54s"
          shouldSpin
          spinDuration="3s"
        >
          <div className="size-3 bg-white/30 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={420}
          rotation={-59}
          shouldOrbit
          orbitDuration="33s"
          shouldSpin
          spinDuration="6s"
        >
          <div className="size-2 bg-white/30 rounded-full" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={profileImage}
            className="size-[150px] translate-y-3.5"
            alt="Image de Farda"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 z-10 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">En recherche de poste !</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl mdr:text-5xl text-center mt-8 tracking-wide">
            Safari Farda
          </h1>
          <p className=" text-center uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            Concepteur Développeur d'Applications
          </p>
          <p className="mt-3 text-center text-white/60 md:text-lg">
            Concepteur de programmes web et mobile, avec une ceinture noire en
            Soft Skill et un rire contagieux.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="z-20 inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <Link href="#projects" className="font-semibold">
              Voir mon travail
            </Link>
            <ArrowDown className="size-4" />
          </button>
          <Link
            href="#contact"
            className="z-20 inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
            type="button"
          >
            <ArrowDown className="size-4" />
            <span className="font-semibold">Me contacter</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
