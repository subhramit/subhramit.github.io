export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center p-8 md:p-0">
      <div className="md:py-96 md:pl-56 max-w-6xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-serif mb-4">Subhramit's Blog</h1>
        <p className="py-3 md:w-1/2 pl-1 font-serif mb-4">
          The aurors are on their way.
        </p>
        <div className="buttons my-4">
          <a href="/about">
            <button className="bg-uno px-3 py-2 rounded-xl text-white hover:text-white hover:bg-tres mx-2">
              Board the train
            </button>
          </a>
        </div>
      </div>
      <div className="mt-8 md:mt-0">
          <img
              src="../../public/window.jpg"
              alt="Blog illustration"
              className="w-32 h-32 md:w-48 md:h-48 object-contain"
          />
      </div>
    </div>
  );
}
