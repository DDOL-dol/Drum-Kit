function playAudio(id){
    const audio = document.getElementById(id);
    if (audio) {
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }
        audio.play();
    } else {
        console.error('Audio element not found!');
    }
}


function pressKey(key){
    switch(key){
        case 'w':
            playAudio('aud-crash');
            break;
        case 'a':
            playAudio('aud-kick-bass');
            break;
        case 's':
            playAudio('aud-snare');
            break;
        case 'd':
            playAudio('aud-tom-1');
            break;
        case 'j':
            playAudio('aud-tom-2');
            break;
        case 'k':
            playAudio('aud-tom-3');
            break;
        case 'l':
            playAudio('aud-tom-4');
            break;
    }
    var btn = document.getElementsByClassName(key)[0];
    btn.classList.add("active");
}

function releaseKey(key){
    var btn = document.getElementsByClassName(key)[0];
    btn.classList.remove("active");
}

document.querySelector(".w").addEventListener("click", ()=> playAudio('aud-crash'));
document.querySelector(".a").addEventListener("click", ()=> playAudio('aud-kick-bass'));
document.querySelector(".s").addEventListener("click", ()=> playAudio('aud-snare'));
document.querySelector(".d").addEventListener("click", ()=> playAudio('aud-tom-1'));
document.querySelector(".j").addEventListener("click", ()=> playAudio('aud-tom-2'));
document.querySelector(".k").addEventListener("click", ()=> playAudio('aud-tom-3'));
document.querySelector(".l").addEventListener("click", ()=> playAudio('aud-tom-4'));

// Keyboard event listener
document.addEventListener('keydown', (event) => {
    pressKey(event.key);
});

document.addEventListener('keyup', (event) => {
    releaseKey(event.key);
});