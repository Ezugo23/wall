//tags
var customSelect = document.querySelector(".custom-select");
var select = customSelect.querySelector("select");
var selectOptions = select.options;
var selectedDiv = document.createElement("div");
var optionsDiv = document.createElement("div");

customSelect.appendChild(selectedDiv);
customSelect.appendChild(optionsDiv);
selectedDiv.className = "select-selected";
optionsDiv.className = "select-items select-hide";

selectedDiv.innerHTML = selectOptions[select.selectedIndex].innerHTML;

for (var i = 1; i < selectOptions.length; i++) {
  (function(index) {
    var option = document.createElement("div");
    option.innerHTML = selectOptions[index].innerHTML;

    option.addEventListener("click", function(e) {
      select.selectedIndex = index - 1;
      selectedDiv.innerHTML = this.innerHTML;
      optionsDiv.classList.add("select-hide");
      updateWallpaper(selectedDiv.innerHTML);
    });

    optionsDiv.appendChild(option);
  })(i);
}

selectedDiv.addEventListener("click", function(e) {
  e.stopPropagation();
  closeAllSelect(this);
  optionsDiv.classList.toggle("select-hide");
  this.classList.toggle("select-arrow-active");
});

function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);

/*menu*/
function openNav() {
  document.getElementById("mySidenav")
  .style.width = "250px";
}

function closeNav(){
document.getElementById("mySidenav").style.width = "0";
}
const linksList = [
  { text: "Abstract(51)", href: "animals.html" },
  { text: "Anime(57)", href: "anime.html" },
  { text: "Cars(60)", href: "cars.HTML" },
  { text: "Dark/Scary(69)", href: "dark.HTML" },
  { text: "Nature(57)", href: "nature.HTML" },
  { text: "Homepage", href: "index.html" },
];

// Get the <div> with id "mySidenav" from the DOM
const sidenav = document.getElementById("mySidenav");

for (const link of linksList) {
  const linkElement = document.createElement("a");
  linkElement.href = link.href;
  linkElement.textContent = link.text;
 
  sidenav.appendChild(linkElement); 
}

const copyrightElement = document.createElement("footer");
copyrightElement.textContent = "copyright Iwu Pschal © 2023.";
sidenav.appendChild(copyrightElement);


//FOR THE SEARCH BAR
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

// Function to filter links based on user input
function filterLinks(searchText) {
  const filteredLinks = linksList.filter(link => {
    return link.text.toLowerCase().includes(searchText.toLowerCase());
  });
  return filteredLinks;
}

// Function to display search results
function displayResults(results) {
  searchResults.innerHTML = "";
  results.forEach(result => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = result.href;
    link.textContent = result.text;
    listItem.appendChild(link);
    searchResults.appendChild(listItem);
  });
}

// Event listener for the search input
searchInput.addEventListener("input", () => {
  const searchText = searchInput.value;
  const filteredLinks = filterLinks(searchText);
  displayResults(filteredLinks);
});

