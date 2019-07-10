const trashBtn = document.getElementsByClassName('trash');
const deleteModal = document.getElementById('delete-modal');
Array.from(trashBtn).forEach(function (i) {
    i.onclick = function () {
        screen.style.display = "block";
        deleteModal.style.display = "block";
    }
});

const deleteNo = document.getElementById('delete-no');
deleteNo.onclick = function () {
    screen.style.display = "none";
    deleteModal.style.display = "none";
}

const postMore = document.getElementsByClassName('post-more');
Array.from(postMore).forEach(function(i){
    i.onclick = function(){
        window.location.href="post.html";
    }
});