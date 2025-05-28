import React from 'react';

export default function Contact() {
  return (
    <div className="flex justify-around">
      <div className="main py-96 pl-56 max-w-6xl">
        <div className="text-6xl font-serif">Thanks for taking the journey!</div>
        <div>
          <p className="py-3 w-1/2 pl-1 font-serif">
            Connect with me:
          </p>
          <div className="buttons my-1">
            <a href="mailto: f20200611@pilani.bits-pilani.ac.in">
              <button className="bg-uno px-3 py-2 rounded-xl text-white hover:text-white hover:bg-tres mx-2">Email</button>
            </a>
            <a href="https://www.instagram.com/_neeyl/">
              <button className="bg-uno px-3 py-2 rounded-xl text-white hover:text-white hover:bg-tres mx-2">Instagram</button>
            </a>
            <a href="https://www.linkedin.com/in/subhramit-basu-bhowmick-7636881ba/">
              <button className="bg-uno px-3 py-2 rounded-xl text-white hover:text-white hover:bg-tres mx-2">LinkedIn</button>
            </a>
            <a href="https://www.facebook.com/subhramit.basu/">
              <button className="bg-uno px-3 py-2 rounded-xl text-white hover:text-white hover:bg-tres mx-2">Facebook</button>
            </a>
            <a href="https://www.quora.com/profile/Subhramit-Basu/">
              <button className="bg-uno px-3 py-2 rounded-xl text-white hover:text-white hover:bg-tres mx-2">Quora</button>
            </a>
            <p className="py-3 w-1/2 pl-1 font-serif pt-4">
              Send me an anonymous message:
            </p>
            <a href="https://www.confessout.com/neeyl">
              <button className="bg-uno px-3 py-2 rounded-xl text-white hover:text-white hover:bg-tres mx-2">Confessout</button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <img src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg" className="rounded-full h-80 mr-72" alt="Contact" />
      </div>
    </div>
  );
}