var actionBtn = document.getElementById('edit');
const textEl = document.getElementById('text');
const iconEl = document.getElementById('icon');

//On clicking the edit button, the edit button turns in to save button and enables edit mode where the contenteditable attribute is set to true. When save is clicked, the button turns in to an edit button and the contenteditable attribute is set to false hence the input field is no more editable

actionBtn.onclick = function () {
    if (actionBtn.getAttribute('id') === 'save') {
        textEl.textContent = 'Edit';
        iconEl.setAttribute('class', 'fa  fa-pencil-square-o');
        actionBtn.setAttribute('id', 'edit');
        actionBtn = document.getElementById('edit');
        saveMode();
    } else {
        textEl.textContent = 'Save';
        iconEl.setAttribute('class', 'fa fa-floppy-o');
        actionBtn.setAttribute('id', 'save');
        editMode();
    }
}

const editablep = document.getElementById('blogBody');
const editableh = document.getElementById('blogTitleNew');

//Edit mode function

function editMode() {
    editablep.setAttribute('contenteditable', 'true');
    editableh.setAttribute('contenteditable', 'true');
    editablep.style.border = "1px solid rgba(0,0,0,0.3)";
    editableh.style.border = "1px solid rgba(0,0,0,0.3)";
}

//Save mode function

function saveMode() {
    editablep.setAttribute('contenteditable', 'false');
    editableh.setAttribute('contenteditable', 'false');
    editablep.style.border = "0";
    editableh.style.border = "0";
}

const likeBtn = document.getElementById('like-button');
const likeTag = document.getElementById('like-tag');

var likes = 0;
var flag = 0;

//Everytime the like button is clicked the likes variable increases by 1;

likeBtn.onclick = function () {
    flag = 1;
    likeBtn.style.backgroundColor = "rgba(255, 20, 147, 0.9)";
    likeBtn.textContent = "Liked!";
    likes++;
    if (likes === 1) {
        likeTag.textContent = likes + ' person likes this!';
    } else if (likes > 1) {
        likeTag.textContent = likes + ' have people liked this!';
    }
}

const commentBtn = document.getElementById('comment-button');
const commetnDta = document.getElementById('comment-box');
const commentBox = document.querySelector('form');

//If comment box is empty an alert pops up, if the comment box is not empty then the text content is placed in the comment view session. Every new comment is placed on top of the previous comments using the insertBefore() method

commentBtn.onclick = function () {
    if (commetnDta.value === "") {
        alert('Comment field is empty!');
    } else {
        const commentContainer = document.createElement('div');
        commentContainer.setAttribute('class', 'comments');
        commentContainer.textContent = commetnDta.value;

        const commentSec = document.getElementById('comment-storage');
        commentSec.style.backgroundColor = "gainsboro";

        commentSec.insertBefore(commentContainer, commentSec.firstChild);

        commetnDta.value = "";

    }
}