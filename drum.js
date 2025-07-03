const sounds = {
    A: new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'),  
    W: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'),       
    S: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'),        
    D: new Audio('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3')  
};

document.querySelectorAll('.drum').forEach(drum => {
    drum.addEventListener('click', () => {
        const key = drum.getAttribute('data-key').toUpperCase();
        playSound(key);
        animateDrum(key);
    });
});

document.addEventListener('keydown', e => {
    const key = e.key.toUpperCase();
    if (sounds[key]) {
        playSound(key);
        animateDrum(key);
    }
});

function playSound(key) {
    const audio = sounds[key];
    if (audio) {
        audio.currentTime = 0; 
        audio.play();
    }
}

function animateDrum(key) {
    const drum = document.querySelector(`.drum[data-key="${key}"]`);
    if (drum) {
        drum.classList.add('active');
        setTimeout(() => drum.classList.remove('active'), 150);
    }
}