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
  { text: "Anime(57)", href: "anime.html" },
  { text: "Dark/Scary(69)", href: "dark.HTML" },
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
let car = [{
  name:'black',
  image:'cars/black (1).jpg',
  link: 'image.html?image=cars/black (1).jpg',
},{
  name:'black',
  image:'cars/black (2).jpg',
  link: 'image.html?image=cars/black (2).jpg',
},{
  name:'black',
  image:'cars/black (3).jpg',
  link: 'image.html?image=cars/black (3).jpg',
},{
  name:'black',
  image:'cars/black (4).jpg',
  link: 'image.html?image=cars/black (4).jpg',
},{
  name:'black',
  image:'cars/black (5).jpg',
  link: 'image.html?image=cars/black (5).jpg',
},{
  name:'black',
  image:'cars/black (6).jpg',
  link: 'image.html?image=cars/black (6).jpg',
},{
  name:'black',
  image:'cars/black (7).jpg',
  link: 'image.html?image=cars/black (7).jpg',
},{
  name:'black',
  image:'cars/black (8).jpg',
  link: 'image.html?image=cars/black (8).jpg',
},{
  name:'black',
  image:'cars/black (9).jpg',
  link: 'image.html?image=cars/black (9).jpg',
},{
  name:'black',
  image:'cars/black (10).jpg',
  link: 'image.html?image=cars/black (10).jpg',
},{
  name:'black',
  image:'cars/black (11).jpg',
  link: 'image.html?image=cars/black (11).jpg',
},{
  name:'black',
  image:'cars/black (12).jpg',
  link: 'image.html?image=cars/black (12).jpg',
},{
  name:'black',
  image:'cars/black (13).jpg',
  link: 'image.html?image=cars/black (13).jpg',
},{
  name:'black',
  image:'cars/black (1).jpg',
  link: 'image.html?image=cars/black (14).jpg',
},{
  name:'black',
  image:'cars/black (1).jpg',
  link: 'image.html?image=cars/black (1).jpg',
},{
  name:'classic',
  image:'cars/class (1).jpg',
  link: 'image.html?image=cars/class (1).jpg',
},{
  name:'classic',
  image:'cars/class (2).jpg',
  link: 'image.html?image=cars/class (2).jpg',
},{
  name:'classic',
  image:'cars/class (3).jpg',
  link: 'image.html?image=cars/class (3).jpg',
},{
  name:'classic',
  image:'cars/class (4).jpg',
  link: 'image.html?image=cars/class (4).jpg',
},{
  name:'classic',
  image:'cars/class (5).jpg',
  link: 'image.html?image=cars/class (5).jpg',
},{
  name:'classic',
  image:'cars/class (6).jpg',
  link: 'image.html?image=cars/class (6).jpg',
},{
  name:'classic',
  image:'cars/class (7).jpg',
  link: 'image.html?image=cars/class (7).jpg',
},{
  name:'classic',
  image:'cars/class (8).jpg',
  link: 'image.html?image=cars/class (8).jpg',
},{
  name:'classic',
  image:'cars/class (9).jpg',
  link: 'image.html?image=cars/class (9).jpg',
},{
  name:'classic',
  image:'cars/class (10).jpg',
  link: 'image.html?image=cars/class (10).jpg',
},{
  name:'classic',
  image:'cars/class (11).jpg',
  link: 'image.html?image=cars/class (11).jpg',
},{
  name:'classic',
  image:'cars/class (12).jpg',
  link: 'image.html?image=cars/class (12).jpg',
},{
  name:'slammed',
  image:'cars/slam (8).jpg',
  link: 'image.html?image=cars/slam (8).jpg',
},{
  name:'slammed',
  image:'cars/slam (2).jpg',
  link: 'image.html?image=cars/slam (2).jpg',
},{
  name:'slammed',
  image:'cars/slam (3).jpg',
  link: 'image.html?image=cars/slam (3).jpg',
},{
  name:'slammed',
  image:'cars/slam (4).jpg',
  link: 'image.html?image=cars/slam (4).jpg',
},{
  name:'slammed',
  image:'cars/slam (1).jpg',
  link: 'image.html?image=cars/slam (1).jpg',
},{
  name:'slammed',
  image:'cars/slam (6).jpg',
  link: 'image.html?image=cars/slam (6).jpg',
},{
  name:'slammed',
  image:'cars/slam (1).jpeg',
  link: 'image.html?image=cars/slam (1).jpeg',
},{
  name:'slammed',
  image:'cars/slam (7).jpg',
  link: 'image.html?image=cars/slam (7).jpg',
},{
  name:'slammed',
  image:'cars/slam (9).jpg',
  link: 'image.html?image=cars/slam (9).jpg',
},{
  name:'slammed',
  image:'cars/slam (10).jpg',
  link: 'image.html?image=cars/slam (10).jpg',
},{
  name:'slammed',
  image:'cars/slam (11).jpg',
  link: 'image.html?image=cars/slam (11).jpg',
},{
  name:'slammed',
  image:'cars/slam (12).jpg',
  link: 'image.html?image=cars/slam (12).jpg',
},{
  name:'slammed',
  image:'cars/slam (13).jpg',
  link: 'image.html?image=cars/slam (13).jpg',
},{
  name:'slammed',
  image:'cars/slam (14).jpg',
  link: 'image.html?image=cars/slam (14).jpg',
},{
  name:'slammed',
  image:'cars/slam (5).jpg',
  link: 'image.html?image=cars/slam (5).jpg',
},{
  name:'super',
  image:'cars/super (1).jpg',
  link: 'image.html?image=cars/super (1).jpg',
},{
  name:'super',
  image:'cars/super (2).jpg',
  link: 'image.html?image=cars/super (2).jpg',
},{
  name:'super',
  image:'cars/super (3).jpg',
  link: 'image.html?image=cars/super (3).jpg',
},{
  name:'super',
  image:'cars/super (4).jpg',
  link: 'image.html?image=cars/super (4).jpg',
},{
  name:'super',
  image:'cars/super (5).jpg',
  link: 'image.html?image=cars/super (5).jpg',
},{
  name:'super',
  image:'cars/super (6).jpg',
  link: 'image.html?image=cars/super (6).jpg',
},{
  name:'super',
  image:'cars/super (7).jpg',
  link: 'image.html?image=cars/super (7).jpg',
},{
  name:'super',
  image:'cars/super (8).jpg',
  link: 'image.html?image=cars/super (8).jpg',
},{
  name:'super',
  image:'cars/super (9).jpg',
  link: 'image.html?image=cars/super (9).jpg',
},{
  name:'super',
  image:'cars/super (10).jpg',
  link: 'image.html?image=cars/super (10).jpg',
},{
  name:'super',
  image:'cars/super (11).jpg',
  link: 'image.html?image=cars/super (11).jpg',
},{
  name:'super',
  image:'cars/super (12).jpg',
  link: 'image.html?image=cars/super (12).jpg',
},{
  name:'super',
  image:'cars/super (13).jpg',
  link: 'image.html?image=cars/super (13).jpg',
},{
  name:'super',
  image:'cars/super (14).jpg',
  link: 'image.html?image=cars/super (14).jpg',
},{
  name:'super',
  image:'cars/super (15).jpg',
  link: 'image.html?image=cars/super (15).jpg',
},{
  name:'super',
  image:'cars/super (16).jpg',
  link: 'image.html?image=cars/super (16).jpg',
},{
  name:'super',
  image:'cars/super (17).jpg',
  link: 'image.html?image=cars/super (17).jpg',
},{
  name:'super',
  image:'cars/super (18).jpg',
  link: 'image.html?image=cars/super (18).jpg',
},];
let carHTML = '';

// Function to update the anime list based on the search input
function updateCarList(searchText) {
  carHTML = '';

  car.forEach((paperList) => {
    if (paperList.name && paperList.name.toLowerCase().includes(searchText.toLowerCase())) {
      carHTML += `
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

  document.querySelector('.js-wall').innerHTML = carHTML;
}

// Initial load
updateCarList('');

// Add an event listener to the search input
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (e) => {
  const searchText = e.target.value;
  updateCarList(searchText);
});