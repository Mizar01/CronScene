ManualStepLogic = function() {
    ACE3.Logic.call(this)
    this.currentStep = null
}


ManualStepLogic.prototype.run = function(step) {
    if (this.currentStep != null) {
        this.currentStep.run()
    }
}

ManualStepLogic.prototype.changeStep = function(s) {
    console.log(s)
    var cs = this.currentStep
    if (cs != null) {
        cs.end()
    }
    this.currentStep = s
    s.init()
}