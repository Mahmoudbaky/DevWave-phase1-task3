import data from "./data.js";
const { movies, comingSoon } = data;
const moviesContainer = document.querySelector("#moviesContainer");
const comingSoonContainer = document.querySelector("#comingSoonContainer");
const navBar = document.querySelector("#navbar");
let content = ``;

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navBar.classList.add("bg-white");
  } else {
    navBar.classList.remove("bg-white");
  }
});

const movieSectionContent = () => {
  movies.map((movie) => {
    content += `<div class="inner flex flex-col hover:scale-105 transition-transform  duration-300">
            <div class="w-full h-[300px] mb-2">
              <img
                src=${movie.image}
                alt=""
                class="object-cover w-full h-full"
              />
            </div>
            <h3 class="text-base capitalize text-[#ff2c1f] text-accent font-medium mb-0">
              ${movie.title}
            </h3>
            <p class="mb-0 text-[#fff]">
              <span> <span class="">${movie.duration}</span><span>min</span> </span>
              <span> | </span><span class="capitalize">${movie.category}</span>
            </p>
          </div>`;
  });

  moviesContainer.innerHTML = content;
  content = ``;
};

const comingSoonContent = () => {
  comingSoon.map((movie) => {
    content += `<div class="inner flex flex-col hover:scale-105 transition-transform  duration-300">
            <div class="w-full h-[300px] mb-2">
              <img
                src=${movie.image}
                alt=""
                class="object-cover w-full h-full"
              />
            </div>
            <h3 class="text-base capitalize text-[#ff2c1f] text-accent font-medium mb-0">
              ${movie.title}
            </h3>
            <p class="mb-0 text-[#fff]">
              <span> <span class="">${movie.duration}</span><span>min</span> </span>
              <span> | </span><span class="capitalize">${movie.category}</span>
            </p>
          </div>`;
  });

  comingSoonContainer.innerHTML = content;
  content = ``;
};

movieSectionContent();
comingSoonContent();
