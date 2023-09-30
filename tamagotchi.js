// alert("File is linked")
class Tamagotchi {
    constructor(name,age, eyes, bodyColor, armColor, legColor) {
        this.legs = 2;
        this.arms = 2;
        this.name = name
        this.age = age;
        this. eyes = eyes;
        this.bodyColor = bodyColor;
        this.armColor = armColor;
        this.legColor = legColor
    }
}
const emma = new Tamagotchi('Emma', 5, 'Brown', 'Pink', 'Black', 'Black')
console.log(emma)