import tomAndSummerImage from '/tomAndSummer.jpg';
import braveImage from '/brave.jpg';
import youStartedItImage from '/youStartedIt.png';

export default function Recommendations() {
    return (
        <div className="max-w-8xl mx-auto px-4 py-8">
            <div className="text-[26px] md:text-5xl text-center font-serif font-extralight underline decoration-2 pt-7">Recommendations</div>

            <div className="text-xl md:text-2xl text-start font-serif font-medium md:pl-60 pt-8 italic max-w-6xl">
                <p>"Look, Simba. Everything the light touches is our kingdom."</p>
            </div>
            <div className="text-base md:text-[19px] text-start font-serif md:pl-[245px]">
                - Mufasa, The Lion King (1994)
            </div>

            <div className="text-[17.5px] md:text-[21.5px] text-start font-serif font-extralight md:pl-60 pt-7">
                I write about my favourites here.
            </div>

            {/* Stand-up Comics Section */}
            <div className="text-[21px] md:text-3xl text-start font-serif font-bold md:pl-60 pt-5 underline">Stand-up comics</div>

            <div className="text-base sm:text-[17px] md:text-lg lg:text-xl text-start font-serif font-extralight md:pl-60 md:pr-72 pt-5 italic">
                <p>"Dear Sad, look on the bright side. Being ghosted by your crush is far superior to being crushed by a ghost."</p>
            </div>
            <div className="text-base sm:text-[17px] md:text-lg lg:text-xl text-start font-serif font-extralight md:pl-60 md:pr-72">
                <p>-Kanan Gill, April 2020</p>
            </div>

            <div className="text-xl md:text-2xl text-start font-serif font-medium md:pl-60 pt-2">Indian:</div>
            <div className="text-base sm:text-[17px] md:text-lg lg:text-xl text-start font-serif font-medium md:pl-60 md:pr-60">
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
            <div className="text-base sm:text-[17px] md:text-lg lg:text-xl text-start font-serif font-medium md:pl-60 md:pr-60">
                <p>
                    <strong>1. Ricky Gervais</strong><br />
                    <strong>2. Zach Star</strong> (not a professional comedian but his skits are extremely funny)<br />
                    <strong>3. Jimmy Carr</strong><br />
                    <strong>4. Trevor Noah</strong> (Madhav and Rachit - if you're reading this, I miss our trip...)<br />
                    <strong>5. Matt Rife</strong>
                </p>
            </div>

            <div className="text-base sm:text-[17px] md:text-lg lg:text-xl text-start font-serif font-medium md:pl-60 pt-4 md:pr-60">
                <p>
                    Here's a <a href="https://www.youtube.com/watch?v=YDDlFHQ1Vgw&t=468s&ab_channel=SrijanKaushik" className="hover:text-tres text-pink-600">link</a> to a short stand-up clip by Srijan Kaushik. <br />
                    Here's <a href="https://www.youtube.com/watch?v=6CdhE3hh2CQ&ab_channel=SumitAnand" className="hover:text-tres text-pink-600">one</a> by Sumit Anand. <br />
                    I'm not including any by Abhishek Upmanyu since he's a common favourite among people. <br />
                    Here's <a href="https://www.youtube.com/watch?v=n9Cql4qMrQ8&ab_channel=DanielFernandes" className="hover:text-tres text-pink-600">one</a> by Daniel Fernandes (you can also watch his specials for free, as he has a pay-as-you-like model). <br />
                    You can get a flavor of KV <a href="https://www.youtube.com/watch?v=kcKQI0J6pmU&ab_channel=RandomChikibum" className="hover:text-tres text-pink-600">here</a> (I don't know why, but he removed some of his old uploads).<br />
                    Karunesh is also quite commonplace, but his funniest act so far was his most recent Amazon Prime <a href="https://www.primevideo.com/detail/Aalas-Motaapa-Ghabraahat/0PC75X2D6A4RGZ4NA280VF9SS0" className="hover:text-tres text-pink-600">special</a>. <br />
                    Mohd Suhel is the newest gold that I've struck. He is criminally underrated. Have a taste <a href="https://www.youtube.com/watch?v=og6SGJ-fi1A&ab_channel=MohdSuhel" className="hover:text-tres text-pink-600">here</a>.
                </p>
            </div>

            <div className="text-base sm:text-[17px] md:text-lg lg:text-xl text-start font-serif font-medium md:pl-60 md:pr-60">
                <p>
                    <br />
                    <strong><u>Side note</u>:</strong> I also love skits by <a href="https://www.youtube.com/watch?v=R6_q0MwImTE&ab_channel=AwkwardPuppets" className="hover:text-tres text-pink-600">Awkward Puppets</a>, <a href="https://www.youtube.com/watch?v=W4EK5nvyszs&t=3s&ab_channel=AGCANDY" className="hover:text-tres text-pink-600">AGC Andy</a> (most of his content is on Instagram), and <a href="https://www.youtube.com/watch?v=OjFUJEoq8k0&ab_channel=Key%26Peele" className="hover:text-tres text-pink-600">Key and Peele</a>.
                </p>
            </div>

            {/* Movies Section */}
            <div className="text-[21px] md:text-3xl text-start font-serif font-bold md:pl-60 pt-5 underline">Movies</div>

            <div className="flex justify-center pt-4">
                <img
                    src={tomAndSummerImage}
                    className="max-w-screen-3xl object-cover w-10/12 md:w-4/12 rounded-2xl"
                    alt="500 Days of Summer"
                />
            </div>

            <div className="text-base sm:text-[17px] md:text-lg lg:text-xl text-start font-serif font-medium md:pl-60 pt-8 md:pr-60">
                <p>
                    <strong>1. 500 Days of Summer</strong><br />
                    <strong>2. Twelve Angry Men</strong> (Thanks to Kaustab for recommending)<br />
                    <strong>3. The Shawshank Redemption</strong><br />
                    <strong>4. Eternal Sunshine of the Spotless Mind</strong> (Thanks to Radhika for recommending)<br />
                    <strong>5. Sully</strong><br />
                    <strong>6. Before We Go</strong><br />
                    <strong>7. The Big Short</strong><br />
                    <strong>8. The End of the Tour</strong><br />
                    <strong>9. Begin Again</strong><br />
                    <strong>10. Groundhog Day</strong><br />
                    <strong>11. Skyfall</strong><br />
                    <strong>12. Airplane!</strong> - if you're just looking for fun, go for this. It's the funniest movie that I've ever watched.
                </p>
            </div>

            <div className="text-base sm:text-[17px] md:text-lg lg:text-xl text-start font-serif font-extralight md:pl-60 md:pr-72 pt-5 italic">
                <p>
                    "We wear our scarves just like a noose <br />
                    But not 'cause we want eternal sleep <br />
                    And though our parts are slightly used <br />
                    New ones are slave labor you can keep"
                </p>
            </div>

            <div className="text-base sm:text-[17px] md:text-lg lg:text-xl text-start font-serif font-medium md:pl-60 pt-4 md:pr-72">
                <p>
                    I remember reading about the theme of 500 Days of Summer when I was going through one of my worst breakups. Discovering it, it felt like the kind of a movie that I should have avoided at that state, and should've watched sometime in future, and ideally with someone. Then one fine midnight (when I had not yet recovered), I just said to myself - "Fuck it. I'll watch it by myself. And I'll watch it right now." Little did I know, I was about to take one of the best cinematic journeys of my life so far.<br /><br />
                    I feel every Tom has had a Summer and every Summer has had a Tom at some point in their lives. The movie makes you feel every possible human emotion there is, and has absolutely beautiful cinematography and mesmerizing, cherry-picked soundtracks. It ideally takes a rewatch to completely understand the girl's perspective. Although my favouritism towards the movie could've been influenced by my situation, but even while rewatching it after recovering, I still enjoyed it as much and felt that it had a lot more to offer that I missed during my first watch.
                </p>
            </div>

            {/* Disney/DreamWorks Movies Section */}
            <div className="text-[21px] md:text-3xl text-start font-serif font-bold md:pl-60 pt-6 underline">Disney/DreamWorks Movies</div>

            <div
                className="flex justify-center pt-4">
                <img
                    src={braveImage}
                    className="max-w-screen-3xl object-cover w-10/12 md:w-4/12 rounded-2xl"
                    alt="Brave"
                />
            </div>

            <div
                className="text-base sm:text-[17px] md:text-lg lg:text-xl text-start font-serif font-medium md:pl-60 pt-6 md:pr-60">
                <p>
                    <strong>1. Brave</strong><br />
                    <strong>2. Zootopia</strong><br />
                    <strong>3. Soul</strong><br />
                    <strong>4. Penguins of Madagascar</strong><br />
                    <strong>5. Inside Out</strong> (Thanks to Radhika for recommending)
                </p>
            </div>

            <div className="text-base sm:text-[17px] md:text-lg lg:text-xl text-start font-serif font-extralight md:pl-60 md:pr-72 pt-5 italic">
                <p>
                    "But every once in a while, there's a day when I don't have to be a princess. No lessons, no expectations. <br />
                    A day where anything can happen. A day when I can change my fate."
                </p>
            </div>

            <div className="text-base sm:text-[17px] md:text-lg lg:text-xl text-start font-serif font-medium md:pl-60 pt-4 md:pr-72">
                <p>
                    Brave is and always will be my personal favourite. The opening monologue by Merida about fate gives me chills every time I listen to it, and takes me right back to my childhood, when I watched it the first time. I remember really enjoying the movie and don't recall crying even a bit during any scene back then. But when I watched it in college after growing up, oddly enough, I ended up shedding tears during the climax. This movie has witnessed me mature emotionally with time. <br /><br />
                    Soul is another movie that I adore a lot. In fact, if I had to recommend one Disney movie that everyone should watch, it would be Soul, as it teaches us about what real happiness truly is, and if it can ever be achieved.
                </p>
            </div>

            {/* Series Section */}
            <div className="text-[21px] md:text-3xl text-start font-serif font-bold md:pl-60 pt-6 underline">Series</div>

            <div className="text-base sm:text-[17px] md:text-lg lg:text-xl text-start font-serif font-medium md:pl-60 pt-2 md:pr-60">
                <p>
                    <strong>1. The Leftovers</strong><br />
                    <strong>2. BoJack Horseman</strong><br />
                    <strong>3. The OA</strong><br />
                    <strong>4. Dark</strong><br />
                    <strong>5. Blackadder</strong> <br />
                    <strong>6. Sherlock</strong><br />
                    <strong>7. Gravity Falls</strong> - Why did they have to end it so soon? :( <br />
                    <strong>8. 13 Reasons Why (Season 1 only)</strong>
                </p>
            </div>

            <div className="text-base sm:text-[17px] md:text-lg lg:text-xl text-start font-serif font-extralight md:pl-60 md:pr-72 pt-5 italic">
                <p>
                    "That's the problem with life, right? Either you know what you want, and then you don't get what you want, or you get what you want, and then you don't know what you want."
                </p>
            </div>

            <div
                className="text-base sm:text-[17px] md:text-lg lg:text-xl text-start font-serif font-medium md:pl-60 pt-4 md:pr-72">
                <p>
                    I started with the Leftovers because I was bored and needed something to watch before I resume work, and did not have much expectations, so targeted to finish one season. The setting of the show is that one fine day, 2% of the world's population randomly disappears. At the beginning, I had many questions, things which I expected to have an explanation for soon enough, or at least by the end. A few episodes in, it got me hooked like no other show ever could. By the end of the first season, I realized this show is not about answers at all. It is about how you cope when you don't have them. Just as the title suggests, the show revolves around the "leftovers", and not the "departed".<br /><br />
                    Needless to say, I ended up watching all three seasons. Justin Theroux and Carrie Coon have acted their heart and soul out throughout the show. Every season is better than the last, and the ending for season 2 is especially my favourite. At the end of S3E4, there is a "sprinkler" scene with "Take On Me" by A-ha playing in the background, rolling into the credits - which I believe is the most profound scene that has been ever shot in the history of television.<br /><br/>
                    BoJack Horseman is the most psychologically clever series that has ever been made. It deals with topics that aren't usually talked about, and if such themes were to be portrayed by real human actors, the series would either be censored or banned. But through the animated characters and funny dialogue, you're constantly reminded - "It's a talking horse, after all - how seriously are you actually supoosed to take it?"<br /><br />
                    If you've ever reached a point of self loathing in your life, this series will hit really close to home, and resonate with many of your deepest insecurities. Not just that, it has probably the best collection of soundtracks that you'd see put together in a single show, while being very appropriately picked. Some of these songs that made it to my favourites playlist include "Los Ageless" by St. Vincent, "Break My Fall" by Doc Robinson, and "Mr. Blue" by Catherine Feeny.<br /><br />
                    About Dark, I don't have a lot to say, except that I'd like to quote a YouTube comment that I once read - "There are two kinds of people in the world - the ones who think Dark is a masterpiece and the ones who haven't watched it yet." It is originally in German, but if you have subtitles it isn't hard to follow at all. Avoid going for the dubbed version.<br /><br />
                    Blackadder is a laughter-filled classic, my favourite British comedy series by none other than our beloved Rowan Atkinson. <br />
                    Speaking of comedy, I think the US sitcom "Family Guy" also deserves a special mention. It is hands down the most inclusively and hilariously offensive TV show ever written in that genre. Kudos to Seth  MacFarlane for making our lives better. <br /><br />
                    13 Reasons why probably didn't achieve the goal it intended to, and in fact might've even caused teenagers to have a glorified image of suicide. Nevertheless, I found Season 1 really enjoyable (and feel that's where it should have ended). The show pointed out how the butterfly effect can make your tiniest gestures (positive or negative) have an extraordinary impact on people's lives and decisions. Also, the prom night scene is literally unforgettable, and it gifted us the version of "The Night We Met" by Lord Huron with Phoebe Bridgers, which made one of the loveliest romantic songs ever made even more heavenly.
                </p>
            </div>

            {/* Books/Stories Section */}
            <div className="text-[21px] md:text-3xl text-start font-serif font-bold md:pl-60 pt-6 underline">Books/Stories</div>

            <div className="text-base sm:text-[17px] md:text-lg lg:text-xl text-start font-serif font-medium md:pl-60 pt-2 md:pr-60">
                <p>
                    <strong>1. The Bet - Anton Chekhov</strong><br />
                    <strong>2. A Voice in the Dark </strong>- part of "The Autobiography of a Super-Tramp" - <strong>W. H. Davies</strong><br />
                    <strong>3. The Laws of Human Nature - Robert Greene</strong> (currently reading)<br />
                    <strong>4. Shrimad Bhagavad Gita - Vyasa</strong> (currently reading)<br />
                    <strong>5. Gödel, Escher, Bach: an Eternal Golden Braid - Douglas Hofstadter</strong> (currently reading)
                </p>
            </div>

            <div className="text-base sm:text-[17px] md:text-lg lg:text-xl text-start font-serif font-medium md:pl-60 pt-4 md:pr-72">
                <p>
                    "The Bet" is a short story that I was first introduced to in my 8th standard because of my board (ICSE). Although I did not have the maturity to, and hence wasn't able appreciate it justifiably back then, every time I re-read it at my leisure after my boards ended, my understanding of its themes deepend and I found it to be one of the most marvelous stories that have ever been written.<br />
                    It highlights the psychological changes a young lawyer goes through during a 15-year voluntary solitary confinement, as a consequence of a "stupid" bet that he takes with a rich banker to prove that life imprisonment is a more humane punishment compared to death penalty, for two million dollars. I don't wish to spoil it for you any further, but I can't keep myself from putting this quote here that you'll find relevant to the story (and this sub-section in general) after reading it (if you choose to): <br />
                </p>
                <div className="text:lg md:text-xl text-start font-serif font-extralight pl-4 md:pl-72 pr-4 md:pr-62 pt-5 italic">
                    <p>"A reader lives a thousand lives before he dies. The man who never reads lives only one."</p>
                </div>
                <div className="text:lg md:text-xl text-start font-serif flex justify-end pl-4 md:pl-62 pr-4 md:pr-[354px]">- George R.R. Martin</div>
                <br />
                <p>
                    The Bhagavad Gita is a very old scripture which consists of a conversation between two friends, Arjuna and Krishna. Arjuna finds himself in a war in which he has to fight for Dharma, against his own kin, and consequently finds himself trembling (both physically and metaphorically) and is unable to wield his bow against them. He turns to his friend Krishna for guidance, and he sings the Gita to him, which guides him through the battle out of which he emerges enlightened and victorious, despite having an army which would otherwise be considered weaker than his opponent's (Duryodhan). It is a very deep piece of literature and when unpacked properly, acts as a guide to life in general.<br /><br />
                    In Gödel, Escher, Bach: an Eternal Golden Braid, Douglas Hofstadter takes the lives and works of mathematician Kurt Gödel, artist M. C. Escher and musician Johann Sebastian Bach, and explores common themes between them. He doesn't necessarily relate their fields to each other, but discusses how human cognition emerges through neurological mechanisms. As Wikipedia puts it, "Through short stories, illustrations, and analysis, the book discusses how systems can acquire meaningful context despite being made of "meaningless" elements. It also discusses self-reference and formal rules, isomorphism, what it means to communicate, how knowledge can be represented and stored, the methods and limitations of symbolic representation, and even the fundamental notion of "meaning" itself."
                </p>
            </div>

            {/* Podcasts Section */}
            <div className="text-[21px] md:text-3xl text-start font-serif font-bold md:pl-60 pt-6 underline">Podcasts</div>

            <div
                className="flex justify-center pt-4">
                <img
                    src={youStartedItImage}
                    className="max-w-screen-3xl object-cover w-11/12 md:w-4/12 rounded-full"
                    alt="You Started It Podcast"
                />
            </div>

            <div className="text-base sm:text-[17px] md:text-lg lg:text-xl text-start font-serif font-medium md:pl-60 pt-8 md:pr-60">
                <p>
                    <strong>1. 'You Started It' with Daniel Fernandez</strong><br />
                    <strong>2. Love Aaj Kal with Aastha & Ankit</strong> - Sex, Dating and Relationships<br />
                    <strong>3. The Psychology of your 20's by Jemma Sbeg</strong> (Thanks to Rachit for recommending)<br />
                    <strong>4. Simple Ken by Kenny Sebastian</strong> - An entertaining, light-hearted, feel-good podcast<br />
                    <strong>5. The Jordan B. Peterson Podcast</strong><br />
                    <strong>6. 2 past 2 curious with Biswa Kalyan Rath and Kumar Varun</strong> - If you're into interesting historical trivia about the humankind
                </p>
            </div>

            <div className="text-base sm:text-[17px] md:text-lg lg:text-xl text-start font-serif font-medium md:pl-60 pt-4 md:pr-72 pb-6">
                <p>
                    'You Started it' is my personal favourite because of a couple of reasons. First, the discussions are very lively and highly opinionated, especially in the first two seasons (pre-COVID era), in which there are two guests in each episode who take us through a varied range of opinions on every chosen topic. Alongside that, or you can say as a consequence, the podcast adresses a lot of socio-cultural issues that we Indians face in our day-to day lives.<br /><br />
                    'Love Aaj Kal' is a podcast in which two best friends - Ankit Vengurlekar and Aastha Atray - sit down and have a conversation about anything that's under the sun about love and dating. They navigate through topics like "Can a guy and a girl just be friends", "Is it okay to have sex on the first date", "Dating in the world of apps" and "How to identify toxic relationships", that are quite pertinent to modern-day romance and relationships.<br /><br />
                    You might've noticed that these podcast recommendations include a lot of comedians. That isn't a mere coincidence. Contrary to what some people believe, comedians aren't dumb jokers who make people laugh, in fact it is exactly the other way around. It so happens that most successful comedians are successful because they are intelligent and have a way-better-than-average understanding of human nature and bahavior, which is why they are able to write jokes that most the people can relate to and enjoy. This deep understanding and presence of mind also lets them have an edge when they're dissecting serious problems or common issues faced by the people. And hence, they come up with really invaluable insights.
                </p>
            </div>
        </div>
    );
}
