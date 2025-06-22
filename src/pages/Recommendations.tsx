import React from 'react';

export default function Recommendations() {
  return (
    <div className="w-full mx-auto my-auto flex-col">
      <div className="text-6xl text-start font-serif font-extralight flex justify-center pt-7 underline decoration-2">Recommendations</div>
      <div className="text-3xl text-start font-serif font-medium pl-60 pt-8 italic max-w-6xl">
        <p>"Look, Simba. Everything the light touches is our kingdom."</p>
      </div>
      <div className="text-xl text-start font-serif pl-62">- Mufasa, The Lion King (1994)</div>
      
      {/* Add your recommendations sections here */}
      <div className="text-3xl text-start font-serif font-bold pl-60 pt-5 underline">Stand-up comics</div>
      {/* Replace with your content */}
      
      <div className="text-3xl text-start font-serif font-bold pl-60 pt-6 underline">Movies</div>
      {/* Replace with your content */}
      
      <div className="text-3xl text-start font-serif font-bold pl-60 pt-6 underline">Disney/DreamWorks Movies</div>
      {/* Replace with your content */}
      
      <div className="text-3xl text-start font-serif font-bold pl-60 pt-6 underline">Series</div>
      {/* Replace with your content */}
      
      <div className="text-3xl text-start font-serif font-bold pl-60 pt-6 underline">Books/Stories</div>
      {/* Replace with your content */}
      
      <div className="text-3xl text-start font-serif font-bold pl-60 pt-6 underline">Podcasts</div>
      {/* Replace with your content */}
    </div>
  );
}
