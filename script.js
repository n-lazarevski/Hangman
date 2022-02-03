
const quotes = [
  {
    "text": "You can observe a lot just by watching.",
    "author": "Yogi Berra"
  },
  {
    "text": "Fate is in your hands and no one elses",
    "author": "Byron Pulsifer"
  },
  {
    "text": "Be the chief but never the lord.",
    "author": "Lao Tzu"
  },
  {
    "text": "Nothing happens unless first we dream.",
    "author": "Carl Sandburg"
  },
  {
    "text": "Well begun is half done.",
    "author": "Aristotle"
  },
  {
    "text": "Self-complacency is fatal to progress.",
    "author": "Margaret Sangster"
  },
  {
    "text": "What you give is what you get.",
    "author": "Byron Pulsifer"
  },
  {
    "text": "We can only learn to love by loving.",
    "author": "Iris Murdoch"
  },
  {
    "text": "You'll see it when you believe it.",
    "author": "Wayne Dyer"
  },
  {
    "text": "To lead people walk behind them.",
    "author": "Lao Tzu"
  },
  {
    "text": "Having nothing, nothing can he lose.",
    "author": "William Shakespeare"
  },
  {
    "text": "A rolling stone gathers no moss.",
    "author": "Publilius Syrus"
  },
  {
    "text": "Everything in life is luck.",
    "author": "Donald Trump"
  },
  {
    "text": "Well done is better than well said.",
    "author": "Benjamin Franklin"
  },
  {
    "text": "One today is worth two tomorrows.",
    "author": "Benjamin Franklin"
  },
  {
    "text": "God always takes the simplest way.",
    "author": "Albert Einstein"
  },
  {
    "text": "One fails forward toward success.",
    "author": "Charles Kettering"
  },
  {
    "text": "From small beginnings come great things.",
    "author": null
  },
  {
    "text": "Be as you wish to seem.",
    "author": "Socrates"
  },
  {
    "text": "The world is always in movement.",
    "author": "V. Naipaul"
  },
  {
    "text": "Never mistake activity for achievement.",
    "author": "John Wooden"
  },
  {
    "text": "What worries you masters you.",
    "author": "Haddon Robinson"
  },
  {
    "text": "One faces the future with ones past.",
    "author": "Pearl Buck"
  },
  {
    "text": "Who sows virtue reaps honour.",
    "author": "Leonardo da Vinci"
  },
  {
    "text": "Talk doesn't cook rice.",
    "author": "Chinese proverb"
  },
  {
    "text": "He is able who thinks he is able.",
    "author": "Buddha"
  },
  {
    "text": "A goal without a plan is just a wish.",
    "author": "Larry Elder"
  },
  {
    "text": "Do, or do not. There is no try.",
    "author": "Yoda"
  },
  {
    "text": "All serious daring starts from within.",
    "author": "Harriet Beecher Stowe"
  },
  {
    "text": "Time is the wisest counsellor of all.",
    "author": "Pericles"
  },
  {
    "text": "You give before you get.",
    "author": "Napoleon Hill"
  },
  {
    "text": "Wisdom begins in wonder.",
    "author": "Socrates"
  },
  {
    "text": "Without courage, wisdom bears no fruit.",
    "author": "Baltasar Gracian"
  },
  {
    "text": "Change in all things is sweet.",
    "author": "Aristotle"
  },
  {
    "text": "When deeds speak, words are nothing.",
    "author": "African proverb"
  },
  {
    "text": "Skill to do comes of doing.",
    "author": "Ralph Emerson"
  },
  {
    "text": "Wisdom is the supreme part of happiness.",
    "author": "Sophocles"
  },
  {
    "text": "Our distrust is very expensive.",
    "author": "Ralph Emerson"
  },
  {
    "text": "All know the way; few actually walk it.",
    "author": "Bodhidharma"
  },
  {
    "text": "A beautiful thing is never perfect.",
    "author": null
  },
  {
    "text": "Only do what your heart tells you.",
    "author": "Princess Diana"
  },
  {
    "text": "Victory belongs to the most persevering.",
    "author": "Napoleon Bonaparte"
  },
  {
    "text": "Love all, trust a few, do wrong to none.",
    "author": "William Shakespeare"
  },
  {
    "text": "In order to win, you must expect to win.",
    "author": "Richard Bach"
  },
  {
    "text": "A goal is a dream with a deadline.",
    "author": "Napoleon Hill"
  },
  {
    "text": "You can do it if you believe you can!",
    "author": "Napoleon Hill"
  },
  {
    "text": "Smile, breathe, and go slowly.",
    "author": "Thich Nhat Hanh"
  },
  {
    "text": "Do more than dream: work.",
    "author": "William Arthur Ward"
  },
  {
    "text": "No man was ever wise by chance.",
    "author": "Seneca"
  },
  {
    "text": "Some pursue happiness, others create it.",
    "author": null
  },
  {
    "text": "We do what we do because we believe.",
    "author": null
  },
  {
    "text": "Do one thing every day that scares you.",
    "author": "Eleanor Roosevelt"
  },
  {
    "text": "What we think, we become.",
    "author": "Buddha"
  },
  {
    "text": "The shortest answer is doing.",
    "author": "Lord Herbert"
  },
  {
    "text": "Truth is powerful and it prevails.",
    "author": "Sojourner Truth"
  },
  {
    "text": "Light tomorrow with today!",
    "author": "Elizabeth Browning"
  },
  {
    "text": "Silence is a fence around wisdom.",
    "author": "German proverb"
  },
  {
    "text": "Everyone smiles in the same language.",
    "author": null
  },
  {
    "text": "If you can dream it, you can do it.",
    "author": "Walt Disney"
  },
  {
    "text": "You have to believe in yourself.",
    "author": "Sun Tzu"
  },
  {
    "text": "Our intention creates our reality.",
    "author": "Wayne Dyer"
  },
  {
    "text": "From little acorns mighty oaks do grow.",
    "author": "American proverb"
  },
  {
    "text": "Speak low, if you speak love.",
    "author": "William Shakespeare"
  },
  {
    "text": "Reality leaves a lot to the imagination.",
    "author": "John Lennon"
  },
  {
    "text": "The greatest remedy for anger is delay.",
    "author": "Seneca"
  },
  {
    "text": "Wherever you go, go with all your heart.",
    "author": "Confucius"
  },
  {
    "text": "Rainbows apologize for angry skies.",
    "author": "Sylvia Voirol"
  },
  {
    "text": "Whatever happens, take responsibility.",
    "author": "Tony Robbins"
  },
  {
    "text": "I think and that is all that I am.",
    "author": "Wayne Dyer"
  },
  {
    "text": "Each day provides its own gifts.",
    "author": "Marcus Aurelius"
  },
  {
    "text": "Everything you can imagine is real.",
    "author": "Pablo Picasso"
  },
  {
    "text": "Freedom is the right to live as we wish.",
    "author": "Epictetus"
  },
  {
    "text": "Change your thoughts, change your life!",
    "author": null
  },
  {
    "text": "A stumble may prevent a fall.",
    "author": null
  },
  {
    "text": "He who talks more is sooner exhausted.",
    "author": "Lao Tzu"
  },
  {
    "text": "He who is contented is rich.",
    "author": "Lao Tzu"
  },
  {
    "text": "Put your future in good hands your own.",
    "author": null
  },
  {
    "text": "Fortune favours the brave.",
    "author": "Virgil"
  },
  {
    "text": "The best way out is always through.",
    "author": "Robert Frost"
  },
  {
    "text": "No garden is without its weeds.",
    "author": "Thomas Fuller"
  },
  {
    "text": "Kind words will unlock an iron door.",
    "author": "Turkish proverb"
  },
  {
    "text": "Life is just a chance to grow a soul.",
    "author": "A. Powell Davies"
  },
  {
    "text": "Fortune befriends the bold.",
    "author": "John Dryden"
  },
  {
    "text": "Keep true to the dreams of thy youth.",
    "author": "Friedrich von Schiller"
  },
  {
    "text": "Knowing is not enough; we must apply!",
    "author": "Johann Wolfgang von Goethe"
  },
  {
    "text": "A short saying oft contains much wisdom.",
    "author": "Sophocles"
  },
  {
    "text": "I allow my intuition to lead my path.",
    "author": "Manuel Puig"
  },
  {
    "text": "If you wish to be a writer, write.",
    "author": "Epictetus"
  },
  {
    "text": "Patience is the companion of wisdom.",
    "author": "Saint Augustine"
  },
  {
    "text": "To fly, we have to have resistance.",
    "author": "Maya Lin"
  },
  {
    "text": "Imagination rules the world.",
    "author": "Napoleon Bonaparte"
  },
  {
    "text": "Worry gives a small thing a big shadow.",
    "author": null
  },
  {
    "text": "The cautious seldom err.",
    "author": "Confucius"
  },
  {
    "text": "Time you enjoy wasting, was not wasted.",
    "author": "John Lennon"
  },
  {
    "text": "Sadness flies away on the wings of time.",
    "author": "Jean de la Fontaine"
  },
  {
    "text": "Life is a progress, and not a station.",
    "author": "Ralph Emerson"
  },
  {
    "text": "All things change; nothing perishes.",
    "author": "Ovid"
  },
  {
    "text": "Absence makes the heart grow fonder.",
    "author": "Haynes Bayly"
  },
  {
    "text": "The pain passes, but the beauty remains.",
    "author": "Pierre Auguste Renoir"
  },
  {
    "text": "You won't skid if you stay in a rut.",
    "author": "Kin Hubbard"
  },
  {
    "text": "Happiness depends upon ourselves.",
    "author": "Aristotle"
  },
  {
    "text": "No one has ever become poor by giving.",
    "author": "Anne Frank"
  },
  {
    "text": "All is flux; nothing stays still.",
    "author": "Heraclitus"
  },
  {
    "text": "Memory is the mother of all wisdom.",
    "author": "Samuel Johnson"
  },
  {
    "text": "Kindness is the greatest wisdom.",
    "author": null
  },
  {
    "text": "Ignorance never settle a question.",
    "author": "Benjamin Disraeli"
  },
  {
    "text": "The beginning is always today.",
    "author": "Mary Wollstonecraft"
  },
  {
    "text": "Smile, breathe and go slowly.",
    "author": "Thich Nhat Hanh"
  },
  {
    "text": "A man is great by deeds, not by birth.",
    "author": "Chanakya"
  },
  {
    "text": "A good rest is half the work.",
    "author": null
  },
  {
    "text": "Be slow of tongue and quick of eye.",
    "author": "Cervantes"
  },
  {
    "text": "As you think, so shall you become.",
    "author": "Bruce Lee"
  },
  {
    "text": "Silence is a source of great strength.",
    "author": "Lao Tzu"
  },
  {
    "text": "Joy is the best makeup.",
    "author": "Anne Lamott"
  },
  {
    "text": "A jug fills drop by drop.",
    "author": "Buddha"
  },
  {
    "text": "We aim above the mark to hit the mark.",
    "author": "Ralph Emerson"
  },
  {
    "text": "Being angry never solves anything.",
    "author": "Catherine Pulsifer"
  },
  {
    "text": "What we see is mainly what we look for.",
    "author": null
  },
  {
    "text": "From wonder into wonder existence opens.",
    "author": "Lao Tzu"
  },
  {
    "text": "Whoso loves, believes the impossible.",
    "author": "Elizabeth Browning"
  },
  {
    "text": "He who knows himself is enlightened.",
    "author": "Lao Tzu"
  },
  {
    "text": "You only lose what you cling to.",
    "author": "Buddha"
  },
  {
    "text": "When in doubt, tell the truth.",
    "author": "Mark Twain"
  },
  {
    "text": "All great achievements require time.",
    "author": "Maya Angelou"
  },
  {
    "text": "He who angers you conquers you.",
    "author": "Elizabeth Kenny"
  },
  {
    "text": "Change your words. Change your world.",
    "author": null
  },
  {
    "text": "Great acts are made up of small deeds.",
    "author": "Lao Tzu"
  },
  {
    "text": "Open minds lead to open doors.",
    "author": null
  },
  {
    "text": "Much wisdom often goes with fewer words.",
    "author": "Sophocles"
  },
  {
    "text": "Take it easy, but take it.",
    "author": "Woody Guthrie"
  },
  {
    "text": "Things do not change, we change.",
    "author": "Henry Thoreau"
  },
  {
    "text": "When you lose, don't lose the lesson.",
    "author": null
  },
  {
    "text": "To be great is to be misunderstood.",
    "author": "Ralph Emerson"
  },
  {
    "text": "Never, never, never give up.",
    "author": "Winston Churchill"
  },
  {
    "text": "Try and fail, but don't fail to try.",
    "author": "Stephen Kaggwa"
  },
  {
    "text": "Peace begins with a smile.",
    "author": "Mother Teresa"
  },
  {
    "text": "Our passion is our strength.",
    "author": "Billie Armstrong"
  },
  {
    "text": "You cannot have what you do not want.",
    "author": "John Acosta"
  },
  {
    "text": "They can conquer who believe they can.",
    "author": "Virgil"
  },
  {
    "text": "Things do not change; we change.",
    "author": "Henry Thoreau"
  },
  {
    "text": "My reputation grows with every failure.",
    "author": "George Shaw"
  },
  {
    "text": "Almost everything comes from nothing.",
    "author": "Henri Amiel"
  },
  {
    "text": "Time you enjoyed wasting was not wasted.",
    "author": "John Lennon"
  },
  {
    "text": "Never promise more than you can perform.",
    "author": "Publilius Syrus"
  },
  {
    "text": "Take it easy but take it.",
    "author": "Woody Guthrie"
  },
  {
    "text": "Never mistake motion for action.",
    "author": "Ernest Hemingway"
  },
  {
    "text": "Begin, be bold, and venture to be wise.",
    "author": "Horace"
  },
  {
    "text": "Example has more followers than reason.",
    "author": "Christian Bovee"
  },
  {
    "text": "Nothing will work unless you do.",
    "author": "Maya Angelou"
  }
]

