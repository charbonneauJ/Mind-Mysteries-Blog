console.log("form.js loaded");

const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const formButton = document.getElementById("formButton");

function handleFormSubmit(event) {
  event.preventDefault();
  const username = usernameInput.value;
  const title = titleInput.value;
  const content = contentInput.value;
  const blogPost = { username, title, content };
  writing(blogPost);
  navigate("/blog.html");
}

formButton.addEventListener("click", handleFormSubmit);
