import mugenLandingPage from "@/assets/images/mugen-landing-page.png";
import bac28LandingPage from "@/assets/images/bac28.png";
import godotLandingPage from "@/assets/images/godot-landing-page.png";
import { Card } from "@/components/Card";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";
const portfolioProjects = [
  {
    company: "CDA",
    year: "2024",
    title: "Redesign d'un travaux pratique",
    results: [
      { title: "Amélioration esthétique" },
      { title: "Lisibilité augmentée" },
      { title: "Etude de design" },
    ],
    link: "https://cda-app.alwaysdata.net/mugen/",
    image: mugenLandingPage,
  },
  {
    company: "Godot, projet personnel",
    year: "2024",
    title: "Jeux mobile avec le moteur Godot",
    results: [
      { title: "Utilisation du podomètre" },
      { title: "Gamification d'une application de santé" },
      { title: "Design, Architecture, et conception de l'application" },
    ],
    link: "https://i.giphy.com/JJLc5PUVwnOT15Mq13.webp",
    image: godotLandingPage,
  },
  {
    company: "CDA (WIP)",
    year: "2024",
    title: "Application quizz pour lycéens",
    results: [
      { title: "Designer sur Figma" },
      { title: "Utilisation de Ionic,Angular.." },
      { title: "WIP" },
    ],
    link: "https://cdn.pixabay.com/animation/2023/07/19/01/41/01-41-18-281_512.gif",
    image: bac28LandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div id="projects" className="container">
        <SectionHeader
          eyebrow="Travaux Pratiques"
          title="Réalisations"
          description="Designer sans surchage"
        />
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 200}px`
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 gap-2 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm text-white/50 md:text-base">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link} target="_blank">
                    <button
                      className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold
                    inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6"
                    >
                      <span>Visiter le site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