const app = new Vue({
  el: '#app',
  data: () => ({
    letters: Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
    quotes: quotes,
    currentQuote: "",
    quoteAuthor: "",
    guesses: [],
    strikes: []
  }),
  mounted() {
    this.generateQuote()
  },
  computed: {
    splitQuote() {
      return this.currentQuote.split(' ')
    },
    gameOver() {
      return this.strikes.length >= 5
    },
    completed() {
      return this.unrevealed.length === 0
    },
    unrevealed() {
      return [...this.currentQuote].filter(l => !this.guesses.includes(l) && l.match(/[a-zA-Z]/));
    }
  },
  methods: {
    generateQuote() {
      let quoteIndex = Math.floor(Math.random() * this.quotes.length)
      this.currentQuote = this.quotes[quoteIndex].text.toUpperCase()
      this.quoteAuthor = this.quotes[quoteIndex].author
    },
    guess(letter) {
      this.guesses.push(letter)
      if(!this.currentQuote.includes(letter)) {
        this.strikes.push(letter)
      }
    },
    isRevealed(letter) {
      if(!letter.match(/[a-zA-Z\s]/))
        return letter
      return this.guesses.includes(letter) || this.gameOver || this.completed ? letter : "_"
    },
    newGame() {
      this.guesses = []
      this.strikes = []
      this.generateQuote()
    }
  }
})

