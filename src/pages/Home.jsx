import Card from '../components/Card.jsx';
import { cardData } from '../data/CardData.js';
import Hero from '../components/Hero.jsx';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="w-full">
      <Hero />
      {/* feature section  */}
      <section className="bg-violet-100 w-full flex flex-col items-center justify-center gap-10 py-10 md:flex-col">
        <h2 className="text-xl leading-8 text-nowrap font-medium">Why Choose Book Explorer?</h2>

        {/* cards */}
        <div className="flex flex-col sm:flex-row sm:gap-3 md:gap-6 gap-8">
          {cardData.map((card) => {
            const { title, Icon, desc, id } = card;
            return <Card cardIcon={<Icon size={24} key={id} />} CardTitle={title} CardText={desc} />;
          })}
        </div>
      </section>
      {/* CTA */}
      <section className="bg-violet-100 w-full flex flex-col items-center justify-center gap-3 sm:gap-6 py-10 px-3">
        {/* CTA heading */}

        <h2 className="text-xl leading-8 text-center font-medium">Ready to Start Your Reading Journey</h2>

        {/* CTA text */}
        <p className="text-base  text-center text-zinc-500">
          Join thousands of readers who have found their perfect books with Book Exploder
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button className="bg-indigo-500 cta-btns text-white" onClick={() => navigate('/books')}>
            Explore Books{' '}
          </button>
          <button className="cta-btns border border-zinc-300 shadow-2xl " onClick={() => navigate('/about')}>
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
};
export default Home;
