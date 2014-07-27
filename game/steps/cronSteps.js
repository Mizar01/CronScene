
//Cronsteps are generally going to control even other types of steps through their respective logics. 

cr_starter = new Step()
cr_starter.duration = 5
cr_starter.init = function() {
    $("body").append("<div id='countdown' style='position:fixed;top:10px;left:10px;'></div>")
}
cr_starter.run = function() {
    $("#countdown").text(this.duration - (cronLogic.tm.clock.getElapsedTime().toFixed(2)))
}
cr_starter.end = function() {
    $("#countdown").remove()
}

cr_step1 = new Step()
cr_step1.init = function() {
    mem.p1 = new CubeDroid()
    gameManager.registerActor(mem.p1)
    bgLogic.changeStep(bg_phase1)
}

cr_step2 = new Step()
cr_step2.init = function() {
    mem.p1.rotSpeed = 0.01
}
cr_step3 = new Step()
cr_step3.init = function() {
    var cubes = 280
    for (var i = 0; i < cubes; i++) {
        var c = new CubeDroid()
        gameManager.registerActor(c)
        c.rotSpeed = 0.1
        mem["dc_set_" + i] = c
    }
}
cr_step4 = new Step()
cr_step4.init = function() {
    camLogic.changeStep(cam_backForth)
}

cr_step5 = new Step()
cr_step5.init = function() {
    camLogic.changeStep(cam_followPos)
}



