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
  { text: "Cars(60)", href: "cars.HTML" },
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
let ds = [{
  name:'dark',
  image:'DS/dark (1).jpg',
  link: 'image.html?image=DS/dark (1).jpg',
},{
  name:'dark',
  image:'DS/dark (2).jpg',
  link: 'image.html?image=DS/dark (2).jpg',
},{
  name:'dark',
  image:'DS/dark (3).jpg',
  link: 'image.html?image=DS/dark (3).jpg',
},{
  name:'dark',
  image:'DS/dark (4).jpg',
  link: 'image.html?image=DS/dark (4).jpg',
},{
  name:'dark',
  image:'DS/dark (5).jpg',
  link: 'image.html?image=DS/dark (5).jpg',
},{
  name:'dark',
  image:'DS/dark (6).jpg',
  link: 'image.html?image=DS/dark (6).jpg',
},{
  name:'dark',
  image:'DS/dark (38).jpg',
  link: 'image.html?image=DS/dark (38).jpg',
},{
  name:'dark',
  image:'DS/dark (8).jpg',
  link: 'image.html?image=DS/dark (8).jpg',
},{
  name:'dark',
  image:'DS/dark (9).jpg',
  link: 'image.html?image=DS/dark (9).jpg',
},{
  name:'dark',
  image:'DS/dark (10).jpg',
  link: 'image.html?image=DS/dark (10).jpg',
},{
  name:'dark',
  image:'DS/dark (11).jpg',
  link: 'image.html?image=DS/dark (11).jpg',
},{
  name:'dark',
  image:'DS/dark (12).jpg',
  link: 'image.html?image=DS/dark (12).jpg',
},{
  name:'dark',
  image:'DS/dark (13).jpg',
  link: 'image.html?image=DS/dark (13).jpg',
},{
  name:'dark',
  image:'DS/dark (14).jpg',
  link: 'image.html?image=DS/dark (14).jpg',
},{
  name:'dark',
  image:'DS/dark (15).jpg',
  link: 'image.html?image=DS/dark (15).jpg',
},{
  name:'dark',
  image:'DS/dark (16).jpg',
  link: 'image.html?image=DS/dark (16).jpg',
},{
  name:'dark',
  image:'DS/dark (17).jpg',
  link: 'image.html?image=DS/dark (17).jpg',
},{
  name:'dark',
  image:'DS/dark (37).jpg',
  link: 'image.html?image=DS/dark (37).jpg',
},{
  name:'dark',
  image:'DS/dark (19).jpg',
  link: 'image.html?image=DS/dark (19).jpg',
},{
  name:'dark',
  image:'DS/dark (20).jpg',
  link: 'image.html?image=DS/dark (20).jpg',
},{
  name:'dark',
  image:'DS/dark (21).jpg',
  link: 'image.html?image=DS/dark (21).jpg',
},{
  name:'dark',
  image:'DS/dark (22).jpg',
  link: 'image.html?image=DS/dark (22).jpg',
},{
  name:'dark',
  image:'DS/dark (23).jpg',
  link: 'image.html?image=DS/dark (23).jpg',
},{
  name:'dark',
  image:'DS/dark (24).jpg',
  link: 'image.html?image=DS/dark (24).jpg',
},{
  name:'dark',
  image:'DS/dark (25).jpg',
  link: 'image.html?image=DS/dark (25).jpg',
},{
  name:'dark',
  image:'DS/dark (26).jpg',
  link: 'image.html?image=DS/dark (26).jpg',
},{
  name:'dark',
  image:'DS/dark (27).jpg',
  link: 'image.html?image=DS/dark (27).jpg',
},{
  name:'dark',
  image:'DS/dark (28).jpg',
  link: 'image.html?image=DS/dark (28).jpg',
},{
  name:'dark',
  image:'DS/dark (29).jpg',
  link: 'image.html?image=DS/dark (29).jpg',
},{
  name:'dark',
  image:'DS/dark (30).jpg',
  link: 'image.html?image=DS/dark (30).jpg',
},{
  name:'dark',
  image:'DS/dark (31).jpg',
  link: 'image.html?image=DS/dark (31).jpg',
},{
  name:'dark',
  image:'DS/dark (32).jpg',
  link: 'image.html?image=DS/dark (32).jpg',
},{
  name:'dark',
  image:'DS/dark (33).jpg',
  link: 'image.html?image=DS/dark (33).jpg',
},{
  name:'dark',
  image:'DS/dark (34).jpg',
  link: 'image.html?image=DS/dark (34).jpg',
},{
  name:'dark',
  image:'DS/dark (35).jpg',
  link: 'image.html?image=DS/dark (35).jpg',
},{
  name:'dark',
  image:'DS/dark (36).jpg',
  link: 'image.html?image=DS/dark (36).jpg',
},{
  name:'scary',
  image:'DS/scary (1).jpeg',
  link: 'image.html?image=DS/scary (1).jpeg',
},{
  name:'scary',
  image:'DS/scary (1).jpg',
  link: 'image.html?image=DS/scary (1).jpg',
},{
  name:'scary',
  image:'DS/scary (2).jpg',
  link: 'image.html?image=DS/scary (2).jpg',
},{
  name:'scary',
  image:'DS/scary (3).jpg',
  link: 'image.html?image=DS/scary (3).jpg',
},{
  name:'scary',
  image:'DS/scary (4).jpg',
  link: 'image.html?image=DS/scary (4).jpg',
},{
  name:'scary',
  image:'DS/scary (6).jpg',
  link: 'image.html?image=DS/scary (6).jpg',
},{
  name:'scary',
  image:'DS/scary (5).jpg',
  link: 'image.html?image=DS/scary (5).jpg',
},{
  name:'scary',
  image:'DS/scary (9).jpg',
  link: 'image.html?image=DS/scary (9).jpg',
},{
  name:'scary',
  image:'DS/scary (8).jpg',
  link: 'image.html?image=DS/scary (8).jpg',
},{
  name:'scary',
  image:'DS/scary (11).jpg',
  link: 'image.html?image=DS/scary (11).jpg',
},{
  name:'scary',
  image:'DS/dark (39).jpg',
  link: 'image.html?image=DS/dark (39).jpg',
},{
  name:'scary',
  image:'DS/scary (10).jpg',
  link: 'image.html?image=DS/scary (10).jpg',
},{
  name:'scary',
  image:'DS/scary (12).jpg',
  link: 'image.html?image=DS/scary (12).jpg',
},{
  name:'scary',
  image:'DS/scary (13).jpg',
  link: 'image.html?image=DS/scary (13).jpg',
},{
  name:'scary',
  image:'DS/scary (14).jpg',
  link: 'image.html?image=DS/scary (14).jpg',
},{
  name:'scary',
  image:'DS/scary (15).jpg',
  link: 'image.html?image=DS/scary (15).jpg',
},{
  name:'scary',
  image:'DS/scary (16).jpg',
  link: 'image.html?image=DS/scary (16).jpg',
},{
  name:'scary',
  image:'DS/scary (19).jpg',
  link: 'image.html?image=DS/scary (19).jpg',
},{
  name:'scary',
  image:'DS/scary (18).jpg',
  link: 'image.html?image=DS/scary (18).jpg',
},{
  name:'scary',
  image:'DS/scary (17).jpg',
  link: 'image.html?image=DS/scary (17).jpg',
},{
  name:'scary',
  image:'DS/scary (20).jpg',
  link: 'image.html?image=DS/scary (20).jpg',
},{
  name:'scary',
  image:'DS/scary (21).jpg',
  link: 'image.html?image=DS/scary (21).jpg',
},{
  name:'scary',
  image:'DS/scary (22).jpg',
  link: 'image.html?image=DS/scary (22).jpg',
},{
  name:'scary',
  image:'DS/scary (23).jpg',
  link: 'image.html?image=DS/scary (23).jpg',
},{
  name:'scary',
  image:'DS/scary (24).jpg',
  link: 'image.html?image=DS/scary (24).jpg',
},{
  name:'scary',
  image:'DS/scary (25).jpg',
  link: 'image.html?image=DS/scary (25).jpg',
},{
  name:'scary',
  image:'DS/scary (1).gif',
  link: 'image.html?image=DS/scary (1).gif',
},{
  name:'scary',
  image:'DS/scary (27).jpg',
  link: 'image.html?image=DS/scary (27).jpg',
},{
  name:'scary',
  image:'DS/scary (7).jpg',
  link: 'image.html?image=DS/scary (7).jpg',
},{
  name:'scary',
  image:'DS/scary (26).jpg',
  link: 'image.html?image=DS/scary (26).jpg',
},];
let dsHTML = '';

// Function to update the anime list based on the search input
function updateDsList(searchText) {
  dsHTML = '';

  ds.forEach((paperList) => {
    if (paperList.name && paperList.name.toLowerCase().includes(searchText.toLowerCase())) {
      dsHTML += `
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

  document.querySelector('.js-wall').innerHTML = dsHTML;
}

// Initial load
updateDsList('');

// Add an event listener to the search input
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (e) => {
  const searchText = e.target.value;
  updateDsList(searchText);
});