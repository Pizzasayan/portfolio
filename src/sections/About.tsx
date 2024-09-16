"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import CssIcon from "@/assets/icons/css3.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import SymfonyIcon from "@/assets/icons/symfony.svg";
import JavaIcon from "@/assets/icons/java.svg";
import SpringIcon from "@/assets/icons/spring.svg";
import AngularIcon from "@/assets/icons/angular.svg";
import IonicIcon from "@/assets/icons/ionic.svg";
import ReactIcon from "@/assets/icons/react.svg";

import bookCover1 from "@/assets/images/meditations.png";
import bookCover2 from "@/assets/images/musashi.png";
import bookCover3 from "@/assets/images/infinitegame.png";
import smileMemoji from "@/assets/images/smiley-momoji.png";
import mapImage from "@/assets/images/map.png";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  // {
  //   title: "PHP",
  //   iconType: PhpIcon,
  // },
  {
    title: "Symfony",
    iconType: SymfonyIcon,
  },
  {
    title: "Java",
    iconType: JavaIcon,
  },
  {
    title: "Springboot",
    iconType: SpringIcon,
  },
  {
    title: "Angular",
    iconType: AngularIcon,
  },
  {
    title: "Ionic",
    iconType: IonicIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GitHubIcon,
  },
];

const hobbies = [
  {
    title: "Peinture",
    emoji: "✏",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },
  {
    title: "Lecture",
    emoji: "📚",
    left: "10%",
    top: "35%",
  },
  {
    title: "Chats",
    emoji: "😽",
    left: "70%",
    top: "45%",
  },
  {
    title: "Tennis",
    emoji: "🎾",
    left: "45%",
    top: "50%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="A propos de moi"
          title="Mes passions et hobbies"
          description="Ce qui m'attire et que j'aime partager"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Mes lectures"
                description="Des livres qui la vision des choses"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image
                  src={bookCover1}
                  alt="Couverture du livre Méditations de Marc-Aurèle "
                />
              </div>
            </Card>
            <Card className="h-[320px] col-span-3 lg:col-span-2">
              <CardHeader
                title="Mes Outils"
                description="Ce que j'utilise, ce que je cherche à approndir, et ce que je
                compte parfaire."
                className=""
              />
              <ToolBoxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:35s]"
              />
              <ToolBoxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:25s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Développeur mais aussi.."
                description="Mes intêrets et passions qui me font sourire."
                className="pt-6 px-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Plan d'Agen"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="Emoji de Farda"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
