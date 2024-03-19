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