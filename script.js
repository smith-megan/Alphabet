// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }


window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    //no audio no worries
    if (!audio) { return }

    key.classList.add('playing')

    //adding random placement of letters

    //const topSpot = document.querySelector(`.playing`);
    // topSpot.style.setProperty('--top-placement', getRndInteger(2, 9) * 10 + "%");


    audio.currentTime = .5
    audio.play();

    function clearOutLetters() {
        key.classList.remove('playing');
        return
    }
    setTimeout(clearOutLetters, 7000);

})

const keys = document.querySelectorAll(`.key`)

function removeTransition(e) {
    if (e.propertyName !== 'transition') {
        return
    }
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));