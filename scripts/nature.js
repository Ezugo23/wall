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
  { text: "Dark/Scary(69)", href: "dark.HTML" },
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
let nature = [{
  name:'nature',
  image:'NATURE/nature (1).jpg',
  link: 'image.html?image=nature/nature (1).jpg',
},{
  name:'nature',
  image:'NATURE/nature (2).jpg',
  link: 'image.html?image=nature/nature (2).jpg',
},{
  name:'nature',
  image:'NATURE/nature (3).jpg',
  link: 'image.html?image=nature/nature (3).jpg',
},{
  name:'nature',
  image:'NATURE/nature (4).jpg',
  link: 'image.html?image=nature/nature (4).jpg',
},{
  name:'nature',
  image:'NATURE/nature (5).jpg',
  link: 'image.html?image=nature/nature (5).jpg',
},{
  name:'nature',
  image:'NATURE/nature (6).jpg',
  link: 'image.html?image=nature/nature (6).jpg',
},{
  name:'nature',
  image:'NATURE/nature (7).jpg',
  link: 'image.html?image=nature/nature (7).jpg',
},{
  name:'nature',
  image:'NATURE/nature (8).jpg',
  link: 'image.html?image=nature/nature (8).jpg',
},{
  name:'nature',
  image:'NATURE/nature (9).jpg',
  link: 'image.html?image=nature/nature (9).jpg',
},{
  name:'nature',
  image:'NATURE/nature (10).jpg',
  link: 'image.html?image=nature/nature (10).jpg',
},{
  name:'nature',
  image:'NATURE/nature (11).jpg',
  link: 'image.html?image=nature/nature (11).jpg',
},{
  name:'nature',
  image:'NATURE/nature (12).jpg',
  link: 'image.html?image=nature/nature (12).jpg',
},{
  name:'nature',
  image:'NATURE/nature (13).jpg',
  link: 'image.html?image=nature/nature (13).jpg',
},{
  name:'nature',
  image:'NATURE/nature (14).jpg',
  link: 'image.html?image=nature/nature (14).jpg',
},{
  name:'nature',
  image:'NATURE/nature (15).jpg',
  link: 'image.html?image=nature/nature (15).jpg',
},{
  name:'nature',
  image:'NATURE/nature (16).jpg',
  link: 'image.html?image=nature/nature (16).jpg',
},{
  name:'nature',
  image:'NATURE/nature (17).jpg',
  link: 'image.html?image=nature/nature (17).jpg',
},{
  name:'nature',
  image:'NATURE/nature (18).jpg',
  link: 'image.html?image=nature/nature (18).jpg',
},{
  name:'nature',
  image:'NATURE/nature (19).jpg',
  link: 'image.html?image=nature/nature (19).jpg',
},{
  name:'nature',
  image:'NATURE/nature (20).jpg',
  link: 'image.html?image=nature/nature (20).jpg',
},{
  name:'nature',
  image:'NATURE/nature (21).jpg',
  link: 'image.html?image=nature/nature (21).jpg',
},{
  name:'nature',
  image:'NATURE/nature (22).jpg',
  link: 'image.html?image=nature/nature (22).jpg',
},{
  name:'nature',
  image:'NATURE/nature (23).jpg',
  link: 'image.html?image=nature/nature (23).jpg',
},{
  name:'nature',
  image:'NATURE/nature (24).jpg',
  link: 'image.html?image=nature/nature (24).jpg',
},{
  name:'nature',
  image:'NATURE/nature (25).jpg',
  link: 'image.html?image=nature/nature (25).jpg',
},{
  name:'nature',
  image:'NATURE/nature (26).jpg',
  link: 'image.html?image=nature/nature (26).jpg',
},{
  name:'nature',
  image:'NATURE/nature (27).jpg',
  link: 'image.html?image=nature/nature (27).jpg',
},{
  name:'nature',
  image:'NATURE/nature (28).jpg',
  link: 'image.html?image=nature/nature (28).jpg',
},{
  name:'nature',
  image:'NATURE/nature (29).jpg',
  link: 'image.html?image=nature/nature (29).jpg',
},{
  name:'nature',
  image:'NATURE/nature (30).jpg',
  link: 'image.html?image=nature/nature (30).jpg',
},{
  name:'nature',
  image:'NATURE/nature (31).jpg',
  link: 'image.html?image=nature/nature (31).jpg',
},{
  name:'nature',
  image:'NATURE/nature (32).jpg',
  link: 'image.html?image=nature/nature (32).jpg',
},{
  name:'nature',
  image:'NATURE/nature (33).jpg',
  link: 'image.html?image=nature/nature (33).jpg',
},{
  name:'nature',
  image:'NATURE/nature (35).jpg',
  link: 'image.html?image=nature/nature (35).jpg',
},{
  name:'nature',
  image:'NATURE/nature (36).jpg',
  link: 'image.html?image=nature/nature (36).jpg',
},{
  name:'nature',
  image:'NATURE/nature (37).jpg',
  link: 'image.html?image=nature/nature (37).jpg',
},{
  name:'nature',
  image:'NATURE/nature (38).jpg',
  link: 'image.html?image=nature/nature (38).jpg',
},{
  name:'nature',
  image:'NATURE/nature (39).jpg',
  link: 'image.html?image=nature/nature (39).jpg',
},{
  name:'nature',
  image:'NATURE/nature (40).jpg',
  link: 'image.html?image=nature/nature (40).jpg',
},{
  name:'nature',
  image:'NATURE/nature (41).jpg',
  link: 'image.html?image=nature/nature (41).jpg',
},{
  name:'nature',
  image:'NATURE/nature (42).jpg',
  link: 'image.html?image=nature/nature (42).jpg',
},{
  name:'nature',
  image:'NATURE/nature (43).jpg',
  link: 'image.html?image=nature/nature (43).jpg',
},{
  name:'nature',
  image:'NATURE/nature (44).jpg',
  link: 'image.html?image=nature/nature (44).jpg',
},{
  name:'nature',
  image:'NATURE/nature (45).jpg',
  link: 'image.html?image=nature/nature (45).jpg',
},{
  name:'nature',
  image:'NATURE/nature (46).jpg',
  link: 'image.html?image=nature/nature (46).jpg',
},{
  name:'nature',
  image:'NATURE/nature (47).jpg',
  link: 'image.html?image=nature/nature (47).jpg',
},{
  name:'nature',
  image:'NATURE/nature (48).jpg',
  link: 'image.html?image=nature/nature (48).jpg',
},{
  name:'nature',
  image:'NATURE/nature (49).jpg',
  link: 'image.html?image=nature/nature (49).jpg',
},{
  name:'nature',
  image:'NATURE/nature (50).jpg',
  link: 'image.html?image=nature/nature (50).jpg',
},{
  name:'nature',
  image:'NATURE/nature (51).jpg',
  link: 'image.html?image=nature/nature (51).jpg',
},{
  name:'nature',
  image:'NATURE/nature (52).jpg',
  link: 'image.html?image=nature/nature (52).jpg',
},{
  name:'nature',
  image:'NATURE/nature (53).jpg',
  link: 'image.html?image=nature/nature (53).jpg',
},{
  name:'nature',
  image:'NATURE/nature (54).jpg',
  link: 'image.html?image=nature/nature (54).jpg',
},{
  name:'nature',
  image:'NATURE/nature (55).jpg',
  link: 'image.html?image=nature/nature (55).jpg',
},{
  name:'nature',
  image:'NATURE/nature (56).jpg',
  link: 'image.html?image=nature/nature (56).jpg',
},{
  name:'nature',
  image:'NATURE/nature (57).jpg',
  link: 'image.html?image=nature/nature (57).jpg',
},{
  name:'nature',
  image:'NATURE/nature (34).jpg',
  link: 'image.html?image=nature/nature (34).jpg',
},];
let natureHTML = '';

// Function to update the anime list based on the search input
function updateNatureList(searchText) {
  natureHTML = '';

  nature.forEach((paperList) => {
    if (paperList.name && paperList.name.toLowerCase().includes(searchText.toLowerCase())) {
      natureHTML += `
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

  document.querySelector('.js-wall').innerHTML = natureHTML;
}

// Initial load
updateNatureList('');

// Add an event listener to the search input
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (e) => {
  const searchText = e.target.value;
  updateNatureList(searchText);
});