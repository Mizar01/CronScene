CubeDroid = function() {
    ACE3.Actor3D.call(this);
    this.obj = ACE3.Builder.cube(2, ACE3.Utils.getRandomColor());
    this.spread = 70
    this.obj.position = ACE3.Math.randVector3(videoSpread)
    this.cooldown = new ACE3.CooldownTimer(beatTime, true)
    this.cooldown2 = new ACE3.CooldownTimer(0.1, false)
    this.cooldown2.stopped = true
    this.rotSpeed = 0
}

CubeDroid.extends(ACE3.Actor3D, "CubeDroid");

CubeDroid.prototype.run = function() {
    
    // rotates and change color randomly for few instants.
    
    if (this.cooldown.trigger()) {
        
        var c = ACE3.Utils.getRandomColor()
        this.obj.material.color = new THREE.Color(c)
        //this.obj.material.color = new THREE.Color(1, 0, 1)
        this.cooldown2.restart()
    }
    if (!this.cooldown2.stopped && this.cooldown2.trigger()) {
        this.obj.material.color = new THREE.Color(0,0,0)
    }
    
    this.obj.rotation.y += this.rotSpeed
    this.obj.rotation.z += this.rotSpeed * 0.8
    
}

