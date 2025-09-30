import Card from '../components/Card.jsx';
import { cardData } from '../data/CardData.js';
import Hero from '../components/Hero.jsx';

const Home = () => {
  return (
    <main>
      <Hero />
      {/* feature section  */}
      <section className="bg-violet-100 w-full flex flex-col items-center justify-center gap-10 py-10 md:flex-col">
        <h2 className="text-xl font-medium">Why Choose Book Explorer?</h2>

        {/* cards */}
        <div className="flex flex-col md:flex-row gap-10">
          {cardData.map((card) => {
            const { title, Icon, desc, id } = card;
            return <Card cardIcon={<Icon size={24} key={id} />} CardTitle={title} CardText={desc} />;
          })}
        </div>
      </section>
    </main>
  );
};
export default Home;
