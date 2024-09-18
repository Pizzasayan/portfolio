import ArrowIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/farda-safari-161330313/"
  },
  // {
  //   title: "Instagram",
  //   href: "#"
  // }
]

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="-z-10 absolute h-[500px] w-[100%] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(80%_80%_at_bottom_center,black,transparent)]"></div>
      <div className="container pb-8">
        <div className="border-t border-white/15 py-6 text-sm flex gap-8 flex-col md:flex-row md:justify-between items-center">
          <div className="text-white/40">&copy; 2024. Safari Farda - Tous droits réservés.
          </div>

        <nav className="flex flex-col md:flex-row items-center gap-8">
          {footerLinks.map(link => (
            <Link href={link.href} key={link.title} className="inline-flex items-center gap-1.5">
              <span className="font-semibold">{link.title}</span>
              <ArrowIcon className="size-4" />
            </Link>
          ))}
        </nav>
        </div>
      </div>
    </footer>
  )

};
