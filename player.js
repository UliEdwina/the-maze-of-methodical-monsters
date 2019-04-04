const player = {
    hitPoints: 100,
    lastDamageTaken: 0,
    isAlive: true,
    level: 1,
    rawDamage: this.calculateRawDamage, 
    fight: function(enemy){
        this.lastDamageTaken = Math.floor(Math.random() * 5)
        this.hitPoints = this.hitPoints - this.lastDamageTaken
    },
    calculateRawDamage: function(enemy){
        this.rawDamage = Math.floor(Math.random() * 5)

    },
    levelUp: function(enemy){
        this.level = this.level + 1
        let xtra = this.level + this.hitPoints + 5 + Math.floor(Math.random() * 5)
        return xtra
    }
}
//this.rawDamage = this.level - this.rawDamage
       // this.lastDamageTaken = this.rawDamage