import diaryImage from '/diary.jpg';
import { characters, blogPosts } from '../data/content';

export default function Stories() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-4">
                    <img
                        src={diaryImage}
                        className="w-full h-full object-cover rounded-full"
                        alt="Diary"
                    />
                </div>
                <h1 className="text-4xl md:text-6xl font-serif font-extralight underline decoration-2 mb-12">
                    Thoughts & Stories
                </h1>
            </div>

            <section className="mb-12">
                <h2 className="text-3xl md:text-5xl font-serif font-extralight underline decoration-2 mb-6">
                    Characters
                </h2>
                <div className="space-y-4">
                    {characters.map((character) => (
                        <div key={character.name} className="font-serif">
                            <strong>{character.name}</strong>
                            {character.description && <span> - {character.description}</span>}
                        </div>
                    ))}
                </div>
                <p className="mt-6 font-serif">
                    Once upon a time, this section used to contain the names of people people who either greatly influenced or played a significant part in the story of my life. It was (and is) difficult to make such a list, as there many people including my childhood friends, college friends and office co-workers who have come and stayed close to my heart as life unfolded, so I decided to start out small and only list a couple of people. <br/>
                    My plan back then was that from time to time, I would be introducing more of the characters with the stories I share. Although most of the characters I mentioned here in the initial "list" still hold the same place in my life, as time passed, I came to the realization that it didn't make sense to have a pre-defined list at all, given how my own experiences turned out to be the most vital for the stories that I am to share here, and although the experiences involve people, it made more sense to focus on the stories than the people, apart from the fact that you "never know what happens tomorrow". <br/>
                    Hence, now I only stick to the plan.
                </p>
            </section>

            <section>
                {blogPosts.map((post) => (
                    <article key={post.title} className="mb-12">
                        <h2 className="text-2xl md:text-4xl font-serif font-extralight underline decoration-2 mb-4">
                            {post.title}
                        </h2>
                        {post.quote && (
                            <div className="mb-4">
                                <blockquote className="italic font-semibold mb-2">
                                    "{post.quote.text}"
                                </blockquote>
                                <cite className="block text-[16.67px] font-serif not-italic">-{post.quote.author}</cite>
                            </div>
                        )}
                        <div className="prose prose-lg font-serif font-medium whitespace-pre-line">{post.content}</div>
                        {post.endQuote && (
                            <div className="mt-6 mb-4">
                                <blockquote className="italic font-semibold mb-2">
                                    "{post.endQuote.text}"
                                </blockquote>
                                <cite className="block text-[16.32px] font-serif not-italic">-{post.endQuote.author}</cite>
                            </div>
                        )}
                        <div className="text-lg font-serif mt-4">{post.date}</div>
                    </article>
                ))}
            </section>
        </div>
    );
}
