import shuffleArray from "shuffle-array";

const response = () => ({
  books: shuffleArray([
    {
      author: "Marcel Proust",
      cover: "01.jpg",
      rating: "9.9",
      slug: "in-search-of-lost-time",
      synopsis:
        "In Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.\nIn Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.",
      title: "In Search of Lost Time",
      upvoted: false,
      upvotes: 1111
    },
    {
      author: "Miguel de Cervantes",
      cover: "02.jpg",
      rating: "9.8",
      slug: "don-quixote",
      synopsis:
        "Don Quixote is a middle-aged gentleman from the region of La Mancha in central Spain. Obsessed with the chivalrous ideals touted in books he has read, he decides to take up his lance and sword to defend the helpless and destroy the wicked.\nDon Quixote is a middle-aged gentleman from the region of La Mancha in central Spain. Obsessed with the chivalrous ideals touted in books he has read, he decides to take up his lance and sword to defend the helpless and destroy the wicked.",
      title: "Don Quixote",
      upvoted: true,
      upvotes: 1022
    },
    {
      author: "James Joyce",
      cover: "03.jpg",
      rating: "9.6",
      slug: "ulysses",
      synopsis:
        "All the action of Ulysses takes place in and immediately around Dublin on a single day (June 16, 1904). The three central characters—Stephen Dedalus (the hero of Joyce’s earlier Portrait of the Artist as a Young Man); Leopold Bloom, a Jewish advertising canvasser; and his wife, Molly—are intended to be modern counterparts of Telemachus, Ulysses (Odysseus), and Penelope, respectively, and the events of the novel loosely parallel the major events in Odysseus’s journey home after the Trojan War.\nAll the action of Ulysses takes place in and immediately around Dublin on a single day (June 16, 1904). The three central characters—Stephen Dedalus (the hero of Joyce’s earlier Portrait of the Artist as a Young Man); Leopold Bloom, a Jewish advertising canvasser; and his wife, Molly—are intended to be modern counterparts of Telemachus, Ulysses (Odysseus), and Penelope, respectively, and the events of the novel loosely parallel the major events in Odysseus’s journey home after the Trojan War.",
      title: "Ulysses",
      upvoted: false,
      upvotes: 1003
    },
    {
      author: "F. Scott Fitzgerald",
      cover: "04.jpg",
      rating: "9.3",
      slug: "the-great-gatsby",
      synopsis:
        "The Great Gatsby is a story told by Nick Carraway, who was once Gatsby's neighbor, and he tells the story sometime after 1922, when the incidents that fill the book take place. As the story opens, Nick has just moved from the Midwest to West Egg, Long Island, seeking his fortune as a bond salesman.\nThe Great Gatsby is a story told by Nick Carraway, who was once Gatsby's neighbor, and he tells the story sometime after 1922, when the incidents that fill the book take place. As the story opens, Nick has just moved from the Midwest to West Egg, Long Island, seeking his fortune as a bond salesman.",
      title: "The Great Gatsby",
      upvoted: false,
      upvotes: 991
    }
  ])
});

export default response;
