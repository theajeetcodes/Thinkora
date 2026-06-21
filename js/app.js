const body = document.body;

// main Container
const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

// left-container
const leftContainer = document.createElement("div");
leftContainer.classList.add("left-container");
container.appendChild(leftContainer);

// left-container- top-div
const topDiv = document.createElement("div");
topDiv.classList.add("top-div");
leftContainer.appendChild(topDiv)

// top-div-content
const logoDiv = document.createElement("div");
logoDiv.classList.add("logo-div");
topDiv.appendChild(logoDiv);

// logo
const logo = document.createElement("img");
logo.classList.add("logo");
logo.src = "icons/logo.png";
logo.alt = "Thinkora Logo";
logoDiv.appendChild(logo);

// heading
const heading = document.createElement("h1");
heading.classList.add("heading")
heading.textContent = "Thinkora";
topDiv.appendChild(heading);

// middle-container
const midContainer = document.createElement("div");
midContainer.classList.add("mid-container");
leftContainer.appendChild(midContainer);

// middle-container first-icon-div
const firstIcon = document.createElement("div");
firstIcon.classList.add("icons-div");
midContainer.appendChild(firstIcon);

// newChart icon
const chartIcon = document.createElement("img");
chartIcon.classList.add("mid-icons");
chartIcon.src = "icons/newchart.png";
firstIcon.appendChild(chartIcon);

const charttext = document.createElement("h2");
charttext.classList.add("mid-text");
charttext.textContent = "New chat";
firstIcon.appendChild(charttext);

// middle-container second-icon-div
const secondIcon = document.createElement("div");
secondIcon.classList.add("icons-div");
midContainer.appendChild(secondIcon);

// search icon
const searchIcon = document.createElement("img");
searchIcon.classList.add("mid-icons");
searchIcon.src = "icons/search.png";
secondIcon.appendChild(searchIcon);

// search-text
const searchText = document.createElement("h2");
searchText.classList.add("mid-text");
searchText.textContent = "Search";
secondIcon.appendChild(searchText);

// last-container 
const lastDiv = document.createElement("div");
lastDiv.classList.add("last-div");
leftContainer.appendChild(lastDiv);

// lastDiv first element
const firstElement = document.createElement("div");
firstElement.classList.add("icons-div");
lastDiv.appendChild(firstElement);

const library = document.createElement("img");
library.classList.add("mid-icons");
library.src = "icons/library.png";
firstElement.appendChild(library);

const libraryText = document.createElement("h2")
libraryText.classList.add("mid-text");
libraryText.textContent = "Library";
firstElement.appendChild(libraryText);