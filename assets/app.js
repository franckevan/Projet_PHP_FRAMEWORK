import './bootstrap.js';
import './styles/app.css';


function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active');
    const toggleButton = document.querySelector('.toggle-menu');
    const isActive = menu.classList.contains('active');
    toggleButton.setAttribute('aria-expanded', isActive);
}

function likePost(button) {
    button.classList.toggle('liked');
    button.textContent = button.classList.contains('liked') ? '❤️ J\'aime (1)' : '❤️ J\'aime';
}

function toggleComments(button) {
    const commentSection = button.closest('.post').querySelector('.comment-section');
    commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
}

function addComment(event, input) {
    if (event.key === 'Enter' && input.value.trim() !== '') {
        const commentText = input.value.trim();
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.textContent = commentText;
        input.closest('.post').querySelector('.comments').appendChild(commentElement);
        input.value = ''; // Pour éffacer le champ de saisie
    }
}

function toggleBookmark(bookmark) {
    bookmark.classList.toggle('bookmarked');
    if (bookmark.classList.contains('bookmarked')) {
        bookmark.style.transform = "scale(1.1)";
    } else {
        bookmark.style.transform = "scale(1)";
    }
}

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
