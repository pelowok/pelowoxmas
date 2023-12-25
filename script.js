// Function to generate a set of random names
function generateRandomNames() {
  const adjectives = ['Happy', 'Funny', 'Brave', 'Clever', 'Gentle', 'Silly', 'Kind', 'Lively', 'Calm', 'Bright'];
  const animals = ['Dog', 'Cat', 'Rabbit', 'Elephant', 'Lion', 'Tiger', 'Monkey', 'Horse', 'Dolphin', 'Penguin'];

  const names = [];

  for (const adjective of adjectives) {
    for (const animal of animals) {
      names.push(`${adjective} ${animal}`);
    }
  }

  return names.sort(); // Sort the names alphabetically
}

// Function to check if the page exists
async function checkPage(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    return false;
  }
}

// Function to play click sound
function playClick() {
  const clickSound = new Audio('click.mp3');
  clickSound.play();
}

// Create links with pre-generated unique strings
const gridContainer = document.getElementById('gridContainer');
const names = generateRandomNames();

for (const name of names) {
  const link = document.createElement('a');
  link.textContent = name;
  let pageUrl = `./${name.toLowerCase().replace(' ', '')}.html`;

  switch (name) {
    case 'Clever Elephant':
      pageUrl = './cleverelephant.html';
      break;
    case 'Kind Monkey':
      pageUrl = './kindmonkey.html';
      break;
    case 'Bright Horse':
      pageUrl = './brighthorse.html';
      break;
    case 'Silly Penguin':
      pageUrl = './sillypenguin.html';
      break;
    default:
      break;
  }

  link.href = pageUrl;

  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridItem.appendChild(link);

  // Check if the page exists
  checkPage(pageUrl).then(exists => {
    if (!exists) {
      link.href = './tryagain.html'; // Redirect to tryagain.html if page not found
    }
  });

  link.addEventListener('click', playClick); // Add click sound to links

  gridContainer.appendChild(gridItem);
}
