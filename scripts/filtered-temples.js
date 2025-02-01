const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // Add more temple objects here...
  {
    templeName: "Bahía Blanca Argentina",
    location: "Bahia, Blanca, Argentina",
    dedicated: "2022, April, 9",
    area: 19000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bahia-blanca-argentina-temple/bahia-blanca-argentina-temple-24944-main.jpg",
  },
  {
    templeName: "Mérida Mexico",
    location: "Mérida, Yucatan, Mexico",
    dedicated: "2000, July, 8",
    area: 10700,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/merida-mexico-temple/merida-mexico-temple-14119-main.jpg",
  },
  {
    templeName: "Dallas Texas",
    location: "Dallas, Texas, United States",
    dedicated: "1984, October, 19–24",
    area: 44207,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55240-main.jpg",
  },
];

function displayTemples(filteredTemples) {
  const container = document.getElementById("temple-container");
  container.innerHTML = "";

  filteredTemples.forEach((temple) => {
    const templeCard = document.createElement("figure");
    templeCard.classList.add("temple-card");

    templeCard.innerHTML = `
            <img class="img-temple" src="${temple.imageUrl}" loading="lazy" width="250" height="167" alt="${temple.templeName}">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq ft</p>
            </figcaption>
        `;

    container.appendChild(templeCard);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const hamButton = document.querySelector("#menu");
  const navigation = document.querySelector(".navigation");
  const nameHeader = document.querySelector(".header");

  hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    nameHeader.classList.toggle("hidden");
  });

  document
    .getElementById("home")
    .addEventListener("click", () => displayTemples(temples));
  document.getElementById("old").addEventListener("click", () => {
    displayTemples(
      temples.filter(
        (temple) => parseInt(temple.dedicated.split(",")[0]) < 1900
      )
    );
  });
  document.getElementById("new").addEventListener("click", () => {
    displayTemples(
      temples.filter(
        (temple) => parseInt(temple.dedicated.split(",")[0]) > 2000
      )
    );
  });
  document.getElementById("large").addEventListener("click", () => {
    displayTemples(temples.filter((temple) => temple.area > 90000));
  });
  document.getElementById("small").addEventListener("click", () => {
    displayTemples(temples.filter((temple) => temple.area < 10000));
  });

  displayTemples(temples);
});

const today = new Date();
const currentYear = today.getFullYear();

const currentYearElement = document.querySelector("#currentyear");
const lastModifiedElement = document.querySelector("#lastModified");

currentYearElement.innerHTML = currentYear;
lastModifiedElement.innerHTML = `Last Modified ${document.lastModified}`;
