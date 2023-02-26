class TargetingSolution{
    constructor(config){
        this.x = config.x
        this.y = config.y
        this.z = config.z
    }
    target(){
        return `(${this.x}, ${this.y}, ${this.z})`
    }
}

var sln = new TargetingSolution({x:45, y:12, z:-1})

console.log(sln.target())