const AboutCard = ({ Icon, title, desc }) => {
  return (
    <div className="flex flex-col items-start rounded-3xl bg-white text-center border border-zinc-300 py-10 gap-3 px-5 w-3xs sm:w-2xs md:w-md">
      <span className="rounded-md py-2 px-auto text-indigo-800 bg-violet-300 px-2">{Icon}</span>
      <h2 className="text-2xl font-medium text-nowrap">{title}</h2>
      <p className="text-start text-zinc-400 sm:text-md">{desc}</p>
    </div>
  );
};
export default AboutCard;
