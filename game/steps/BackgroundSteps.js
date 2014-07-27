bg_phase1 = new Step()
bg_phase1.init = function() {
    this.angle = 0
    ace3.setBGColor(0x888888)
}
bg_phase1.run = function() {
    this.angle += 0.01
    var nc = ace3.renderClearColor + 2 * THREE.Math.sign(Math.sin(this.angle))
    ace3.setBGColor(nc)
}