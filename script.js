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
    case 'Calm Rabbit':
      pageUrl = './calmrabbit.html';
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
