import displayImage from '/ghibli.png';

export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-center">
                <div className="w-6/12 md:w-64 md:h-64 mx-auto mb-4">
                    <img
                        src={displayImage}
                        className="w-full h-full object-cover rounded-full"
                        alt="Profile picture"
                    />
                </div>
            </div>
            <div className="text-3xl md:text-5xl text-center underline decoration-2 pt-7">About me</div>
            <div className="text-base sm:text-lg md:text-lg font-serif font-medium pt-8 space-y-4">
                <p>Hi, I'm Subhramit. I hail from Alipurduar, West Bengal. I'm currently an undergraduate student at BITS Pilani, India, majoring in Computer Science and Biological Sciences. In simpler words, I study living and non-living systems, and might continue to do so for a living. I am also currently heading one of the Robotics teams of my university. Before anything else, I am a huge fan of Bob Ross, Sylvia Plath, Virginia Woolf and Robin Williams.</p>
                <p>My hobbies include journalling, watching stand-up comedy, reading poetry and philosophical quotes, watching sunsets and staring at the night sky. I love Disney movies. Whenever I'm able to carve out time, I am also an avid reader of Psychology and Cognitive Sciences. I happen to be an INFJ on the Myers-Briggs scale. Back in my pre-engineering days, I used to nerd about Organic Chemistry.</p>
                <p>During his days at art school, Kenny Sebastian realized that there are two kinds of artists in the world - the ones who paint for themselves and the ones who paint for others to experience it. I believe that all of life is art, and I have kept (and will keep) a good part of my life painting for myself. I was in search of a creative outlet so that I could live the life of the other artist, and hence I made this blog page. Apart from that, it also carried a good excuse for me to learn website development, so here we are.</p>
            </div>
        </div>
    );
}
