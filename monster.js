const monster = {
    hitPoints: 30,
    lastDamageTaken: 0,
    isAlive: true,
    level: 1,
    rawDamage: this.calculateRawDamage,
    calculateRawDamage: function(enemy){
        let plus = 2 + Math.floor(Math.random() * 5)
        return plus
    },   
    takeDamage: function(enemy){
        this.lastDamageTaken = Math.floor(Math.random() * 5)
        this.lastDamageTaken =  this.lastDamageTaken + this.hitPoints
       // this.level = this.level - this.rawDamage
        //this.lastDamageTaken = this.level

    },
     
};