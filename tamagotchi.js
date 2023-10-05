// alert("File is linked")

// Trying out fade in because i really wanted a fade in 

let opacity = 0;
let intervalID = 0;
window.onload = fadeIn;

function fadeIn() {
    setInterval(show, 300);
}

function show() {
    let body = document.getElementById("h1");
    opacity = Number(window.getComputedStyle(body)
        .getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.1;
        body.style.opacity = opacity
    } else {
        clearInterval(intervalID);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const hungerBar = document.getElementById("hunger-level");
    const boredomBar = document.getElementById("boredom-level");
    const sleepinessBar = document.getElementById("sleepiness-level");
    const ageDisplay = document.getElementById("age");
    const eatButton = document.getElementById("eat-button");
    const playButton = document.getElementById("play-button");
    const sleepButton = document.getElementById("sleep-button");
    const setNameButton = document.getElementById("set-name-button")
    const tamagotchiName = document.querySelector(".tamagotchi-name")
    
    
    let pet = {
        name: "Milktchi",
        hunger: 100,
        boredom: 100,
        sleepiness: 100,
        age: 0,
        ageInterval: setInterval(increaseAge, 2000),
        gameInterval: setInterval(updateStats, 5000),
        isSleeping: false,
    };
   
    // setNameButton.addEventListener("click", function () {
    //     const newName = petNameInput.value;
    //     if (newName.trim() !== "") {
    //         pet.name = newName;
    //         tamagotchiName.textContent = 'Welcome to the world of ${pet.name}';
    //     }
    // setNameButton.addEventListener("click", changePetName)

    eatButton.addEventListener("click", function () {
        if (pet.hunger < 100) {
            pet.hunger += 10;
            updateStats();
        }
    });

    playButton.addEventListener("click", function () {
        if (pet.boredom < 100) {
            pet.boredom += 10;
            updateStats();
        }
    });

    sleepButton.addEventListener("click", function () {
        if (pet.sleepiness < 100) {
            pet.sleepiness += 10;
            updateStats();
            toggleLights();
        } 
    })

    setNameButton.addEventListener("click", function () {
            const newName = prompt("Enter new name for your pet:");
            if (newName !== null && newName.trim() !== "") {
                pet.name = newName;
                tamagotchiName.textContent = `Welcome to the world of ${pet.name} !`;
            }
    // function changePetName() {
    //     const newName = prompt("Enter a new name for your pet:");
    //     if (newName !== null && newName.trim() !== "") {
    //         pet.name = newName;
    //         tamagotchiName.textContent = `Welcome to the world of ${pet.name}!`;
    //     }
    });
    function increaseAge() {
        pet.age++;
        ageDisplay.textContent = pet.age;
    }

    function updateStats() {
        pet.hunger = Math.max(0, pet.hunger - 5) ;
        pet.boredom = Math.max(0, pet.boredom - 5);
        pet.sleepiness = Math.max(0, pet.sleepiness - 5);

        hungerBar.value = pet.hunger;
        boredomBar.value = pet.boredom;
        sleepinessBar.value = pet.sleepiness;

        checkGameOver();
    }

    function checkGameOver() {
        if (pet.hunger === 0 || pet.boredom === 0 || pet.sleepiness === 0) {
            clearInterval(pet.ageInterval);
            clearInterval(pet.gameInterval);
            alert(`Game over! ${pet.name} has passed away.`);
        }
    }
    // function toggleLights() {
    //     pet.isSleeping = !pet.isSleeping;
    //     if(pet.isSleeping) {
    //     tamagotchiImage.classList.add("sleeping");
    //     } else {
    //        tamagotchiImage.classList.remove("sleeping"); 
    //     }
    // }
});


