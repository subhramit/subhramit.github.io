import { Character, BlogPost } from '../types';

export const characters: Character[] = [
  { name: 'Me', description: '' },
  { name: 'Myself', description: 'redacted' },
  { name: 'I', description: 'redacted' },
];

export const blogPosts: BlogPost[] = [
  {
    title: 'Thought - The Patronus Charm',
    date: '10.07.2023',
    quote: {
      text: 'Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.',
      author: 'Albus Dumbledore, Harry Potter and the Prisoner of Azkaban'
    },
    content: [
      "Whenever we think about fantasies like the Harry Potter series, one of the first things that come to our minds is a world of \"magic\" - a world we can only fantasize about in our imagination, one which is far, far away from reality.",

      "Interestingly, I have stumbled upon a few concepts that I could very practically relate to from the series, in my life. One could say there were mostly realizations rather than direct lessons, as I realized there were things that I had already been doing or situations that I had already been facing since as long as I can remember, that were portrayed in a different, \"magical\" way in the series.",

      "One of the best examples among these are the \"Dementors\". In Harry Potter and the Prisoner of Azkaban and onwards, we are introduced to the Dementors, which are extremely dreadful creatures that kill you very painfully, by sucking out every bit of happiness you have within yourself. This doesn't sound like an alien concept, does it? In our day to day lives, we come across our own Dementors - which could be people, objects or places that suck out our happiness and leave us feeling empty and lacking the will to move forward.",

      "The only way of defense against these creatures is also introduced in the same installment, that is, the \"Patronus charm\". Once the charm is deployed, it creates a shield of happiness onto which the Dementors try feeding on, and ultimately get scared being overpowered by positive feelings and escape away.",

      "There is, however, one catch associated with this charm - unlike other spells, a wizard cannot trigger it just by waving his wand or by chanting the spell, or even both together. What is essential for the manifestation of a Patronus is that while casting the spell, the wizard has to think about his most powerful, positive memory and channel it into the spell, and that creates the defense against the foulest of creatures in the dark wizarding world.",

      "Just like we could relate to the Dementors in our real life, I came to realize that the Patronus charm exists in our world as well. Life never goes along a straight line, we all have our share of ups and downs. Whenever we feel our spirit of life is being threatened, something we can do is that we just close our eyes, and remember all the powerful memories that we have. Maybe it's about a place. Maybe it's with our parents. Maybe it's with a person who's your best friend, or once was, now turned a stranger, or maybe even an enemy - the only thing is that the memory should be powerful. It stands as a reminder to us that if life has been good once upon a time, it can be better again. And that's how the Dementors wither away, making you remember that life is worth it, after all."
    ],
    endQuote: {
      text: "You know, whenever I'm sad, something that I always try holding on to are the good memories I have. No matter how bad things are going, no matter who leaves you alone, nobody can take away those good memories. They'll always be with you.",
      author: "someone I'm no longer with"
    }
  }
];
