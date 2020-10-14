window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(key)

    //no audio no worries
    if (!audio) { return }

    key.classList.add('playing')
    audio.currentTime = .5
    audio.play();
})

const keys = document.querySelectorAll(`.key`)

function removeTransition(e) {
    if (e.propertyName !== 'transition') {
        return
    }
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition))
