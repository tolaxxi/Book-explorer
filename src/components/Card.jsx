const Card = ({ cardIcon, CardTitle, CardText }) => {
  return (
    <div className="flex flex-col hover:scale-105 py-6 px-5 items-center justify-center rounded-3xl bg-white text-center w-3xs md:px-2 sm:w-[13rem] gap-5 lg:w-3xs">
      <span className="rounded-4xl p-5 text-indigo-800 bg-violet-300">{cardIcon}</span>

      <h3 className="text-xl text-nowrap md:text-xl">{CardTitle}</h3>
      <p className="text-base md:text-xs  text-zinc-500">{CardText}</p>
    </div>
  );
};
export default Card;
