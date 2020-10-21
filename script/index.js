'use strict';

const posts = document.querySelector('.posts');

posts.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.icon-like')) {
        const likeBtn = target.closest('.likes'),
        counter = likeBtn.querySelector('.likes-counter');

        likeBtn.classList.toggle('active');

        if (likeBtn.classList.contains('active')) {
            counter.textContent = +counter.textContent + 1;
        } else {
            counter.textContent -= 1;
        }
    }
}); 