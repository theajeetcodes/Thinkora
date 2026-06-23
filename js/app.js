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

const chattext = document.createElement("h2");
chattext.classList.add("mid-text");
chattext.textContent = "New chat";
firstIcon.appendChild(chattext);

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

// lastDiv second element
const secondElement = document.createElement("div")
secondElement.classList.add("icons-div");
lastDiv.appendChild(secondElement);

const project = document.createElement("img");
project.classList.add("mid-icons");
project.src = "icons/project.png";
secondElement.appendChild(project);

const projectText = document.createElement("h2");
projectText.classList.add("mid-text");
projectText.textContent = "Projects";
secondElement.appendChild(projectText);

// lastDiv third element
const thirdElement = document.createElement("div");
thirdElement.classList.add("icons-div");
lastDiv.appendChild(thirdElement);

const app = document.createElement("img");
app.classList.add("mid-icons");
app.src = "icons/app.png";
thirdElement.appendChild(app);

const appText = document.createElement("h2");
appText.classList.add("mid-text");
appText.textContent = "Apps";
thirdElement.appendChild(appText);

// last div forth element 
const forthElement = document.createElement("div");
forthElement.classList.add("icons-div");
lastDiv.appendChild(forthElement);

const more = document.createElement("img");
more.classList.add("mid-icons");
more.src = "icons/more.png";
forthElement.appendChild(more);

const moreText = document.createElement("h2");
moreText.classList.add("mid-text");
moreText.textContent = "More";
forthElement.appendChild(moreText);

// recent 
const recentDiv = document.createElement("div");
recentDiv.classList.add("recent-div");
lastDiv.appendChild(recentDiv);

const recentText = document.createElement("h2");
recentText.classList.add("recent-text");
recentText.textContent = "Recents";
recentDiv.appendChild(recentText);

const recentIcons = document.createElement("div");
recentIcons.classList.add("recent-icons");
recentDiv.appendChild(recentIcons);

const recentChat = document.createElement("img");
recentChat.classList.add("recent-chat");
recentChat.src = "icons/note.png";
recentIcons.appendChild(recentChat);

const recentProject = document.createElement("img");
recentProject.classList.add("recent-project");
recentProject.src = "icons/more.png";
recentIcons.appendChild(recentProject);