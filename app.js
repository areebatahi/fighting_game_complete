var character = document.getElementById('character')
var character2 = document.getElementById('character2')
var right = 0;
function animation() {
    //_____________________player 1___________________________
    console.log(event.keyCode);

    if (event.keyCode === 39 && right < 1400) {
        character.src = "image/ai-forward.gif"
        right = right + 10;
        character.style.left = right + "px"
        setTimeout(
            function () {
                character.src = "image/ai-d.gif"
                character.style.height = 200 + "px"
            }, 1000
        )
    }
    if (event.keyCode === 37 && right > 10) {
        character.src = "image/ai-runaway.gif"
        right = right - 10;
        character.style.left = right + "px"
        setTimeout(
            function () {
                character.src = "image/ai-d.gif"
                character.style.height = 200 + "px"
            }, 1000
        )
    }
    if (event.keyCode === 38) {
        character.src = "image/ai-airp.gif"
        character.style.height = 300 + "px"
        setTimeout(
            function () {
                character.src = "image/ai-d.gif"
                character.style.height = 200 + "px"
            }, 2500
        )
    }

//_____________________player 2___________________________
    
    if (event.keyCode === 68 && right>10) {
        character2.src = "image/cammy-s1.gif"
        right = right - 10;
        character2.style.right = right + "px"
        setTimeout(
            function () {
                character2.src = "image/cam-alphataunt.gif"
                character2.style.height = 200 + "px"
            }, 1000
        )
    }
    if (event.keyCode === 65 && right < 1400) {
        character2.src = "image/cam-stance2.gif"
        right = right + 10;
        character2.style.right = right + "px"
        setTimeout(
            function () {
                character2.src = "image/cam-alphataunt.gif"
                character2.style.height = 200 + "px"
            }, 1000
        )
    }
    if (event.keyCode === 87) {
        character2.src = "image/cammy-jumpattacks2.gif"
        character2.style.height = 300 + "px"
        character2.style.width = 200 + "px"
        setTimeout(
            function () {
                character2.src = "image/cam-alphataunt.gif"
                character2.style.height = 200 + "px"
            }, 1000
        )
    }

}

window.onkeydown = animation
