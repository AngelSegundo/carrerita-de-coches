class Road {

    constructor(ctx, gameSize, posX, posY, width, height, speed) {
        this.ctx = ctx
        this.roadPos = { x: posX, y: posY }
        this.roadSize = { w: width, h: height }
        this.speed = speed
        this.gameSize = gameSize

        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image
        this.imageInstance.src = './images/road.png'
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.roadPos.x, this.roadPos.y, this.roadSize.w, this.roadSize.h)
    }

    move() {
        this.roadPos.y += this.speed

        if (this.roadPos.y >= this.gameSize.h - this.roadSize.h) {
            this.turnAround()
        }

        if (this.roadPos.y <= 0) {
            this.turnAround()
        }
    }

    turnAround() {
        this.speed *= -1
    }

}