const trashBtn = document.getElementsByClassName('trash');
const deleteModal = document.getElementById('delete-modal');

//On clicking the trash icon, the delete confirmation modal pops up and the background turns black with 85% opacity

Array.from(trashBtn).forEach(function (i) {
    i.onclick = function () {
        screen.style.display = "block";
        deleteModal.style.display = "block";
    }
});

//On clicking 'No',the display of delete confirmation modal is set to none

const deleteNo = document.getElementById('delete-no');
deleteNo.onclick = function () {
    screen.style.display = "none";
    deleteModal.style.display = "none";
}

//On clicking this button the page is redirected to post.html

const postMore = document.getElementsByClassName('post-more');
Array.from(postMore).forEach(function (i) {
    i.onclick = function () {
        window.location.href = "post.html";
    }
});