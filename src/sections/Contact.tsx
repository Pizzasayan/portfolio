import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-14 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="z-0 relative bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl ">
                Prêt à collaborer ensemble !
              </h2>
              <p className="text-sm md:text-base mt-2">
                Projet de site web ou un poste à pourvoir ? Lancez la conversation et c'est parti.
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-800 w-max inline-flex items-center px-6 h-12 gap-2 rounded-xl border border-gray-900">
                <span className="font-semibold">Me contacter</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
