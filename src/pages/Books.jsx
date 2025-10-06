import BookCard from '../components/BookCard.jsx';
import { books } from '../data/books.js';
const Books = () => {
  return (
    <div className="bg-gray-100 w-full p-7 flex flex-wrap justify-center gap-4">
      {books.map((book) => {
        const { id, coverUrl, rating, title, author, summary, genre } = book;
        return (
          <BookCard
            key={id}
            coverUrl={coverUrl}
            rating={rating}
            author={author}
            summary={summary}
            genre={genre}
            title={title}
          />
        );
      })}
    </div>
  );
};
export default Books;
