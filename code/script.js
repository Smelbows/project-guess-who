// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutBtn = document.getElementById('filter');
const winOrLoseText = document.getElementById('winOrLoseText');
const winOrLoseSection = document.getElementById('winOrLose');
const playAgainBtn = document.getElementById('playAgain');

// Array with all the characters, as objects
const MUSHROOMS = [
  {
    name: 'Chanterelle',
    img: 'images/jabala.svg',
    sporeDispersal: 'primative gills',
    growsOnTrees: 'no',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['yellow', 'funnel'],
    stalkProperties: ['bare'],
    swedishName: 'Kantarell',
    latinName: 'Cantharellus cibarius'
  },
  {
    name: 'Trumpet Chanterelle',
    img: 'images/jabala.svg',
    sporeDispersal: 'primative gills',
    growsOnTrees: 'no',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['brown', 'funnel'],
    stalkProperties: ['yellow', 'bare'],
    swedishName: 'Tratt Kantarell',
    latinName: 'Cantharellus tubaeformis'
  },
  {
    name: 'Shaggy Inkcap',
    img: 'images/jabala.svg',
    sporeDispersal: 'gills',
    growsOnTrees: 'no',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['white', 'conical'],
    stalkProperties: ['white', 'ring'],
    swedishName: 'Fjällig bläcksvamp',
    latinName: 'Coprinus comatus'
  },
  {
    name: 'Saffron Milkcap',
    img: 'images/jabala.svg',
    sporeDispersal: 'gills',
    growsOnTrees: 'no',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['orange', 'depressed'],
    stalkProperties: ['orange', 'bare'],
    swedishName: 'Tallblodriska',
    latinName: 'Lactarius deliciosus'
  },
  {
    name: 'Charcoal Burner',
    img: 'images/jabala.svg',
    sporeDispersal: 'gills',
    growsOnTrees: 'no',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['purple', 'green', 'brown', 'flat', 'convex'],
    stalkProperties: ['white', 'bare'],
    swedishName: 'Brokkremla',
    latinName: 'Russula cyanoxantha'
  },
  {
    name: 'Oyster',
    img: 'images/jabala.svg',
    sporeDispersal: 'gills',
    growsOnTrees: 'yes',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['grey', 'cream', 'brown', 'offset'],
    stalkProperties: ['white'],
    swedishName: 'Ostronmussling',
    latinName: 'Pleurotus ostreatus'
  },
  {
    name: 'The Sickener',
    img: 'images/jabala.svg',
    sporeDispersal: 'gills',
    growsOnTrees: 'no',
    poisonousOrEdible: 'poisonous',
    capOrBracketProperties: ['red', 'convex', 'flat'],
    stalkProperties: ['white', 'bare'],
    swedishName: 'Giftkremla',
    latinName: 'Russula emetica'
  },
  {
    name: 'Fly Agaric',
    img: 'images/jabala.svg',
    sporeDispersal: 'gills',
    growsOnTrees: 'no',
    poisonousOrEdible: 'poisonous',
    capOrBracketProperties: ['red', 'white', 'convex', 'flat'],
    stalkProperties: ['white', 'ring', 'volva (foot)'],
    swedishName: 'Röd flugsvamp',
    latinName: 'Amanita muscaria'
  },
  {
    name: 'Deathcap',
    img: 'images/jabala.svg',
    sporeDispersal: 'gills',
    growsOnTrees: 'no',
    poisonousOrEdible: 'poisonous',
    capOrBracketProperties: ['green', 'convex', 'flat'],
    stalkProperties: ['white', 'ring', 'volva (foot)'],
    swedishName: 'Lömsk flugsvamp',
    latinName: 'Amanita phalloides'
  },
  {
    name: 'Destroying Angel',
    img: 'images/jabala.svg',
    sporeDispersal: 'gills',
    growsOnTrees: 'no',
    poisonousOrEdible: 'poisonous',
    capOrBracketProperties: ['white', 'convex', 'flat'],
    stalkProperties: ['white', 'ring', 'volva (foot)'],
    swedishName: 'Vit flugsvamp',
    latinName: 'Amanita virosa'
  },
  {
    name: 'Jelly Ear',
    img: 'images/jabala.svg',
    sporeDispersal: 'none',
    growsOnTrees: 'yes',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['orange', 'cream', 'brown'],
    stalkProperties: [],
    swedishName: 'Judasöra',
    latinName: 'Auricularia auricula-judae'
  },
  {
    name: 'Yellow Stagshorn',
    img: 'images/jabala.svg',
    sporeDispersal: 'none',
    growsOnTrees: 'yes',
    poisonousOrEdible: 'not edible',
    capOrBracketProperties: ['yellow'],
    stalkProperties: [],
    swedishName: 'Gullhorn',
    latinName: 'Calocera viscosa'
  },
  {
    name: 'Velvet Bolete',
    img: 'images/jabala.svg',
    sporeDispersal: 'pores',
    growsOnTrees: 'no',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['yellow', 'cream', 'convex'],
    stalkProperties: ['yellow', 'bare'],
    swedishName: 'Sandsopp',
    latinName: 'Suillus variegatus'
  },
  {
    name: 'Orange Birch Bolette',
    img: 'images/jabala.svg',
    sporeDispersal: 'pores',
    growsOnTrees: 'no',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['orange', 'red', 'convex'],
    stalkProperties: ['white', 'black/brown speckles'],
    swedishName: 'Tegelsopp',
    latinName: 'Leccinum versipelle'
  },
  {
    name: 'Dryads Saddle',
    img: 'images/jabala.svg',
    sporeDispersal: 'pores',
    growsOnTrees: 'no',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['cream', 'yellow', 'depressed', 'offset'],
    stalkProperties: ['bare'],
    swedishName: 'Fjällticka',
    latinName: 'Cerioporus squamosus'
  },
  {
    name: 'Chicken of the woods',
    img: 'images/jabala.svg',
    sporeDispersal: 'pores',
    growsOnTrees: 'yes',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['yellow', 'flat'],
    stalkProperties: [],
    swedishName: 'Svavelticka',
    latinName: 'Laetiporus sulphureus'
  },
  {
    name: 'Birch Polypore',
    img: 'images/jabala.svg',
    sporeDispersal: 'pores',
    growsOnTrees: 'yes',
    poisonousOrEdible: 'not edible',
    capOrBracketProperties: ['grey', 'brown', 'hoof-shaped'],
    stalkProperties: [],
    swedishName: 'Björkticka',
    latinName: 'Fomitopsis betulina'
  },
  {
    name: 'Tinder fungus',
    img: 'images/jabala.svg',
    sporeDispersal: 'pores',
    growsOnTrees: 'yes',
    poisonousOrEdible: 'not edible',
    capOrBracketProperties: ['grey', 'hoof-shaped'],
    stalkProperties: [],
    swedishName: 'Fnöskticka',
    latinName: 'Fomes fomentarius'
  },
  {
    name: 'Giant puffball',
    img: 'images/jabala.svg',
    sporeDispersal: 'puffs',
    growsOnTrees: 'no',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['white', 'round'],
    stalkProperties: ['white'],
    swedishName: 'Jätteröksvamp',
    latinName: 'Calvatia gigantea'
  },
  {
    name: 'Common puffball',
    img: 'images/jabala.svg',
    sporeDispersal: 'puffs',
    growsOnTrees: 'no',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['white', 'round'],
    stalkProperties: ['white'],
    swedishName: 'Vårtig röksvamp',
    latinName: 'Lycoperdon perlatum'
  },
  {
    name: 'Wood Hedgehog',
    img: 'images/jabala.svg',
    sporeDispersal: 'teeth',
    growsOnTrees: 'no',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['orange', 'yellow', 'depressed'],
    stalkProperties: ['white', 'bare'],
    swedishName: 'Blek taggsvamp',
    latinName: 'Hydnum repandum'
  },
  {
    name: 'Scaly Tooth',
    img: 'images/jabala.svg',
    sporeDispersal: 'teeth',
    growsOnTrees: 'no',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['brown', 'depressed', 'flat'],
    stalkProperties: ['brown', 'white', 'bare'],
    swedishName: 'Fjällig taggsvamp',
    latinName: 'Sarcodon imbricatus'
  },
  {
    name: 'Lions Mane',
    img: 'images/jabala.svg',
    sporeDispersal: 'teeth',
    growsOnTrees: 'yes',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['white', 'cream'],
    stalkProperties: ['white', 'cream'],
    swedishName: 'Igelkottstaggsvamp',
    latinName: 'Hericium erinaceus'
  },
  
]

