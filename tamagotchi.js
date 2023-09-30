// alert("File is linked")
class Tamagotchi {
    constructor(hunger,sleepiness,boredom,age) {
        this.hunger = hunger;
        this.sleepiness =sleepiness;
        this.boredom = boredom;
        this.age = age
    }
}
const milktchi = new Tamagotchi('Milktchi', 5, 'Brown', 'Pink', 'Black', 'Black')
console.log(milktchi)

// Trying out jquery because i really wanted a fade in 

let opacity = 0;
        let intervalID = 0;
        window.onload = fadeIn;
          
        function fadeIn() {
            setInterval(show, 200);
        }
          
        function show() {
            let h1 = document.getElementById("h1");
            opacity = Number(window.getComputedStyle(h1)
                            .getPropertyValue("opacity"));
            if (opacity < 1) {
                opacity = opacity + 0.1;
                h1.style.opacity = opacity
            // } else {
            //     clearInterval(intervalID);
            }
        }