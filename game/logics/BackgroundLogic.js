BackgroundLogic = function() {
    ACE3.Logic.call(this);
    this.method = "phase1"
    this.angle = 0
}


BackgroundLogic.prototype.run = function() {
    BackgroundLogic.prototype[this.method].call(this)
}

BackgroundLogic.prototype.phase1 = function() {
    this.angle += 0.1
    var nc = ace3.renderClearColor + 2 * THREE.Math.sign(Math.sin(this.angle))
    ace3.setBGColor(nc)
}