const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = MUSHROOMS
  generateBoard()
  setSecret()
  // What else should happen when we start the game?
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.value
  console.log(category)
  console.log(questions)
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value
  console.log(value)

  currentQuestion = {
    category: category,
    value: value
    
  };
};

// Checks if the secret character has the chosen characteristic
const checkQuestion = () => {
  const { category, value } = currentQuestion
  let keep = false
// checks if the values are the same but in a different way depending on whether the object value is a string or array 
  if (typeof secret[category] === 'string'){
    keep = (secret[category] === value)
    }

  else if (Array.isArray(secret[category])){
    keep = (secret[category].includes(value))
  }

  else {
    console.log("a problem occured")
  }
  alertUserOfAnswer(keep)
  filterCharacters(keep)
};

const alertUserOfAnswer = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all the people with ${value} ${category}`
      );
    } else {
      alert(`No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}`
      )
    };
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (Array.isArray(secret[category])) {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    };
  } 
   else {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    };
  };
  generateBoard()
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  let personToCheck = personToConfirm
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  let userConfirmed = window.confirm(`Do you want to guess ${personToConfirm}?`)
  // If the player wants to guess, invoke the checkMyGuess function.
  if (userConfirmed) {
    checkMyGuess(personToCheck)
  }
  else {
    alert("Guess cancelled")
  };
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  const userHasGuessedCorrectly = (secret.name === personToCheck);
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  if (userHasGuessedCorrectly) {
    winOrLoseText.innerHTML = "Well Done! You guessed correctly and one the game!"
  }
  else {
    winOrLoseText.innerHTML = "Oh no! You guessed wrong, you lose!"
  };
  // 3. Show the win or lose section
  winOrLoseSection.classList.toggle('display');

  // 4. Hide the game board
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
findOutBtn.addEventListener('click', checkQuestion);
playAgainBtn.addEventListener('click', () => {
  winOrLoseSection.classList.toggle('display');
  start()
});
