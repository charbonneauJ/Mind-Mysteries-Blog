console.log("blog.js loaded");
const container = document.querySelector(".container");
const blogPosts = reading();

for (const post of blogPosts) {
  const { username, title, content } = post;
  const template = `
   <div class="card">
        <h4>${title}</h4>
        <p>Content: ${content}</p>
        <p>Username: ${username}</p>
      </div>
   `;
  container.innerHTML += template;
}
