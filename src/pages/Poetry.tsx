import poetryImage from '/poetryIm.jpg'

export default function Poetry() {
    return (
        <div className="max-w-8xl mx-auto px-4 py-8">
            <div className="flex justify-center pt-3">
                <img
                    src={poetryImage}
                    className="max-w-screen-2xl object-cover w-9/12 md:w-[28%] rounded-full"
                    alt="Poetry"
                />
            </div>

            <div className="text-4xl md:text-5xl text-center md:text-start font-serif font-extralight md:pl-[15rem] pt-7 underline decoration-2">
                My thoughts on poetry
            </div>

            <div className="text-[17px] sm:text-lg md:text-xl text-start font-serif font-medium md:pl-[15.5rem] md:pr-[15.5rem] pt-4 italic">
                <p>"And medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. <br />
                    But poetry, beauty, romance, love - these are what we stay alive for."</p>
            </div>

            <div className="text-[17px] sm:text-lg md:text-xl text-start font-serif pt-2 md:pl-[15.5rem]">
                - John Keating, Dead Poets Society (1989)
            </div>

            <div className="text-base sm:text-lg md:text-xl text-start font-serif font-medium md:pl-[15.5rem] pt-4 md:pr-[15.5rem]">
                <p>When it comes to poetry, I have never believed in constrained definitions about words on a page. I have always felt poets are not just the ones who write poetry, but also the ones who just possess a poetic mind - a mind that is capable of appreciating poetry or anything that is poetic. And here births the paradox - as all poetry is created by the poets, so that means all that is considered poetic is also only made so by the poets themselves. <br />
                    <br />
                    I always imagined an ideal "poets society" to be one in which people can, without any obligation to do so, come and sit together during a random sunset, look at the sky and just drown in the moment. Perhaps this is why I never made it to my college's poetry club.
                    <br />
                    I don't write poems often, nor do I know if I'll ever write again, but here are some words that I put together during different occassions and needless to say, in different states of mind.
                </p>
            </div>

            <div className="text-2xl sm:text-3xl md:text-4xl text-start font-serif font-extralight md:pl-[15rem] pt-6">Madness</div>
            <div className="text-base md:text-lg text-start font-serif font-medium md:pl-[15.18rem] pt-2 italic">
                <p>A mad world it is, perhaps <br />
                    Where life is an unsolicited gift. <br />
                    Before drowning in the nectar of the clouds, <br />
                    In the wide open sky, we look for a rift. <br />
                    <br />
                    I don't know if it counts into sanity <br />
                    When roses fascinate us even after countless heartbreaks. <br />
                    To tell apart love from madness <br />
                    Is to escape a dream from which one never wakes. <br />
                    <br />
                    The wonders of what's beyond death <br />
                    Are thoughts by which many are fazed. <br />
                    As time ensnares us in this journey of life, love and death, <br />
                    I think it is madness to not be amazed.</p>
            </div>
            <div className="text-[17px] sm:text-lg md:text-xl text-start font-serif pl-[15rem] pt-2">20.11.2021</div>

            <div className="text-2xl sm:text-3xl md:text-4xl text-start font-serif font-extralight md:pl-[15rem] pt-6">Storms</div>
            <div className="text-base md:text-lg text-start font-serif font-medium md:pl-[15.18rem] pt-2 italic">
                <p>Oh, haven't you wondered <br />
                    Why, by the storms you're always adored? <br />
                    Why, when the dark, moonless sky prevails, <br />
                    You're the only one still ashore? <br />
                    <br />
                    So fierce and so unforgiving, or so the tales say - <br />
                    "Dare anything stand in their way!" <br />
                    But you think it's a mystery why, when they soar <br />
                    You feel you're somewhere a part of the lore. <br />
                    <br />
                    So look me in the eye and tell me, <br />
                    Have you truly never wondered why, <br />
                    When you look in the mirror <br />
                    You find something you truly adore?</p>
            </div>
            <div className="text-[17px] sm:text-lg md:text-xl text-start font-serif pl-[15rem] pt-2 pb-6">11.07.2023</div>
        </div>
    );
}
