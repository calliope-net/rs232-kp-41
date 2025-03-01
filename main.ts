pins.onKeyboardEvent(function (zeichenCode, zeichenText, isASCII) {
    if (isASCII) {
        basic.setLedColor(0x0000ff)
        basic.showString(zeichenText)
        rs232.sendeAsc(zeichenCode)
    }
})
function Konfiguration () {
    rs232.comment("rs232-kp-41 asynchrone serielle Datenübertragung mit Licht")
    rs232.comment("Erweiterungen: calliope-net/rs232, calliope-net/pins")
}
let asciiCode = 0
rs232.setPins(DigitalPin.C17, AnalogPin.C16, 150)
rs232.setTakt(400)
basic.showString("#")
loops.everyInterval(500, function () {
    rs232.comment("Empfänger Schleife")
    asciiCode = rs232.empfange1Zeichen()
    basic.setLedColor(0xff0000)
    basic.showString(rs232.ascToChr(asciiCode))
})
loops.everyInterval(500, function () {
    rs232.comment("Sender Schleife")
    pins.raiseKeypadEvent(true)
})
