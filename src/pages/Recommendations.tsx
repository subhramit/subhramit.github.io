import tomAndSummerImage from '/tomAndSummer.jpg';
import braveImage from '/brave.jpg';
import youStartedItImage from '/youStartedIt.png';

export default function Recommendations() {
    return (
        <div className="max-w-8xl mx-auto px-4 py-8">
            <div className="text-4xl md:text-6xl text-center font-serif font-extralight underline decoration-2 pt-7">
                Recommendations
            </div>

            <div className="text-2xl md:text-3xl text-start font-serif font-medium md:pl-60 pt-8 italic max-w-6xl">
                <p>"Look, Simba. Everything the light touches..."</p>
            </div>
            <div className="text-lg md:text-xl text-start font-serif md:pl-62">
                - Mufasa, The Lion King (1994)
            </div>

            <div className="text-2xl md:text-3xl text-start font-serif font-extralight md:pl-60 pt-7">
                I write about my favourites here.
            </div>

            {/* Stand-up Comics Section */}
            <div className="text-2xl md:text-3xl text-start font-serif font-bold md:pl-60 pt-5 underline">
                Stand-up comics
            </div>

            <div className="text-lg md:text-xl text-start font-serif font-extralight md:pl-60 md:pr-72 pt-5 italic">
                <p>"Dear Sad, look on the bright side..."</p>
            </div>
            <div className="text-lg md:text-xl text-start font-serif font-extralight md:pl-60 md:pr-72">
                <p>-Kanan Gill, April 2020</p>
            </div>

            <div className="text-xl md:text-2xl text-start font-serif font-medium md:pl-60 pt-2">Indian:</div>
            <div className="text-lg md:text-xl text-start font-serif font-medium md:pl-60 md:pr-60">
                <p>
                    <strong>1. Srijan Kaushik</strong><br />
                    <strong>2. Sumit Anand</strong><br />
                    <strong>3. Abhishek Upmanyu</strong><br />
                    <strong>4. Kumar Varun</strong><br />
                    <strong>5. Daniel Fernandes</strong><br />
                    <strong>6. Karunesh Talwar</strong><br />
                    <strong>7. Mohd Suhel</strong><br />
                </p>
            </div>

            <div className="text-xl md:text-2xl text-start font-serif font-medium md:pl-60 pt-2">Non-Indian:</div>
            <div className="text-lg md:text-xl text-start font-serif font-medium md:pl-60 md:pr-60">
                <p>
                    <strong>1. Ricky Gervais</strong><br />
                    <strong>2. Zach Star</strong> (not a professional comedian...)<br />
                    <strong>3. Jimmy Carr</strong><br />
                    <strong>4. Trevor Noah</strong> (Madhav and Rachit...)<br />
                    <strong>5. Matt Rife</strong>
                </p>
            </div>

            <div className="text-lg md:text-xl text-start font-serif font-medium md:pl-60 pt-4 md:pr-60">
                <p>Here's a <a href="#" className="hover:text-blue-600 text-pink-600">link</a> to a short stand-up clip by Srijan Kaushik.<br />
                    Here's <a href="#" className="hover:text-blue-600 text-pink-600">one</a> by Sumit Anand.<br />
                    I'm not including any by Abhishek Upmanyu since he's a common favourite...<br />
                    [Additional links and descriptions...]
                </p>
            </div>

            <div className="text-lg md:text-xl text-start font-serif font-medium md:pl-60 md:pr-60">
                <p>
                    <br />
                    <strong><u>Side note</u>:</strong> I also love skits by <a href="#" className="hover:text-blue-600 text-pink-600">Awkward Puppets</a>,
                    <a href="#" className="hover:text-blue-600 text-pink-600"> AGC Andy</a> (most of his content is on Instagram),
                    and <a href="#" className="hover:text-blue-600 text-pink-600"> Key and Peele</a>.
                </p>
            </div>

            {/* Movies Section */}
            <div className="text-2xl md:text-3xl text-start font-serif font-bold md:pl-60 pt-5 underline">
                Movies
            </div>

            <div className="flex justify-center pt-4">
                <img
                    src={tomAndSummerImage}
                    className="max-w-screen-3xl object-cover w-4/12 rounded-2xl"
                    alt="500 Days of Summer"
                />
            </div>

            <div className="text-lg md:text-xl text-start font-serif font-medium md:pl-60 pt-8 md:pr-60">
                <p>
                    <strong>1. 500 Days of Summer</strong><br />
                    <strong>2. Twelve Angry Men</strong> (Thanks to Kaustab for recommending)<br />
                    <strong>3. The Shawshank Redemption</strong><br />
                    <strong>4. Eternal Sunshine of the Spotless Mind</strong> (Thanks to Radhika...)<br />
                    <strong>5. Sully</strong><br />
                    <strong>6. Before We Go</strong><br />
                    <strong>7. The Big Short</strong><br />
                    <strong>8. The End of the Tour</strong><br />
                    <strong>9. Begin Again</strong><br />
                    <strong>10. Groundhog Day</strong><br />
                    <strong>11. Skyfall</strong><br />
                    <strong>12. Airplane!</strong> - if you're just looking for fun...
                </p>
            </div>

            <div className="text-lg md:text-xl text-start font-serif font-extralight md:pl-60 md:pr-72 pt-5 italic">
                <p>"We wear our scarves just like a noose<br />
                    But not 'cause we want eternal sleep<br />
                    And though our parts are slightly used<br />
                    New ones are slave labor you can keep"
                </p>
            </div>

            <div className="text-lg md:text-xl text-start font-serif font-medium md:pl-60 pt-4 md:pr-72">
                <p>I remember reading about the theme of 500 Days of Summer when I was going through one of my worst breakups...<br />
                    <br />
                    I feel every Tom has had a Summer and every Summer has had a Tom at some point in their lives...</p>
            </div>

            {/* Disney/DreamWorks Movies Section */}
            <div className="text-2xl md:text-3xl text-start font-serif font-bold md:pl-60 pt-6 underline">
                Disney/DreamWorks Movies
            </div>

            <div className="flex justify-center pt-4">
                <img
                    src={braveImage}
                    className="max-w-screen-3xl object-cover w-4/12 rounded-2xl"
                    alt="Brave"
                />
            </div>

            <div className="text-lg md:text-xl text-start font-serif font-medium md:pl-60 pt-6 md:pr-60">
                <p>
                    <strong>1. Brave</strong><br />
                    <strong>2. Zootopia</strong><br />
                    <strong>3. Soul</strong><br />
                    <strong>4. Penguins of Madagascar</strong><br />
                    <strong>5. Inside Out</strong> (Thanks to Radhika for recommending)
                </p>
            </div>

            <div className="text-lg md:text-xl text-start font-serif font-extralight md:pl-60 md:pr-72 pt-5 italic">
                <p>"But every once in a while, there's a day when I don't have to be a princess..."</p>
            </div>

            <div className="text-lg md:text-xl text-start font-serif font-medium md:pl-60 pt-4 md:pr-72">
                <p>Brave is and always will be my personal favourite. The opening monologue by Merida about fate gives me chills...<br />
                    <br />
                    Soul is another movie that I adore a lot...</p>
            </div>

            {/* Series Section */}
            <div className="text-2xl md:text-3xl text-start font-serif font-bold md:pl-60 pt-6 underline">
                Series
            </div>

            <div className="text-lg md:text-xl text-start font-serif font-medium md:pl-60 pt-2 md:pr-60">
                <p>
                    <strong>1. BoJack Horseman</strong><br />
                    <strong>2. Dark</strong><br />
                    <strong>3. Blackadder</strong><br />
                    <strong>4. Sherlock</strong><br />
                    <strong>5. Gravity Falls</strong> - Why did they have to end it so soon? :(<br />
                    <strong>6. 13 Reasons Why (Season 1 only)</strong>
                </p>
            </div>

            <div className="text-lg md:text-xl text-start font-serif font-extralight md:pl-60 md:pr-72 pt-5 italic">
                <p>"That's the problem with life, right? Either you know what you want..."</p>
            </div>

            <div className="text-lg md:text-xl text-start font-serif font-medium md:pl-60 pt-4 md:pr-72">
                <p>BoJack Horseman is the most psychologically clever series that has ever been made...<br />
                    <br />
                    If you've ever reached a point of self loathing in your life...<br />
                    <br />
                    About Dark, I don't have a lot to say, except that I'd like to quote a YouTube comment...</p>
            </div>

            {/* Books/Stories Section */}
            <div className="text-2xl md:text-3xl text-start font-serif font-bold md:pl-60 pt-6 underline">
                Books/Stories
            </div>

            <div className="text-lg md:text-xl text-start font-serif font-medium md:pl-60 pt-2 md:pr-60">
                <p>
                    <strong>1. The Bet - Anton Chekhov</strong><br />
                    <strong>2. A Voice in the Dark</strong> - part of "The Autobiography of a Super-Tramp" - <strong>W. H. Davies</strong><br />
                    <strong>3. The Laws of Human Nature - Robert Greene</strong> (currently reading)<br />
                    <strong>4. Shrimad Bhagavad Gita - Vyasa</strong> (currently reading)<br />
                    <strong>5. Gödel, Escher, Bach: an Eternal Golden Braid - Douglas Hofstadter</strong> (currently reading)
                </p>
            </div>

            <div className="text-lg md:text-xl text-start font-serif font-medium md:pl-60 pt-4 md:pr-72">
                <p>"The Bet" is a short story that I was first introduced to in my 8th standard...<br />
                    <br />
                    <div className="text-lg md:text-xl text-start font-serif font-extralight md:pl-12 md:pr-12 pt-5 italic">
                        <p>"A reader lives a thousand lives before he dies. The man who never reads lives only one."</p>
                    </div>
                    <div className="text-lg md:text-xl text-start font-serif flex justify-end md:pr-12">
                        - George R.R. Martin
                    </div>
                    <br />
                    The Bhagavad Gita is a very old scripture which consists of a conversation between two friends...</p>
            </div>

            {/* Podcasts Section */}
            <div className="text-2xl md:text-3xl text-start font-serif font-bold md:pl-60 pt-6 underline">
                Podcasts
            </div>

            <div className="flex justify-center pt-4">
                <img
                    src={youStartedItImage}
                    className="max-w-screen-3xl object-cover w-4/12 rounded-full"
                    alt="You Started It Podcast"
                />
            </div>

            <div className="text-lg md:text-xl text-start font-serif font-medium md:pl-60 pt-8 md:pr-60">
                <p>
                    <strong>1. 'You Started It' with Daniel Fernandez</strong><br />
                    <strong>2. Love Aaj Kal with Aastha & Ankit</strong> - Sex, Dating and Relationships<br />
                    <strong>3. The Psychology of your 20's by Jemma Sbeg</strong> (Thanks to Rachit for recommending)<br />
                    <strong>4. Simple Ken by Kenny Sebastian</strong> - An entertaining, light-hearted, feel-good podcast<br />
                    <strong>5. The Jordan B. Peterson Podcast</strong><br />
                    <strong>6. 2 past 2 curious with Biswa Kalyan Rath and Kumar Varun</strong> - If you're into interesting historical trivia...
                </p>
            </div>

            <div className="text-lg md:text-xl text-start font-serif font-medium md:pl-60 pt-4 md:pr-72 pb-6">
                <p>'You Started it' is my personal favourite because of a couple of reasons...<br />
                    <br />
                    'Love Aaj Kal' is a podcast in which two best friends - Ankit Vengurlekar and Aastha Atray...<br />
                    <br />
                    You might've noticed that these podcast recommendations include a lot of comedians...</p>
            </div>
        </div>
    );
}
