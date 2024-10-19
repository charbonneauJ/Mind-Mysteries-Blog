const themeButton = document.getElementById("theme-button");

function reading() {
  let data = localStorage.getItem("userInput");
  if (data) {
    return JSON.parse(data);
  }
  return [];
}

function writing(blogPost) {
  const data = reading();
  data.push(blogPost);
  localStorage.setItem("userInput", JSON.stringify(data));
}

function navigate(page) {
  console.log("Navigating to " + page);
  window.location.href = page; // Redirects to the specified page
}
function changeTheme() {
  let theme = localStorage.getItem("theme");
  if (theme) {
    if (theme === "dark") {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
      themeButton.innerText = "🌞";
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
      themeButton.innerText = "🌙";
    }
  } else {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    themeButton.innerText = "🌙";
  }
}
themeButton.addEventListener("click", changeTheme);
