import windowImage from '/window.jpg';
import { Link } from 'react-router';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center pt-20 md:pt-0 p-8 md:p-0">
      <div className="md:py-80 md:pl-56 max-w-6xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-serif mb-4">Subhramit's Blog</h1>
        <p className="py-3 md:w-1/2 pl-1 font-serif mb-4">
          The aurors are on their way.
        </p>
        <div className="buttons my-4">
          <Link to="/about"
            className="bg-uno px-3 py-2 rounded-xl text-white hover:text-white hover:bg-tres mx-2 inline-block"
          >
            Board the train
          </Link>
        </div>
      </div>
      <div className="mt-8 md:mt-0 flex items-center justify-center md:justify-start">
        <div className="w-8/12 md:w-80 md:h-80 md:mr-48">
          <img
            src={windowImage}
            alt="Window view"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