let wallPaper = [{
  image: 'hdimg/135655.jpg',
  tags: ['Recent'],
},{
  image: 'hdimg/avengers-2.jpg',
  tags: ['Recent'],
},{
  image:'hdimg/15_markus_janse-spiekeroog2.jpg',
  tags: ['Recent'],
}, {
  image:'hdimg/2014_srt_viper-1366x768.jpg',
  tags: ['Popular'],
}, {
  image:'hdimg/2014_chevrolet_chaparral_2x_vision_gran_turismo_concept-2560x1440.jpg',
  tags: ['Popular'],
}, {
  image:'hdimg/2013_chevrolet_camaro_ss_by_schwabenfolia-1600x900.jpg',
  tags: ['Popular'],
}, {
  image:'hdimg/1200px-El_Chaltén.jpg',
  tags: ['Recent'],
}, {
  image:'hdimg/400_days_movie-1920x1200.jpg',
  tags: ['Recent'],
}, {
  image:'hdimg/10_jens_zschekel_-_bastei-hdr.jpg',
  tags: ['Recent'],
}, {
  image:'hdimg/Angry-Birds-wallpaper-10495660.jpg',
  tags: ['Popular'],
}, {
  image:'hdimg/Batman_v_Superman-wallpaper-10585896.jpg',
  tags: ['Popular'],
}, {
  image:'hdimg/Art-wallpaper-10610655.jpg',
  tags: ['Popular'],
}, {
  image:'hdimg/6.jpg',
  tags: ['Recent'],
},{
  image:'hdimg/7.jpg',
  tags: ['Recent'],
},{
  image:'hdimg/8.jpg',
  tags: ['Recent'],
},{
  image:'hdimg/53956.jpg',
  tags: ['Popular'],
},{
  image:'hdimg/55099.jpg',
  tags: ['Popular'],
},{
  image:'hdimg/60766.jpg',
  tags: ['Popular'],
},{
  image:'hdimg/august_15th_india_independence_day-1920x1080.jpg',
  tags: ['Recent'],
},{
  image:'hdimg/2010_yogi_bear_hd-1600x900.jpg',
  tags: ['Recent'],
},{
  image:'hdimg/2012_tomb_raider_game-1920x1080.jpg',
  tags: ['Recent'],
},{
  image:'hdimg/66997.jpg',
  tags: ['Popular'],
},{
  image:'hdimg/78132.jpg', 
  tags: ['Popular'],
},{
  image:'hdimg/112985.jpg',
  tags:['Popular'],
}, {
  image:'hdimg/Anonymous-wallpaper-9769096.jpg',
  tags:['Recent'],
}, {
  image:'hdimg/Black_Pattern_Hd-wallpaper-9729108.jpg',
  tags:['Recent'],
}, {
  image:'hdimg/Carbon_World_map-wallpaper-10618706.jpg',
  tags:['Recent'],
}, {
  image:'hdimg/35797.jpg',
  tags:['Popular','Recent'],
}, {
  image:'hdimg/72714.jpg',
  tags:['Popular','Recent'],
}, {
  image:'hdimg/48279.jpg',
  tags:['Popular','Recent'],
}, {
  image:'hdimg/74655.jpg',
  tags:['Popular','Recent'],
}, {
  image:'hdimg/86214.jpg',
  tags:['Popular','Recent'],
}, {
  image:'hdimg/96142.jpg',
  tags:['Popular','Recent'],
}, {
  image:'hdimg/x_men_days_of_future_past-1366x768.jpg',
  tags:['Popular','Recent'],
},{
  image:'hdimg/winter_knight-2560x1440.jpg',
  tags:['Popular','Recent'],
},{
  image:'hdimg/world_of_warships-1920x1080.jpg',
  tags:['Popular','Recent'],
},{
  image:'hdimg/122981.jpg',
  tags:['Popular','Recent'],
},{
  image:'hdimg/111304.jpg',
  tags:['Popular','Recent'],
},{
  image:'hdimg/303889.jpg',
  tags:['Popular','Recent'],
},{
  image:'hdimg/150003.jpg',
  tags:['Popular','Recent'],
},{
  image:'hdimg/164951.jpg',
  tags:['Popular','Recent'],
},{
  image:'hdimg/135669.jpg',
  tags:['Popular','Recent'],
},{
  image:'hdimg/spiderman-infinity-war.jpg',
  tags:['Popular'],
},{
  image:'hdimg/miles-morales.jpg',
  tags:['Popular'],
},{
  image:'hdimg/the-last-of-us.jpg',
  tags:['Popular'],
},{
  image:'hdimg/devil-may-cry.jpg',
  tags:['Recent'],
},{
  image:'hdimg/downtown-new-york-city.jpg',
  tags:['Recent'],
},{
  image:'hdimg/dying-light-2.jpg',
  tags:['Recent'],
},{
  image:'hdimg/for-honor-marching-fire.jpg',
  tags:['Popular'],
},{
  image:'hdimg/for-honor-season-6.jpg',
  tags:['Popular'],
},{
  image:'hdimg/fallout.jpg',
  tags:['Popular'],
}];

let wallPaperHTML = '';

function updateWallpaper(tag) {
  let wallPaperHTML = '';

    wallPaper.forEach((paperList) => {
    if (tag === 'All' || paperList.tags.includes(tag)) {
      wallPaperHTML += `
        <div class="column">
          <div class="image-container">
            <img class="img-slide" src="${paperList.image}" width="100%">
            <a href="${paperList.image}" download="image.jpg">
              <img src="hdimg/icons8-download (1).gif" class="download-icon" width="30px">
            </a>
          </div>
        </div>
      `;
    }
    });

  document.querySelector('.js-wall').innerHTML = wallPaperHTML;
}

// Initial load with "All" selected
updateWallpaper('All');

// Add an event listener to the tag select dropdown
const tagSelect = document.getElementById('tagSelect');
tagSelect.addEventListener('change', (e) => {
  const selectedTag = e.target.value;
  updateWallpaper(selectedTag);
});







