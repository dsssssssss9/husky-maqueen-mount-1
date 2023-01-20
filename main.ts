input.onButtonPressed(Button.B, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.All)
})
basic.showIcon(IconNames.Yes)
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
	
})
