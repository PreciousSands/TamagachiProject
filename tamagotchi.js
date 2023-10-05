// alert("File is linked")
let pet = null;

document.addEventListener("DOMContentLoaded", function () {
    const startGameButton = document.getElementById("start-game-button");
    const hungerBar = document.getElementById("hunger-level");
    const boredomBar = document.getElementById("boredom-level");
    const sleepinessBar = document.getElementById("sleepiness-level");
    const ageDisplay = document.getElementById("age");
    const eatButton = document.getElementById("eat-button");
    const playButton = document.getElementById("play-button");
    const sleepButton = document.getElementById("sleep-button");
    const setNameButton = document.getElementById("set-name-button");
    const tamagotchiName = document.querySelector(".tamagotchi-name");

    function startPetAnimation() {
        const petImage = document.getElementById("pet-image");
        petImage.classList.add("pet-animation");
    }

    function stopPetAnimation() {
        const petImage = document.getElementById("pet-image");
        petImage.classList.remove("pet-animation");
    }

    function isPetAlive() {
        return true; 
    }
    setNameButton.addEventListener("click", function () {
        const newName = prompt("Enter new name for your pet:");
        if (newName !== null && newName.trim() !== "") {
            pet.name = newName;
            tamagotchiName.textContent = `Welcome to the world of ${pet.name} !`;
        }
    });

//  buttons
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
            
        }
    });
   
    if (startGameButton) {
        startGameButton.addEventListener("click", startGame);
    }
    function startGame() {
        if (!pet) {
            pet = {
                name: "Milktchi",
                hunger: 100,
                boredom: 100,
                sleepiness: 100,
                age: 0,
                ageInterval: setInterval(increaseAge, 2000),
                gameInterval: setInterval(updateStats, 5000),
                isSleeping: false,
            };
            startPetAnimation();
            console.log("Game started!");
        }
    }

    // Rest of your code remains the same

    function changePetImageByAge() {
        if (pet.age > 15) {
            document.getElementById("pet-image").src = "images/Adult_milktchi-r.png";
        } else if (pet.age > 8) {
            document.getElementById("pet-image").src = "images/MilktchiFashionCollab.PNG.webp 1.webp";
        } else {
            document.getElementById("pet-image").src = "images/Milktchi_animated_sprite.webp";
        }
    }

    // function to increase my pet's age
    function increaseAge() {
        pet.age++;
        ageDisplay.textContent = pet.age;
        changePetImageByAge();
    }

    // function so that the status bars can deplete unless clicked to refill
    function updateStats() {
        pet.hunger = Math.max(0, pet.hunger - 5);
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
    };
});
