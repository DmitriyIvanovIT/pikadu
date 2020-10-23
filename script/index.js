'use strict';

const posts = document.querySelector('.posts'),
    sidebarButton = document.querySelector('.sidebar-button'),
    sidebar = document.querySelector('.sidebar'),
    sidebarMenu = document.querySelector('.sidebar-menu'),
    sidebarMenuItem = document.querySelectorAll('.sidebar-menu-item'),
    mobailMenuBtn = document.querySelector('.mobail-menu'),
    navMenu = document.querySelector('.nav-menu');

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

sidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    sidebarButton.classList.toggle('active');
});

sidebarMenu.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.closest('.sidebar-menu-item')) {
        sidebarMenuItem.forEach(item => {
            if (item === e.target.closest('.sidebar-menu-item')) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
});

mobailMenuBtn.addEventListener('click', () => {
    mobailMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});