joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendNumber(11)
    basic.showString("e")
    joystickbit.Vibration_Motor(50)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(6)
    joystickbit.Vibration_Motor(50)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendNumber(8)
    basic.showString("f")
    joystickbit.Vibration_Motor(50)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(5)
    joystickbit.Vibration_Motor(50)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(7)
    joystickbit.Vibration_Motor(50)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendNumber(10)
    basic.showString("d")
    joystickbit.Vibration_Motor(50)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendNumber(9)
    basic.showString("c")
    joystickbit.Vibration_Motor(50)
})
radio.setGroup(1)
joystickbit.initJoystickBit()
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        radio.sendNumber(1)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        radio.sendNumber(3)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
        radio.sendNumber(2)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 200) {
        radio.sendNumber(4)
    }
})
