var actionBtn = document.getElementById('edit');
const textEl = document.getElementById('text');
const iconEl = document.getElementById('icon');

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

function editMode() {
    editablep.setAttribute('contenteditable', 'true');
    editableh.setAttribute('contenteditable', 'true');
    editablep.style.border = "1px solid rgba(0,0,0,0.3)";
    editableh.style.border = "1px solid rgba(0,0,0,0.3)";

}

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

likeBtn.onclick = function () {
    flag = 1;
    likeBtn.style.backgroundColor = "rgba(255, 20, 147, 0.9)";
    likeBtn.textContent = "Liked";
    likes++;
    console.log(likes);
    likeBtn.setAttribute('disabled', '');
    if (likes === 1) {
        likeTag.textContent = likes + ' person likes this!';
    } else if (likes > 1) {
        likeTag.textContent = likes + ' people like this!';
    }
}

const commentBtn = document.getElementById('comment-button');
const commetnDta = document.getElementById('comment-box');

commentBtn.onclick = function(){
    const commentContainer = document.createElement('div');
    commentContainer.setAttribute('class', 'comments');
    commentContainer.textContent = commetnDta.value;
    console.log(commentContainer);
    
    const commentSec = document.getElementById('comment-storage');
    commentSec.style.backgroundColor="gainsboro";
    commentSec.appendChild(commentContainer);
    
    commetnDta.value="";
}