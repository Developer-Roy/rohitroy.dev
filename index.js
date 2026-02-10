
const toggleBtn = document.querySelector(".toggleBtn");

toggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  toggleBtn.classList.toggle("active");

  // Save theme preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Apply saved theme on page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  document.querySelector(".toggleBtn")?.classList.add("active");
}

// menu bar 

const menuBar = document.querySelector(".menu-bar");
const menuContainer = document.querySelector(".menu-container");

menuBar.addEventListener("click", () => {
  const isOpen = menuContainer.classList.toggle("active");
  menuBar.classList.toggle("active");

  // Save menu state
  localStorage.setItem("menu", isOpen ? "open" : "closed");
});

// Apply saved menu state
const savedMenu = localStorage.getItem("menu");

if (savedMenu === "open") {
  menuContainer.classList.add("active");
  menuBar.classList.add("active");
}



// time functionality for about section 

function updateTime() {
    const now = new Date();

    // time 
    const time = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    }).toUpperCase();

    // Date 
const date = now.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "long"
});

document.getElementById("time").textContent = time;
document.getElementById("date").textContent = date;
}

updateTime();
setInterval(updateTime, 1000);


// footer year 
document.getElementById("year").textContent = new Date().getFullYear();


// nav functionality 
const navLinks = document.querySelectorAll("#nav-list a");

// Get current page filename
let currentPage = window.location.pathname.split("/").pop();

// Handle root path ("/")
if (currentPage === "") {
  currentPage = "index.html";
}

// Remove active from all first (IMPORTANT)
navLinks.forEach(link => link.classList.remove("active"));

// Add active ONLY to matching link
navLinks.forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});


const seeAllBtn = document.getElementById("see-all");
seeAllBtn.addEventListener("click", () => {
  window.location.href = "projects.html";
})


// GSAP ANIMATION 

let tl = gsap.timeline();

tl.from(" .logo", {
    y: -20,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})
.from("#nav-list li ", {
    y: -30,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5
}, "-=0.5")
.from(".toggleBtn", {
  x: 20,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out"
})


// form submition 
const hireBtn = document.getElementById("hireMe");

hireBtn.addEventListener("click", () => {
  window.location.href = "./form.html"
})


  