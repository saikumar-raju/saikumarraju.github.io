// ------------------------------------------------------
//  DARK / LIGHT THEME TOGGLE
// ------------------------------------------------------

const themeToggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme from localStorage (if any)
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light");
  themeToggleBtn.textContent = "🌙"; // show moon when light is active
} else {
  themeToggleBtn.textContent = "☀️";
}

// Toggle theme on button click
themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");

  // Update icon + save preference
  if (body.classList.contains("light")) {
    themeToggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    themeToggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
});

// ------------------------------------------------------
//  SMOOTH SCROLL FOR NAV LINKS
// ------------------------------------------------------

document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - 80, // adjust for navbar height
      behavior: "smooth"
    });
  });
});
