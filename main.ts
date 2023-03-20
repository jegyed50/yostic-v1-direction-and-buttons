let buttonVal = 0
let item = 0
function button () {
    buttonVal = pins.analogReadPin(AnalogPin.P2)
    if (buttonVal < 256) {
        item = 1
    } else if (buttonVal < 597) {
        item = 2
    } else if (buttonVal < 725) {
        item = 3
    } else if (buttonVal < 793) {
        item = 4
    } else if (buttonVal < 836) {
        item = 5
    } else if (buttonVal < 938) {
        item = 6
    } else {
        item = 0
    }
}
basic.forever(function () {
    button()
    if (item) {
        basic.showNumber(item)
    } else if (pins.analogReadPin(AnalogPin.P0) < 400) {
        basic.showString("-x")
    } else if (pins.analogReadPin(AnalogPin.P0) > 600) {
        basic.showString("+x")
    } else if (pins.analogReadPin(AnalogPin.P1) < 400) {
        basic.showString("-Y")
    } else if (pins.analogReadPin(AnalogPin.P1) > 600) {
        basic.showString("+Y")
    } else {
        basic.clearScreen()
    }
})
