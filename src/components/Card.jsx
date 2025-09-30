const Card = ({ cardIcon, CardTitle, CardText }) => {
  return (
    <div className="flex flex-col py-6 px-5 items-center rounded-3xl bg-white text-center w-2xs gap-5">
      <span className="rounded-4xl p-5 text-indigo-800 bg-violet-300">{cardIcon}</span>

      <h3 className="text-2xl">{CardTitle}</h3>
      <p className="text-md text-zinc-500">{CardText}</p>
    </div>
  );
};
export default Card;
