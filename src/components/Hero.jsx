import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="w-full text-center flex justify-center items-center flex-col bg-linear-to-br gap-5
      r from-pink-500 to-blue-500 h-dvh py-10"
    >
      <h1 className="text-6xl md:text-7xl max-w-2xl m text-teal-50 ">Discover Your Next Great Read</h1>
      <p className=" text-lg md:text-xl text-teal-50">
        Explore thousands of books, read reviews, and find your perfect literary companion in our curated collection.
        Browse Books
      </p>
      <button
        className="rounded-3xl bg-indigo-500 px-6 py-2 md:text-xl text-sm  text-teal-50 "
        onClick={() => navigate('/books')}
      >
        Browse Books
      </button>
    </section>
  );
};
export default Hero;
