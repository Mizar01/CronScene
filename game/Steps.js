// All steps can share everything. Steps are action taken for the objects at certain times



Step = function() {
    this.startTime = null  //startTime will be set by assignStep for better time management
    this.init = function() {
    }
    this.run = function() {
    }
}

step1 = new Step()
step1.init = function() {
    mem.p1 = new CubeDroid()
    gameManager.registerActor(mem.p1)
}

step2 = new Step()
step2.init = function() {
    mem.p1.rotSpeed = 0.01
}
step3 = new Step()
step3.init = function() {
    for (var i = 0; i < 10; i++) {
        var c = new CubeDroid()
        gameManager.registerActor(c)
        c.rotSpeed = 0.2
        mem["dc_set_" + i] = c
    }
}
step4 = new Step()
step4.init = function() {
    this.angle = 0
    this.spread = 5
    this.rotSpeed = 0.001
    
}
step4.run = function() {
    //oscillate camera left and right
    this.angle += 0.01
    ace3.camera.cameraObj.rotation.z += this.rotSpeed * THREE.Math.sign(Math.sin(this.angle)) 
}

function assignSteps() {
    
    var c = cronLogic
    var b = beatTime
    
    c.addStep(step1,0)
    c.addStep(step2, b * 10)
    c.addStep(step3,b * 20)
    c.addStep(step4, b * 25)
    
    
    
}
