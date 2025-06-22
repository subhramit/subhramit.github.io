import windowImage from '/window.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row justify-around items-center pt-20 md:pt-0 p-8 md:p-0">
            <div className="md:py-96 md:pl-56 md:pr-0 max-w-6xl text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-serif mb-4">Subhramit's Blog</h1>
                <p className="py-3 md:w-1/2 pl-1 font-serif mb-4">
                    The aurors are on their way.
                </p>
                <div className="buttons my-4">
                    <Link to="/about">
                        <button className="bg-uno px-3 py-2 rounded-xl text-white hover:text-white hover:bg-tres mx-2">
                            Board the train
                        </button>
                    </Link>
                </div>
            </div>
            <div className="mt-8 md:mt-0 flex items-center">
                <img
                    src={windowImage}
                    alt="Window view"
                    className="rounded-full h-32 md:h-80 md:mr-48 object-cover"
                />
            </div>
        </div>
    );
}
