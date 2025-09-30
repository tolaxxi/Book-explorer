import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  return (
    <section className="flex h-[80dvh] gap-4 flex-col justify-center items-center text-center w-full">
      <h1 className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text md:text-9xl text-8xl font-extrabold text-transparent animate-bounce">
        Oops!
      </h1>
      <h3 className="font-bold text-xl">404- PAGE NOT FOUND</h3>
      <p className="md:w-md">
        The page you are looking for might have been removed,had its name changed or is temporarily unavailable
      </p>

      <button className="w-70 rounded-3xl text-white bg-indigo-700 py-2" onClick={() => navigate('/')}>
        GO TO HOMEPAGE
      </button>
    </section>
  );
};
export default Error;
