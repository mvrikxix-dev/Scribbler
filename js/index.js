const allPost = document.getElementById('all-post');
const createPost = document.getElementById('create-post');
var createPostModal = document.getElementById('createPost-modal');

//On clicking the 'All Posts' button, the page is redirected to bloglist.html

allPost.onclick = function () {
    window.location.href = "html/bloglist.html";
}

//On clicking the 'Create Post' button, the create post modal pops up

createPost.onclick = function () {
    createPostModal.style.display = "block";
}