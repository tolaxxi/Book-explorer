const BookCard = ({ coverUrl, rating, title, author, summary, genre }) => {
  return (
    <div className="border border-zinc-400 w-90">
      <img src={coverUrl} alt={title} />

      <div className="text">
        <div className="">
          <span>{genre}</span>
          <span>{rating}</span>
        </div>
        <div className="">
          <h2>{title}</h2>
          <p>by {author}</p>
          <p>{summary}</p>
        </div>
      </div>
    </div>
  );
};
export default BookCard;
