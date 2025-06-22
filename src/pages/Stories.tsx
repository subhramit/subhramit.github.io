import diaryImage from '/diary.jpg';
import { characters, blogPosts } from '../data/content';

export default function Stories() {
  return (
      <main className="bg-quad w-full mx-auto my-auto flex-col">
          {/* Replace the Book icon with the original image */}
          <div className="flex justify-center pt-3">
              <img
                  src={diaryImage}
                  className="max-w-screen-2xl object-cover w-2/12 rounded-full"
                  alt="Diary"
              />
          </div>
          <div className="text-6xl text-start font-serif font-extralight flex justify-center pt-5 underline decoration-2">
              Thoughts & Stories
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
          {/* Character description text */}
          Above are a few people who either greatly influenced or played a significant part in the story of my life...
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
                <cite className="block text-sm">-{post.quote.author}</cite>
              </div>
            )}
            <div className="prose prose-lg font-serif">{post.content}</div>
            <div className="text-xl font-serif mt-4">{post.date}</div>
          </article>
        ))}
      </section>
    </main>
  );
}