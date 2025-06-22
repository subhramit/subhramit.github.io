import displayImage from '/neil.jpg';

export default function About() {
  return (
      <div className="w-full mx-auto my-auto flex-col">
          <div className="flex justify-center pt-5">
              <img
                  src={displayImage}
                  className="max-w-screen-2xl object-cover w-2/12 rounded-full"
                  alt="Profile picture"
              />
          </div>
          <div className="text-5xl text-start flex justify-center pt-7 underline decoration-2">About me</div>
          <div className="text-xl text-start font-serif font-medium pl-72 pt-14 pr-72">
              <p>Hi, I'm Subhramit. I hail from Alipurduar, West Bengal. I'm currently an undergraduate student at BITS Pilani, India, majoring in Computer Science and Biological Sciences. In simpler words, I study living and non-living systems, and might continue to do so for a living. I am also currently heading one of the Robotics teams of my university. Before anything else, I am a huge fan of Richard P. Feynman, Bob Ross and Robin Williams.</p>
          </div>
          <div className="text-xl text-start font-serif font-medium pl-72 pt-4 pr-72">
              <p>My hobbies include journalling, watching stand-up comedy, reading poetry and philosophical quotes, watching sunsets and staring at the night sky. I love Disney movies. Whenever I'm able to carve out time, I am also an avid reader of Psychology and Cognitive Sciences. I happen to be an INFJ on the Myers-Briggs scale. Back in my pre-engineering days, I used to nerd about Organic Chemistry.</p>
          </div>
          <div className="text-xl text-start font-serif font-medium pl-72 pt-4 pr-72 pb-32">
              <p>During his days at art school, Kenny Sebastian realized that there are two kinds of artists in the world - the ones who paint for themselves and the ones who paint for others to experience it. I believe that all of life is art, and I have kept (and will keep) a good part of my life painting for myself. I was in search of a creative outlet so that I could live the life of the other artist, and hence I made this blog page. Apart from that, it also carried a good excuse for me to learn website development, so here we are.</p>
          </div>
      </div>
  );
}
