function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const specializations = ["Frontend Developer", "Problem Solver", "Web Developer"];
let index = 0;

function changeSpecialization() {
    document.getElementById("specializations").textContent = specializations[index];
    index = (index + 1) % specializations.length;
}

setInterval(changeSpecialization, 2000); // Change every 2 seconds
