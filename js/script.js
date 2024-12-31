// discord
function copyDiscordUsername() {
    const discordUsernameElement = document.getElementById('discord-username');  
    const copyIcon = document.getElementById('copy-icon'); 
    const originalUsername = discordUsernameElement.textContent; 
    const regularIcon = copyIcon.querySelector('.fa-regular');
    const solidIcon = copyIcon.querySelector('.fa-solid');
    const textarea = document.createElement('textarea');
    textarea.value = discordUsernameElement.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    discordUsernameElement.textContent = 'Copied';
    regularIcon.style.display = 'none';
    solidIcon.style.display = 'inline-block';
    copyIcon.classList.add('copied');
    setTimeout(() => {
        discordUsernameElement.textContent = originalUsername;
        copyIcon.classList.remove('copied'); 
        regularIcon.style.display = 'inline-block';
        solidIcon.style.display = 'none'; 
    }, 2000); 
}

document.getElementById('discord-icon-container').addEventListener('click', copyDiscordUsername);

window.onload = function () {
    const overlay = document.getElementById('overlay');
    const video = document.getElementById('background-video');
    const audio = document.getElementById('background-music');
    const content = document.getElementById('content');
    const profileCard = document.querySelector('.profile-card');

    overlay.addEventListener('click', function () {
        audio.volume = 0.15;
        audio.play().then(() => {
            video.play().then(() => {
                overlay.style.opacity = '0';
                overlay.style.visibility = 'hidden';

                // Add visible class to profile card directly
                profileCard.classList.add('visible');

                // Show content with animation
                content.style.visibility = 'visible';
                content.classList.add('page-enter-animation');
            });
        });

        // Enable trailing cursor effect
        new cursoreffects.trailingCursor({
            particles: 10,
            rate: 0.4,
            baseImageSrc: '/assets/mac-os-x.cur'
        });
    });

    // Disable all drag functionality
    document.addEventListener('dragstart', function (e) {
        e.preventDefault();
    });
};
