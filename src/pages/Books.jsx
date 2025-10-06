import BookCard from '../components/BookCard.jsx';
import BookSearch from '../components/BookSearch.jsx';
import { books } from '../data/books.js';
const Books = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-7 bg-gray-100 w-full">
      <BookSearch />
      <div className="bg-gray-100 w-full  flex flex-wrap justify-center gap-4">
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
    </div>
  );
};
export default Books;
