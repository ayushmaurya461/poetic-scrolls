interface Quote {
  text: string;
  author: string;
  category: 'design' | 'development' | 'creativity' | 'innovation';
}

export const quotes: Quote[] = [
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    category: "design"
  },
  {
    text: "Simplicity is the ultimate sophistication in web design.",
    author: "Leonardo da Vinci",
    category: "design"
  },
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
    category: "development"
  },
  {
    text: "Every great design begins with an even better story.",
    author: "Lorinda Mamo",
    category: "design"
  },
  {
    text: "The best way to predict the future is to implement it.",
    author: "David Heinemeier Hansson",
    category: "development"
  },
  {
    text: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
    category: "development"
  },
  {
    text: "User experience is everything. It always has been, but it's undervalued and underinvested in.",
    author: "Evan Williams",
    category: "design"
  },
  {
    text: "The details are not the details. They make the design.",
    author: "Charles Eames",
    category: "design"
  },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    category: "development"
  },
  {
    text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupery",
    category: "design"
  },
  {
    text: "The function of good software is to make the complex appear to be simple.",
    author: "Grady Booch",
    category: "development"
  },
  {
    text: "Design adds value faster than it adds costs.",
    author: "Joel Spolsky",
    category: "design"
  },
  {
    text: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
    category: "development"
  },
  {
    text: "Innovation is not about saying yes to everything. It's about saying no to all but the most crucial features.",
    author: "Steve Jobs",
    category: "innovation"
  },
  {
    text: "The web is like a canvas, and code is the paint. Create your masterpiece.",
    author: "Anonymous",
    category: "creativity"
  },
  {
    text: "Good code is its own best documentation.",
    author: "Steve McConnell",
    category: "development"
  },
  {
    text: "Design is intelligence made visible.",
    author: "Alina Wheeler",
    category: "design"
  },
  {
    text: "The best designs are those that appear so simple you wonder why no one thought of them before.",
    author: "Don Norman",
    category: "design"
  },
  {
    text: "Clean code always looks like it was written by someone who cares.",
    author: "Robert C. Martin",
    category: "development"
  },
  {
    text: "Websites promote you 24/7: No employee will do that.",
    author: "Paul Cookson",
    category: "innovation"
  }
];
