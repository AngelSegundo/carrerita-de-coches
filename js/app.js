const carRaceApp = {
    name: 'Car Race App',
    description: 'Canvas app for basic car race',
    version: '1.0.0',
    author: 'Angel Rodriguez',
    license: undefined,
    canvasNode: undefined,
    ctx: undefined,
    gameSize: { w: undefined, h: undefined },
    counter: 0,
    framesIndex: 0,                 // <- ayudita


    startGame(canvasID) {
        this.canvasNode = document.querySelector(`#${canvasID}`)
        this.ctx = this.canvasNode.getContext('2d')
        this.setDimensions()
        this.setEventListeners()
        this.createCar()
        this.createRoad()
        this.start()
        this.drawImage()
        this.drawScore()
    },

    setDimensions() {
        this.gameSize = {
            w: 500,
            h: 675,
        }
        this.canvasNode.setAttribute('width', this.gameSize.w)
        this.canvasNode.setAttribute('height', this.gameSize.h)
    },

    drawImage() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/road.png'
    },


    setEventListeners() {
        document.onkeydown = event => {
            const { key } = event
            if (key === 'ArrowLeft' && this.car.carPos.x > 80) {
                this.car.moveLeft()
            }
            if (key === 'ArrowRight' && this.car.carPos.x < this.gameSize.w - 70 - this.car.carSize.w) {
                this.car.moveRight()
            }

            // if (key === 'ArrowUp') {
            //     this.car.moveUp()
            // }

            // if (key === 'ArrowDown') {
            //     this.car.moveDown()
            // }
        }
    },

    createCar() {
        this.car = new Car(this.ctx, 215.5, 574, 65, 100)
    },



    createRoad() {
        this.road = new Road(this.ctx, this.gameSize, 0, 0, this.gameSize.w, this.gameSize.h, 0)
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++      // <- ayudita
        }, 30)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

    drawAll() {

        if (this.framesIndex % 15 === 0) this.createObstacle()   // <- ayudita :3
        // this.ctx.drawImage(this.imageInstance, 0, 0, this.gameSize.w, this.gameSize.h)
        this.road.draw()

        this.car.draw()

    },

    createObstacle() {
        this.counter++
        console.log(this.counter);
    },

    drawScore() {
        this.ctx.font = "50px arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText(`Score: ${this.counter}`, 100, 120);
    },

}