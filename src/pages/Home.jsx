import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  function navigateToBooks() {
    navigate('/books');
  }
  return (
    <main>
      <section
        className="w-full text-center flex justify-center items-center flex-col bg-linear-to-br gap-5
      r from-pink-500 to-blue-500 h-[80dvh]"
      >
        <h1 className="text-7xl text-teal-50 w-[50%]">Discover Your Next Great Read</h1>
        <p className="w-[50%] text-xl text-teal-50">
          Explore thousands of books, read reviews, and find your perfect literary companion in our curated collection.
          Browse Books
        </p>
        <button className="rounded-3xl bg-indigo-500 px-6 py-2 text-xl text-teal-50 " onClick={navigateToBooks}>
          Browse Books
        </button>
      </section>
    </main>
  );
};
export default Home;
