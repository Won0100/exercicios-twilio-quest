class Materializer {
    constructor (targetName){
        this.target = targetName
        this.activated = false
    }
    activate() {
        this.activated = true
        console.log(`${this.activated} agora tem valor true`)
    }
    materialize(){
        if(this.activated == true){
            return this.target
        }
    }
}

const m = new Materializer('wesley')
console.log(m.activated)

m.activate()
console.log(m.activated)

console.log(m.materialize())