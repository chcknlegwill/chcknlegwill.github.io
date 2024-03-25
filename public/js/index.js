const blogButton = document.getElementById("blog-btn");
const projButton = document.getElementById("proj-btn");

//redirect to blog
function redirectBlog() {
    window.location = "/blog"
}
blogButton.addEventListener("click", redirectBlog);

function redirectProj() {
    window.location = "/projects"
}
projButton.addEventListener("click", redirectProj);

//code to get file and write them to html element (id="paragraph")

const paragraph = document.getElementById("paragraph");

fetch(paragraph)
  .then(response => response.text())
  .then(paragraph => console.log(text))

