cam_followPos = new Step()
cam_followPos.init = function() {
    this.speed = 0.1
    this.changeTimer = new ACE3.CooldownTimer(beatTime * 20, true)
    this.target = null
    this.changePos()
}
cam_followPos.run = function() {
    
    ace3.camera.pivot.translateZ(this.speed)
    
    if (this.changeTimer.trigger()) {
        this.changePos()
        console.log("New target for camera :" + this.target)
    }
}
cam_followPos.changePos = function() {
    this.target = ACE3.Math.randVector3(videoSpread/2)
    ace3.camera.pivot.lookAt(this.target)
    ace3.camera.cameraObj.lookAt(this.target)
}

cam_backForth = new Step()
cam_backForth.init = function() {
    this.angle = 0
    this.spread = 0.1
    this.rotSpeed = 0.001
}
cam_backForth.run = function() {
    //oscillate camera left and right
    var c = ace3.camera
    this.angle += 0.01
    c.cameraObj.rotation.z += this.rotSpeed * THREE.Math.sign(Math.sin(this.angle))
    c.pivot.position.z -= this.spread * THREE.Math.sign(Math.sin(this.angle))
}








