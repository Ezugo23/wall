/*menu*/
function openNav() {
  document.getElementById("mySidenav")
  .style.width = "250px";
}

function closeNav(){
document.getElementById("mySidenav").style.width = "0";
}
const linksList = [
  { text: "Categories(51)", href: "Wallpapers.HTML" },
  { text: "Abstract(51)", href: "animals.html" },
  { text: "Cars(60)", href: "cars.HTML" },
  { text: "Dark/scary(69)", href: "dark.HTML" },
  { text: "Nature(57)", href: "nature.HTML" },
  { text: "Homepage", href: "index.html" },
];

// Get the <div> with id "mySidenav" from the DOM
const sidenav = document.getElementById("mySidenav");

// Iterate over the linksList and create <a> elements for each link
for (const link of linksList) {
  const linkElement = document.createElement("a");
  linkElement.href = link.href;
  linkElement.textContent = link.text;
  // Append the link to the sidenav
  sidenav.appendChild(linkElement); 
}

// Add the copyright element
const copyrightElement = document.createElement("footer");
copyrightElement.textContent = "copyright Iwu Pschal © 2023.";
sidenav.appendChild(copyrightElement);

//images
let anime = [{
  name:'one piece',
  image:'anime/piece.jpg',
  link: 'image.html?image=anime/piece.jpg',
},{
  name:'one piece',
  image:'anime/captain.jpg', 
  link: 'image.html?image=anime/captain.jpg', 
},{
  name:'one piece',
  image:'anime/joyboy.jpg',
  link: 'image.html?image=anime/joyboy.jpg', 
},{
},{
  name:'one piece',
  image:'anime/desk-luffy.jpg',
  link: 'image.html?image=anime/desk-luffy.jpg', 
},{
},{
  name:'one piece',
  image:'anime/desk-shanks.jpg', 
  link: 'image.html?image=anime/desk-shanks.jpg', 
},{
},{
  name:'one piece',
  image:'anime/desk-white.jpg',
  link: 'image.html?image=anime/desk-white.jpg', 
},{
  name:'one piece',
  image:'anime/news.jpg',
  link: 'image.html?image=anime/news.jpg', 
},{
  name:'one piece',
  image:'anime/desk-z (1).jpg',
  link: 'image.html?image=anime/desk-z (1).jpg', 
},{
  name:'one piece',
  image:'anime/desk-z (2).jpg',
  link: 'image.html?image=anime/desk-z (2).jpg', 
},{
  name:'demon slayer',
  image:'anime/cool-demon (1).jpg',
  link: 'image.html?image=anime/cool-demon (1).jpg',
},{
  name:'demon slayer',
  image:'anime/cool-demon (2).jpg', 
  link: 'image.html?image=anime/cool-demon (2).jpg',
},{
  name:'demon slayer',
  image:'anime/cool-demon (3).jpg',
  link: 'image.html?image=anime/cool-demon (3).jpg',
},{
  name:'demon slayer',
  image:'anime/anime-demon (3).jpg',
  link: 'image.html?image=anime/anime-demon (3).jpg',
},{
  name:'demon slayer',
  image:'anime/anime-demon (2).jpg', 
  link: 'image.html?image=anime/anime-demon (2)jpg',
},{
  name:'demon slayer',
  image:'anime/anime-demon (1).jpg',
  link: 'image.html?image=anime/anime-demon (1)jpg',
},{
  name:'demon slayer',
  image:'anime/anime-demon (4).jpg',
  link: 'image.html?image=anime/anime-demon (4)jpg',
},{
  name:'demon slayer',
  image:'anime/anime-demon (5).jpg',
  link: 'image.html?image=anime/anime-demon (5)jpg', 
},{
  name:'demon slayer',
  image:'anime/anime-demon (6).jpg',
  link: 'image.html?image=anime/anime-demon (6)jpg',
},{
  name:'jujutsu kaisen',
  image:'anime/juju-sato (1).png',
  link: 'image.html?image=anime/juju-sato (1).png',
},{
  name:'jujutsu kaisen',
  image:'anime/juju-sato (2).jpg', 
  link: 'image.html?image=anime/juju-sato (2).jpg',
},{
  name:'jujutsu kaisen',
  image:'anime/juju-sato (3).jpg',
  link: 'image.html?image=anime/juju-sato (3).jpg',
},{
  name:'jujutsu kaisen',
  image:'anime/juju-sato (4).jpg',
  link: 'image.html?image=anime/juju-sato (4).jpg',
},{
  name:'jujutsu kaisen',
  image:'anime/juju-sato (5).jpeg', 
  link: 'image.html?image=anime/juju-sato (5).jpg',
},{
  name:'jujutsu kaisen',
  image:'anime/juju-sato (6).jpg',
  link: 'image.html?image=anime/juju-sato (6).jpg',
},{
  name:'jujutsu kaisen',
  image:'anime/juju-sato (1).jpg',
  link: 'image.html?image=anime/juju-sato (1).jpg',
},{
  name:'jujutsu kaisen',
  image:'anime/juju-sato (15).jpg', 
  link: 'image.html?image=anime/juju-sato (15).jpg',
},{
  name:'jujutsu kaisen',
  image:'anime/juju-sato (16).jpg',
  link: 'image.html?image=anime/juju-sato (16).jpg',
},{
  name:'jujutsu kaisen',
  image:'anime/juju-sato (9).jpg',
  link: 'image.html?image=anime/juju-sato (9).jpg',
},{
  name:'jujutsu kaisen',
  image:'anime/juju-sato (11).jpg', 
  link: 'image.html?image=anime/juju-sato (11).jpg',
},{
  name:'jujutsu kaisen',
  image:'anime/juju-sato (10).jpg',
  link: 'image.html?image=anime/juju-sato (10).jpg',
},{
  name:'naruto',
  image:'anime/106914.jpg',
  link: 'image.html?image=anime/106914.jpg',
},{
  name:'naruto',
  image:'anime/106915.jpg',
  link: 'image.html?image=anime/106915.jpg', 
},{
  name:'naruto',
  image:'anime/106920.jpg',
  link: 'image.html?image=anime/106920.jpg',
},{
  name:'naruto',
  image:'anime/72706.jpg',
  link: 'image.html?image=anime/72706.jpg',
},{
  name:'naruto',
  image:'anime/72714.jpg', 
  link: 'image.html?image=anime/72714.jpg',
},{
  name:'naruto',
  image:'anime/82029.jpg',
  link: 'image.html?image=anime/82029.jpg',
},{
  name:'naruto',
  image:'anime/108142.jpg',
  link: 'image.html?image=anime/108142.jpg',
},{
  name:'naruto',
  image:'anime/110948.jpg',
  link: 'image.html?image=anime/110948.jpg', 
},{
  name:'naruto',
  image:'anime/106942.jpg',
  link: 'image.html?image=anime/106942.jpg', 
},{
  name:'hunter',
  image:'anime/HUNTER (4).jpg',
  link: 'image.html?image=anime/HUNTER (4).jpg', 
},{
  name:'hunter',
  image:'anime/HUNTER (2).jpg',
  link: 'image.html?image=anime/HUNTER (2).jpg', 
},{
  name:'hunter',
  image:'anime/HUNTER (3).jpg',
  link: 'image.html?image=anime/HUNTER (3).jpg', 
},{
  name:'hunter',
  image:'anime/HUNTER (9).jpg',
  link: 'image.html?image=anime/HUNTER (9).jpg',
},{
  name:'hunter',
  image:'anime/HUNTER (5).jpg',
  link: 'image.html?image=anime/HUNTER (5).jpg',
},{
  name:'hunter',
  image:'anime/HUNTER (6).jpg',
  link: 'image.html?image=anime/HUNTER (6).jpg',
},{
  name:'hunter',
  image:'anime/HUNTER (7).jpg',
  link: 'image.html?image=anime/HUNTER (7).jpg',
},{
  name:'hunter',
  image:'anime/HUNTER (8).jpg',
  link: 'image.html?image=anime/HUNTER (8).jpg',
},{
  name:'hunter',
  image:'anime/HUNTER (1).jpg',
  link: 'image.html?image=anime/HUNTER (1).jpg',
},{
  name:'seven deadly',
  image:'anime/DEADLY (1).jpg',
  link: 'image.html?image=anime/DEADLY (1).jpg',
},{
  name:'seven deadly',
  image:'anime/DEADLY (2).jpg',
  link: 'image.html?image=anime/DEADLY (2).jpg',
},{
  name:'seven deadly',
  image:'anime/DEADLY (3).jpg',
  link: 'image.html?image=anime/DEADLY (3).jpg',
},{
  name:'seven deadly',
  image:'anime/DEADLY (4).jpg',
  link: 'image.html?image=anime/DEADLY (4).jpg',
},{
  name:'seven deadly',
  image:'anime/DEADLY (5).jpg',
  link: 'image.html?image=anime/DEADLY (5).jpg',
},{
  name:'seven deadly',
  image:'anime/DEADLY (6).jpg',
  link: 'image.html?image=anime/DEADLY (6).jpg',
},{
  name:'seven deadly',
  image:'anime/DEADLY (7).jpg',
  link: 'image.html?image=anime/DEADLY (7).jpg',
},{
  name:'seven deadly',
  image:'anime/DEADLY (8).jpg',
  link: 'image.html?image=anime/DEADLY (8).jpg',
},{
  name:'seven deadly',
  image:'anime/DEADLY (1).png',
  link: 'image.html?image=anime/DEADLY (1).png',
}];
let animeHTML = '';

// Function to update the anime list based on the search input
function updateAnimeList(searchText) {
  animeHTML = '';

  anime.forEach((paperList) => {
    if (paperList.name && paperList.name.toLowerCase().includes(searchText.toLowerCase())) {
      animeHTML += `
      <div class="column">
      <div class="image-container">
        <a href="${paperList.link}">
        <div class="img-border">
          <img class="img-slide" src="${paperList.image}" width="100%">
          </div>
        </a>
        <a href="${paperList.link}" download="image.jpg">
        </a>
      </div>
      <a href="${paperList.link}"></a>
    </div>
      `;
    }
  });

  document.querySelector('.js-wall').innerHTML = animeHTML;
}

// Initial load
updateAnimeList('');

// Add an event listener to the search input
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (e) => {
  const searchText = e.target.value;
  updateAnimeList(searchText);
});