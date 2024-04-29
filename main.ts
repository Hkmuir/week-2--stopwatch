input.onButtonPressed(Button.A, function () {
    running = true
})
input.onButtonPressed(Button.AB, function () {
    time = 0
    basic.showNumber(time)
})
input.onButtonPressed(Button.B, function () {
    running = false
})
let running = false
let time = 0
time = 0
running = false
basic.forever(function () {
    while (running) {
        basic.showNumber(time)
        time += 1
        basic.pause(100)
    }
})
