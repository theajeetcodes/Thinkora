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
logo.src = "icons/logo.jpg";
logo.alt = "Thinkora Logo";
logoDiv.appendChild(logo);

// heading
const heading = document.createElement("h1");
heading.classList.add("heading")
heading.textContent = "Thinkora";
topDiv.appendChild(heading);