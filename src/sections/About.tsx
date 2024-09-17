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
import ReactIcon from "@/assets/icons/react.svg";
import PhpIcon from "@/assets/icons/php.svg";

import bookCover1 from "@/assets/images/meditations.png";
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
  {
    title: "PHP",
    iconType: PhpIcon,
  },
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
    title: "Dessin",
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
  {
    title: "Manga",
    emoji: "👀",
    left: "15%",
    top: "20%",
  },
  {
    title: "Musique Electro",
    emoji: "🎶",
    left: "0%",
    top: "20%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div id="about" className="container">
        <SectionHeader
          eyebrow="Mes inspirations et mes pinceaux"
          title="Hobbies, Framework et langages"
          description="« Sans un minimum de loisir, pas de travail créateur, par conséquent pas de culture ni de civilisation.» - De Roy Lewis"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Mon guide"
                description="Le dernier best-seller de l'influenceur Marc-Aurèle"
              />
              <div className="w-50 mx-auto mt-2 md:mt-0">
                <Image
                  src={bookCover1}
                  alt="Couverture du livre Méditations de Marc-Aurèle "
                />
              </div>
            </Card>
            <Card className="h-[320px] col-span-3 lg:col-span-2">
              <CardHeader
                title="Mes Outils"
                description="A mettre au service de votre projet"
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
                description="Rien de mieux pour réflechir qu'une petite partie."
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
                className="h-full w-full object-cover object-left-right"
              />
              <div className="absolute top-1/4 left-1/2 -translate-x-1/4 -translate-y-1/5 size-20 rounded-full">
                <div className="size-7 absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="size-7 absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
