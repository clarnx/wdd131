document.addEventListener("DOMContentLoaded", () => {
  const hamButton = document.querySelector("#menu");
  const navigation = document.querySelector(".navigation");
  const nameHeader = document.querySelector(".header"); 

  hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    nameHeader.classList.toggle("hidden"); 
    
  });
});

const today = new Date();
const currentYear = today.getFullYear();

const currentYearElement = document.querySelector("#currentyear");
const lastModifiedElement = document.querySelector("#lastModified");

currentYearElement.innerHTML = currentYear;
lastModifiedElement.innerHTML = `Last Modified ${document.lastModified}`;
