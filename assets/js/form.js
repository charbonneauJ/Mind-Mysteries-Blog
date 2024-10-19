const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const formButton = document.getElementById("formButton");

function handleFormSubmit(event) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (!username || !title || !content) {
    alert(
      "Please fill in all fields: Username, Title, and Content are required."
    );
    return; // Exit the function if any field is empty
  }

  const blogPost = { username, title, content };
  writing(blogPost);
  navigate("blog.html");
}

formButton.addEventListener("click", handleFormSubmit);
