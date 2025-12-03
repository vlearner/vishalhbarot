// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
