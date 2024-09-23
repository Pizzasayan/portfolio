import rustAvatar from "@/assets/images/rust.png";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-smile.png";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment } from "react";

import Image from "next/image";

const testimonials = [
  {
    name: "Manon D.",
    position: "Présidente @ Maison",
    text: "Farda est un perfectionniste, il n'arrêtera pas de s'appliquer à la tâche tant que le résultat n'est pas à la hauteur de ses attentes. Accessoirement il fait de très bons cookies, quand il ne travaille pas. Sauf qu'il travaille tout le temps. ",
    avatar: memojiAvatar4,
  },
  {
    name: "Guillaume N.",
    position: "Formatteur @ C2RT",
    text: "Rigoureux et autonome, Farda possède toutes les qualités nécessaires à un bon développeur. Sa passion et sa curiosité pour le développement feront de lui une excellente recrue pour un futur employeur. En plus d'être solide techniquement, sa bonne humeur et son sens de l'initiative feront qu'il s'intégrera très rapidement au sein d'une équipe. Pour conclure, travailler avec lui est un vrai plaisir !",
    avatar: memojiAvatar1,
  },
  {
    name: "Tony D.",
    position: "Coordinateur @ C2RT",
    text: "",
    avatar: memojiAvatar5,
  },
  // {
  //   name: "Théo M.",
  //   position: "Collaborateur @ C2RT",
  //   text: "",
  //   avatar: rustAvatar,
  // },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Savoir faire et savoir vivre"
          title="Témoignages"
          description="« Tenir à l'estime de quelqu'un, c'est l'estimer; et c'est le témoignage le plus délicat qu'on puisse lui donner de son estime. » - Charles Dollfus"
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 rounded-full items-center justify-center flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div className="font-semibold ">{testimonial.name}</div>
                      <div className="text-sm text-white/50">
                        {testimonial.position}
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
