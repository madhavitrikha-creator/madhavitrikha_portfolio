'use strict';

const sidebar = document.querySelector('[data-sidebar]');
const sidebarButton = document.querySelector('[data-sidebar-btn]');

sidebarButton.addEventListener('click', () => {
  const expanded = sidebar.classList.toggle('active');
  sidebarButton.setAttribute('aria-expanded', String(expanded));
});
