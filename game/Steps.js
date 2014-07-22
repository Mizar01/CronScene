// All steps can share everything. Steps are action taken for the objects at certain times



Step = function() {
    this.startTime = null  //startTime will be set by assignStep for better time management
    this.init = function(){}
    this.run = function() {}
    this.end = function() {}
}

starter = new Step()
starter.duration = 5
starter.init = function() {
    $("body").append("<div id='countdown' style='position:fixed;top:10px;left:10px;'></div>")
}
starter.run = function() {
    $("#countdown").text(this.duration - (cronLogic.tm.clock.getElapsedTime().toFixed(2)))
}
starter.end = function() {
    $("#countdown").remove()
}

step1 = new Step()
step1.init = function() {
    mem.p1 = new CubeDroid()
    gameManager.registerActor(mem.p1)
    gameManager.registerLogic(new BackgroundLogic)
}

step2 = new Step()
step2.init = function() {
    mem.p1.rotSpeed = 0.01
}
step3 = new Step()
step3.init = function() {
    var cubes = 280
    for (var i = 0; i < cubes; i++) {
        var c = new CubeDroid()
        gameManager.registerActor(c)
        c.rotSpeed = 0.1
        mem["dc_set_" + i] = c
    }
}
step4 = new Step()
step4.init = function() {
    this.angle = 0
    this.spread = 0.1
    this.rotSpeed = 0.001
}
step4.run = function() {
    //oscillate camera left and right
    this.angle += 0.01
    ace3.camera.cameraObj.rotation.z += this.rotSpeed * THREE.Math.sign(Math.sin(this.angle))
    ace3.camera.pivot.position.z -= this.spread * THREE.Math.sign(Math.sin(this.angle))
}

function assignSteps() {
    
    var c = cronLogic
    var b = beatTime
    c.addStep(starter, 0)
    var st = starter.duration
    c.addStep(step1, st)
    c.addStep(step2, st + b * 10)
    c.addStep(step3, st + b * 20)
    c.addStep(step4, st + b * 25)
    
    
    
}
