CronLogic = function() {
    ACE3.Logic.call(this);
    this.currentStepIndex = -1
    this.stepSet = new Array()
    this.incAmount = 2 //number of seconds to anticipate steps if 'i' is pressed.
    this.tm = new ACE3.TimeManager()
}


CronLogic.prototype.run = function() {

    var ci = this.currentStepIndex
    
    var em = ace3.eventManager
    if (ace3.eventManager.released(ace3.eventManager.keyCodes.escape)) {
        //game_pause()
    }
    if (em.released(73)) {  //'i'
        //Increment elapsed time by 2 seconds by anticipating every step startTime
        for (var i = ci + 1; i < this.stepSet.length; i++) {
            this.stepSet[i].startTime -= this.incAmount
            console.log(this.stepSet[i])
        }
    }
   
    if (ci != -1) {
        this.stepSet[ci].run()
    }
    
    if (this.stepSet.length > ci + 1) {
        if (this.tm.clock.getElapsedTime() >= this.stepSet[ci + 1].startTime) {
            //console.log(this.stepSet[ni].startTime)
            if (ci != -1) {
                this.stepSet[ci].end()
            }
            ci++
            this.stepSet[ci].init()
            //console.log(this.tm.clock.getElapsedTime())
        }
    }
    
    this.currentStepIndex = ci
    
    
}

CronLogic.prototype.addStep = function(step, startTime) {
    step.startTime = startTime
    this.stepSet.push(step)
}