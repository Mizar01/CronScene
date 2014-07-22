CronLogic = function() {
    ACE3.Logic.call(this);
    this.currentStepIndex = -1
    this.stepSet = new Array()
    this.tm = new ACE3.TimeManager()
}


CronLogic.prototype.run = function() {
    if (ace3.eventManager.released(ace3.eventManager.keyCodes.escape)) {
        //game_pause()
    }
    
    if (this.currentStepIndex != -1) {
        this.stepSet[this.currentStepIndex].run()
    }
    
    
    var ni = this.currentStepIndex + 1
    if (this.stepSet.length > ni) {
        if (this.tm.clock.getElapsedTime() >= this.stepSet[ni].startTime) {
            console.log(this.stepSet[ni].startTime)
            this.currentStepIndex++
            this.stepSet[this.currentStepIndex].init()
            //console.log(this.tm.clock.getElapsedTime())
        }
    }
}

CronLogic.prototype.addStep = function(step, startTime) {
    step.startTime = startTime
    this.stepSet.push(step)
}