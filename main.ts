input.onButtonPressed(Button.A, function () {
    basic.showNumber(520)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 99; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("I Love You")
})
