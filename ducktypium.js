class Ducktypium{
    constructor(cristalColor){
        let colors = ['red','blue','yellow']
        this.color = cristalColor.toLowerCase()
        if(!colors.includes(this.color)){
            throw new Error("incorrect color, must be red, blue or yellow.")
        }
        this.calibrationSequence = []
    }
    refract(color){
        let colors = ['red','blue','yellow']
        if(!colors.includes(color)){
            throw new Error("incorrect color, must be red, blue or yellow.")
        }

        let newColor = this.color + color.toLowerCase()
        if(color == this.color){
            return this.color
        }
        switch(newColor){
            case 'redblue':
                return "purple"
            case 'redyellow':
                return "orange"
            case 'bluered':
                return 'purple'
            case 'blueyellow':
                return 'green'
            case 'yellowred':
                return 'orange'
            case 'yellowblue':
                return 'green'
        } 

        return newColor
    }
    calibrate(array){
        var array = array.sort((a,b) => a-b)
        let sorted = array.map(item => item * 3)
        this.calibrationSequence = sorted
    }
}

var lista = [5,8,9,7,2,13]

let duck = new Ducktypium(color='red')
console.log(duck.color)
console.log(duck.refract("blue"))
console.log(duck.refract("red"))
console.log(duck.refract("yellow"))
duck.calibrate(lista)
console.log(duck.calibrationSequence)