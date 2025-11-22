// ======================================================
//  THEME TOGGLE (Dark / Light Mode)
// ======================================================
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  // Save preference
  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙"; // moon icon for dark toggle
  } else {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️"; // sun icon for light toggle
  }
});

// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
  themeToggle.textContent = "🌙";
} else {
  themeToggle.textContent = "☀️";
}



// ======================================================
//  SMOOTH SCROLL FOR NAVIGATION LINKS
// ======================================================
document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const section = document.getElementById(targetId);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // offset for navbar height
        behavior: "smooth"
      });
    }
  });
});


// ======================================================
//  AUTO UPDATE FOOTER YEAR
// ======================================================
document.getElementById("year").textContent = new Date().getFullYear();