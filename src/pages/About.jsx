import AboutCard from '../components/AboutCard.jsx';
import { aboutCardData } from '../data/CardData.js';
const About = () => {
  return (
    <section className="text-center w-full">
      <div className="w-full">
        <h1 className="text-4xl font-medium my-5">About Book Explorer</h1>
        <p className="text-zinc-500 ">
          Your gateway to discovering extraordinary books and connecting with fellow readers
        </p>
      </div>
      {/* About card  */}

      <div className="flex flex-col items-center gap-8 px-3 py-10 sm:flex-row justify-center">
        {aboutCardData.map(({ id, title, Icon, desc }) => {
          return <AboutCard key={id} title={title} Icon={<Icon size={24} />} desc={desc} />;
        })}
      </div>
    </section>
  );
};
export default About;
