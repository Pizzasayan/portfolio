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
    name: "Guillaume N.",
    position: "Formatteur @ C2RT",
    text: "C'est un mec sympa.",
    avatar: memojiAvatar1,
  },
  {
    name: "Théo M.",
    position: "Collaborateur @ C2RT",
    text: "",
    avatar: rustAvatar,
  },
  {
    name: "Tony D.",
    position: "Coordinateur @ C2RT",
    text: "Le serveur du groupe CDA",
    avatar: memojiAvatar5,
  },
  {
    name: "Manon D.",
    position: "Présidente @ Maison",
    text: "Farda devrait travailler moins souvent",
    avatar: memojiAvatar4,
  },
  {
    name: "Eric Ducreux",
    position: "",
    text: "",
    avatar: memojiAvatar1,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Le savoir faire mais aussi le savoir vivre"
          title="Témoignages de collaborateurs"
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
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-white/40">
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
