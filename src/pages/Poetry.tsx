export default function Poetry() {
  return (
    <div className="w-full mx-auto my-auto flex-col">
      <div className="flex justify-center pt-3">
        <img src="https://images.pexels.com/photos/3328154/pexels-photo-3328154.jpeg" className="max-w-screen-2xl object-cover w-4/12 rounded-full" alt="Poetry" />
      </div>
      <div className="text-6xl text-start font-serif font-extralight pl-60 pt-7 underline decoration-2">My thoughts on poetry</div>
      <div className="text-xl text-start font-serif font-medium pl-62 pt-4 italic max-w-6xl">
        <p>"And medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. <br />
          But poetry, beauty, romance, love - these are what we stay alive for."</p>
      </div>
      <div className="text-xl text-start font-serif pl-62">- John Keating, Dead Poets Society (1989)</div>
      
      {/* Add your poetry content here */}
      <div className="text-5xl text-start font-serif font-extralight pl-60 pt-6">Madness</div>
      <div className="text-xl text-start font-serif font-medium pl-62 pt-2 italic">
        {/* Replace with your poetry content */}
        <p>A mad world it is, perhaps...</p>
      </div>
      
      <div className="text-5xl text-start font-serif font-extralight pl-60 pt-6">Storms</div>
      <div className="text-xl text-start font-serif font-medium pl-62 pt-2 italic">
        {/* Replace with your poetry content */}
        <p>Oh, haven't you wondered...</p>
      </div>
    </div>
  );
}
