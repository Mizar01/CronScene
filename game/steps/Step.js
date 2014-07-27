// All steps can share everything. Steps are action taken for the objects at certain times
Step = function() {
    this.startTime = null  //startTime will be set by assignStep for better time management
    this.init = function(){}
    this.run = function() {}
    this.end = function() {}
}