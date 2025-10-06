import { FaStar } from 'react-icons/fa';

const BookCard = ({ coverUrl, rating, title, author, summary, genre }) => {
  return (
    <div className="bg-white p-3.5 flex flex-col gap-4 w-100 rounded-2xl overflow-hidden">
      <img src={coverUrl} alt={title} className="w-full h-60 bg-cover bg-center bg-no-repeat rounded-t-xl" />

      <div className="flex flex-col gap-2  ">
        <div className="flex items-center w-full">
          <span className="bg-zinc-200 text-xs font-medium text-zinc-600 rounded-2xl px-3 py-1 mr-2.5 ">{genre}</span>
          <span className="flex items-center text-xs justify-between w-9">
            <FaStar color="gold" size={12} />
            {rating}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-medium hover:text-indigo-600"> {title}</h2>
          <p className="text-sm text-zinc-400 ">by {author}</p>
          <p className="text-xs text-zinc-500 ">{summary}</p>
        </div>
      </div>
      <button className="w-full rounded-xl text-zinc-500 text-sm py-2 bg-white border border-zinc-300">
        View Details
      </button>
    </div>
  );
};
export default BookCard;
