import windowImage from '/window.jpg';

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center p-8 md:p-0">
      <div className="md:py-80 px-16 md:pl-56 md:pr-0 max-w-6xl text-center md:text-left">
        <div className="text-3xl md:text-5xl font-serif mb-4">Thanks for taking the journey!</div>
        <div>
          <p className="py-3 md:w-1/2 pl-1 font-serif">
            Connect with me:
          </p>
          <div className="buttons my-1">
            <a href="mailto: f20200611@pilani.bits-pilani.ac.in">
              <button
                className="bg-uno px-3 py-2 rounded-xl text-white hover:text-white hover:bg-tres mx-2 my-1 cursor-pointer">Email
              </button>
            </a>
            <a href="https://www.instagram.com/_neeyl/">
              <button
                className="bg-uno px-3 py-2 rounded-xl text-white hover:text-white hover:bg-tres mx-2 my-1 cursor-pointer">Instagram
              </button>
            </a>
            <a href="https://github.com/subhramit">
              <button
                className="bg-uno px-3 py-2 rounded-xl text-white hover:text-white hover:bg-tres mx-2 my-1 cursor-pointer">GitHub
              </button>
            </a>
            <a href="https://www.linkedin.com/in/subhramit-basu/">
              <button
                className="bg-uno px-3 py-2 rounded-xl text-white hover:text-white hover:bg-tres mx-2 my-1 cursor-pointer">LinkedIn
              </button>
            </a>
            <a href="https://www.facebook.com/subhramit.basu/">
              <button
                className="bg-uno px-3 py-2 rounded-xl text-white hover:text-white hover:bg-tres mx-2 my-1 cursor-pointer">Facebook
              </button>
            </a>
            <a href="https://www.quora.com/profile/Subhramit-Basu/">
              <button
                className="bg-uno px-3 py-2 rounded-xl text-white hover:text-white hover:bg-tres mx-2 my-1 cursor-pointer">Quora
              </button>
            </a>
            <p className="py-3 md:w-1/2 pl-1 font-serif pt-4">
              Send me an anonymous message:
            </p>
            <a href="https://www.confessout.com/neeyl">
              <button
                className="bg-uno px-3 py-2 rounded-xl text-white hover:text-white hover:bg-tres mx-2 my-1 cursor-pointer">Confessout
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-0 flex items-center justify-center md:justify-start">
        <div className="w-8/12 md:w-80 md:h-80 md:mr-72">
          <img src={windowImage} className="w-full h-full rounded-full object-cover" alt="Contact" />
        </div>
      </div>
    </div>
  );
}
