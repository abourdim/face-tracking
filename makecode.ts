serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
serial.writeLine("USB SERIAL READY")

bluetooth.startUartService()
basic.showString("BT")
serial.writeLine("BLE UART READY")

function showCmd(cmd: string) {
    if (cmd == "BLINK") basic.showIcon(IconNames.Heart)
    else if (cmd == "WINK_L") basic.showArrow(ArrowNames.West)
    else if (cmd == "WINK_R") basic.showArrow(ArrowNames.East)
    else if (cmd == "MOUTH_OPEN") basic.showIcon(IconNames.Surprised)
    else if (cmd == "MOUTH_WIDE") basic.showIcon(IconNames.Ghost)
    else if (cmd == "LOOK_UP") basic.showArrow(ArrowNames.North)
    else if (cmd == "LOOK_DOWN") basic.showArrow(ArrowNames.South)
    else if (cmd == "LOOK_LEFT") basic.showArrow(ArrowNames.West)
    else if (cmd == "LOOK_RIGHT") basic.showArrow(ArrowNames.East)
    else if (cmd == "SMILE") basic.showIcon(IconNames.Happy)
    else basic.showIcon(IconNames.SmallDiamond)

    basic.pause(250)
    basic.clearScreen()
}

// -------- 19-digit packet decode helpers --------
function isAllDigits(s: string): boolean {
    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i)
        if (c < 48 || c > 57) return false
    }
    return true
}

function to2(s: string, i: number): number {
    return parseInt(s.substr(i, 2))
}

function to1(s: string, i: number): number {
    return parseInt(s.substr(i, 1))
}

function decode19(p: string): void {
    // Format: XX YY ZZ Yaw Pitch Mouth LE RE Roll Smile Vis  (19 digits)
    const X = to2(p, 0)
    const Y = to2(p, 2)
    const Z = to2(p, 4)
    const Yaw = to2(p, 6)
    const Pitch = to2(p, 8)
    const Mouth = to2(p, 10)
    const LE = to2(p, 12)
    const RE = to2(p, 14)
    const Roll = to1(p, 16)
    const Smile = to1(p, 17)
    const Vis = to1(p, 18)

    // USB debug
    serial.writeLine(
        "DEC X=" + X +
        " Y=" + Y +
        " Z=" + Z +
        " Yaw=" + Yaw +
        " Pitch=" + Pitch +
        " Mouth=" + Mouth +
        " LE=" + LE +
        " RE=" + RE +
        " Roll=" + Roll +
        " Smile=" + Smile +
        " Vis=" + Vis
    )

    // Optional: also send a compact status line back to the browser
    // bluetooth.uartWriteLine("STAT:" + X + "," + Y + "," + Z + "," + Yaw + "," + Pitch + "," + Mouth + "," + LE + "," + RE + "," + Roll + "," + Smile + "," + Vis)
}

// -------- UART RX --------
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    let line = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    line = line.trim()

    // Log raw RX to USB for debugging
    serial.writeLine("RX: " + line)

    // ✅ ACK back to browser (echo the original line)
    bluetooth.uartWriteLine("ACK:" + line)

    // Handle commands (unchanged)
    if (line.length >= 4 && line.substr(0, 4) == "CMD:") {
        showCmd(line.substr(4, line.length - 4))
        return
    }

    // Handle TEST (unchanged)
    if (line == "TEST") {
        basic.showString("T")
        return
    }

    // ✅ Decode numeric 19-digit packets (new)
    if (line.length == 19 && isAllDigits(line)) {
        decode19(line)
        return
    }

    // Anything else
    serial.writeLine("INFO: Unhandled line")
})

