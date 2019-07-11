const allPost = document.getElementById('all-post');
const createPost = document.getElementById('create-post');
var createPostModal = document.getElementById('createPost-modal');

allPost.onclick = function () {
    window.location.href = "html/bloglist.html";
}

createPost.onclick = function(){
    createPostModal.style.display="block";
}