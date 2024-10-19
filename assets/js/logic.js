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
  const url = window.location.href.split("/");
  url[url.length - 1] = page;
  console.log(window.location.href);

  window.location.href = url.join("/"); // Redirects to the specified page
  // window.location.assign(page);
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
