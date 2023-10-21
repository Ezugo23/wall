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
  { text: "Anime(57)", href: "anime.html" },
  { text: "Cars(60)", href: "cars.HTML" },
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
let abstract = [{
  name:'hd',
  image:'ABSTRACT/abstract (1).jpg',
  link: 'image.html?image=ABSTRACT/abstract (1).jpg', 
},{
  name:'hd',
  image:'ABSTRACT/abstract (2).jpg',
  link:'image.html?image=ABSTRACT/abstract (2).jpg',
},{
  name:'hd',
  image:'ABSTRACT/abstract (3).jpg',
  link: 'image.html?image=ABSTRACT/abstract (3).jpg', 
},{
  name:'hd',
  image:'ABSTRACT/abstract (4).jpg',
  link: 'image.html?image=ABSTRACT/abstract (4).jpg',
},{
  name:'hd',
  image:'ABSTRACT/abstract (5).jpg',
  link:'image.html?image=ABSTRACT/abstract (5).jpg',
},{
  name:'hd',
  image:'ABSTRACT/abstract (13).jpg',
  link:'image.html?image=ABSTRACT/abstract (13).jpg',
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (7).jpg',
  link: 'image.html?image=ABSTRACT/abstract (7).jpg',
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (8).jpg',
  link: 'image.html?image=ABSTRACT/abstract (8).jpg',
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (9).jpg',
  link: 'image.html?image=ABSTRACT/abstract (9).jpg',
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (16).jpg',
  link: 'image.html?image=ABSTRACT/abstract (16).jpg', 
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (12).jpg',
  link: 'image.html?image=ABSTRACT/abstract (12).jpg',
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (22).jpg',
  link: 'image.html?image=ABSTRACT/abstract (22).jpg',
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (14).jpg',
  link: 'image.html?image=ABSTRACT/abstract (14).jpg',
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (25).jpg',
  link: 'image.html?image=ABSTRACT/abstract (25).jpg',
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (6).jpg',
  link: 'image.html?image=ABSTRACT/abstract (6).jpg',
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (17).jpg',
  link: 'image.html?image=ABSTRACT/abstract (17).jpg',
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (18).jpg',
  link: 'image.html?image=ABSTRACT/abstract (18).jpg',
},{
  name:'hd',
  image:'ABSTRACT/abstract (19).jpg',
  link: 'image.html?image=ABSTRACT/abstract (19).jpg',
},{
  name:'hd',
  image:'ABSTRACT/abstract (20).jpg',
  link: 'image.html?image=ABSTRACT/abstract (21).jpg',
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (21).jpg',
  link: 'image.html?image=ABSTRACT/abstract (21).jpg', 
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (11).jpg',
  link: 'image.html?image=ABSTRACT/abstract (11).jpg', 
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (28).jpg',
  link: 'image.html?image=ABSTRACT/abstract (28).jpg',
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (24).jpg',
  link: 'image.html?image=ABSTRACT/abstract (24).jpg',
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (15).jpg',
  link: 'image.html?image=ABSTRACT/abstract (15).jpg',
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (40).jpg',
  link: 'image.html?image=ABSTRACT/abstract (40).jpg',
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (23).jpg',
  link: 'image.html?image=ABSTRACT/abstract (23).jpg',
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (29).jpg',
  link: 'image.html?image=ABSTRACT/abstract (29).jpg',
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (30).jpg',
  link: 'image.html?image=ABSTRACT/abstract (30).jpg',
},{
  name:'hd',
  image:'ABSTRACT/abstract (31).jpg',
  link: 'image.html?image=ABSTRACT/abstract (31).jpg',
},{
  name:'hd',
  image:'ABSTRACT/abstract (32).jpg',
  link: 'image.html?image=ABSTRACT/abstract (32).jpg',
},{
  name:'4k',
  image:'ABSTRACT/abstract (33).jpg',
  link: 'image.html?image=ABSTRACT/abstract (33).jpg',
},{
  name:'4k',
  image:'ABSTRACT/abstract (34).jpg',
  link: 'image.html?image=ABSTRACT/abstract (34).jpg',
},{
  name:'4k',
  image:'ABSTRACT/abstract (35).jpg',
  link: 'image.html?image=ABSTRACT/abstract (35).jpg',
},{
  name:'4k',
  image:'ABSTRACT/abstract (36).jpg',
  link: 'image.html?image=ABSTRACT/abstract (36).jpg',
},{
  name:'4k',
  image:'ABSTRACT/abstract (37).jpg',
  link: 'image.html?image=ABSTRACT/abstract (37).jpg',
},{
  name:'4k',
  image:'ABSTRACT/abstract (38).jpg',
  link: 'image.html?image=ABSTRACT/abstract (38).jpg',
},{
  name:'4k',
  image:'ABSTRACT/abstract (39).jpg',
  link:'image.html?image=ABSTRACT/abstract (39).jpg',
},{
  name:'4k',
  image:'ABSTRACT/abstract (26).jpg',
  link: 'image.html?image=ABSTRACT/abstract (26).jpg',
},{
  name:'4k',
  image:'ABSTRACT/abstract (41).jpg',
  link: 'image.html?image=ABSTRACT/abstract (41).jpg',
},{
  name:'4k',
  image:'ABSTRACT/abstract (42).jpg',
  link: 'image.html?image=ABSTRACT/abstract (42).jpg',
},{
  name:'4k',
  image:'ABSTRACT/abstract (43).jpg',
  link:  'image.html?image=ABSTRACT/abstract (43).jpg',
},{
  name:'4k',
  image:'ABSTRACT/abstract (44).jpg',
  link:  'image.html?image=ABSTRACT/abstract (44).jpg',
},{
  name:'4k',
  image:'ABSTRACT/abstract (45).jpg',
  link: 'image.html?image=ABSTRACT/abstract (45).jpg',
},{
  name:'4k',
  image:'ABSTRACT/abstract (46).jpg',
  link:  'image.html?image=ABSTRACT/abstract (46).jpg',
},{ 
  name:'4k',
  image:'ABSTRACT/abstract (47).jpg',
  link: 'image.html?image=ABSTRACT/abstract (47).jpg',
},{
  name:'4k',
  image:'ABSTRACT/abstract (48).jpg',
  link: 'image.html?image=ABSTRACT/abstract (48).jpg',
},{
  name:'4k',
  image:'ABSTRACT/abstract (49).jpg',
  link: 'image.html?image=ABSTRACT/abstract (49).jpg',
},{
  name:'4k',
  image:'ABSTRACT/abstract (50).jpg',
  link: 'image.html?image=ABSTRACT/abstract (50).jpg',
},{
  name:'4k',
  image:'ABSTRACT/abstract (1).png',
  link: 'image.html?image=ABSTRACT/abstract (1).png', 
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (27).jpg',
  link: 'image.html?image=ABSTRACT/abstract (27).jpg',
},{
  name:'graffiti',
  image:'ABSTRACT/abstract (10).jpg',
  link: 'image.html?image=ABSTRACT/abstract (10).jpg', 
},];
let abstractHTML = '';

// Function to update the abstract list based on the search input
function updateAbstractList(searchText) {
  abstractHTML = '';

  abstract.forEach((paperList) => {
    if (paperList.name && paperList.name.toLowerCase().includes(searchText.toLowerCase())) {
      abstractHTML += `
      <div class="column">
        <div class="image-container">
          <a href="${paperList.link}">
            <div class="img-border">
              <img class="img-slide" src="${paperList.image}" width="100%">
            </div>
          </a>
          <a href="${paperList.link}" download="image.jpg"></a>
        </div>
        <a href="${paperList.link}"></a>
      </div>
      `;
    }
  });

  document.querySelector('.js-wall').innerHTML = abstractHTML;
}

// Initial load
updateAbstractList('');

// Add an event listener to the search input
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (e) => {
  const searchText = e.target.value;
  updateAbstractList(searchText);
});