document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})

// const input = document.querySelector('input');
// input.addEventListener('keydown', function (e) {
//     console.log("DOWN")
//     console.log(e.key) // lettertyped
//     console.log(e.code)// code for that letter.
// })
// input.addEventListener('keyup', function (e) {
//     // console.log("UP")
//     // console.log(e.key) 
//     // console.log(e.code)
// })

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break
        default:
            console.log("IGNORED!")
    }
})