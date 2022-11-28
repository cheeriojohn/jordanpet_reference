const health = document.getElementById("health");
const thirst = document.getElementById("thirst");
const hunger = document.getElementById("hunger");
const happiness = document.getElementById("happiness");
const cleanliness = document.getElementById("cleanliness");
//buttons
const feed = document.getElementById("feed");
const play = document.getElementById("play");
const givedrink = document.getElementById("drink");
const clean = document.getElementById("clean");
//picture
const image = document.getElementById("petimg");

class pet {
    constructor(hunger, thirst, happiness, cleanliness, health) {
        this.hunger = hunger;
        this.thirst = thirst;
        this.happiness = happiness;
        this.cleanliness = cleanliness;
        this.health = health;
    }
    // feedPet() {
    //     // con
    //     this.hunger -= 10;
    //     this.cleanliness -= 10;
    //     this.happiness -= 5;
    //     // pro
    //     this.thirst += 10;
    //     this.health += 10;
    // },
    giveDrink() {
        // con
        this.hunger -= 10;
        this.cleanliness -= 10;
        this.thirst -= 10;
        // pro
        this.happiness += 5;
        this.health += 10;
    }
    havePlay() {
        this.hunger -= 20;
        this.cleanliness -= 30;
        this.thirst -= 10;
        //pro
        this.happiness += 20;
        this.health += 15;
    }
    cleanPet() {
        this.cleanliness += 5;
        this.happiness += 3;
        this.health += 2;
    }
}

const jordan = new pet(50, 50, 50, 50, 50)

const feedPet = () => {
    // con
    jordan.hunger -= 10;
    jordan.cleanliness -= 10;
    jordan.happiness -= 5;
    // pro
    jordan.thirst += 10;
    jordan.health += 10;
}

function checkCondition() {
    console.log(jordan.hunger)
    if (jordan.happiness >= 100) {
        jordan.happiness = 100;
    }
    if  (jordan.cleanliness >= 100) {
        jordan.cleanliness = 100
    }
    if (jordan.health >= 100) {
        jordan.health = 100;
    }
    if (jordan.happiness <= 40) {
        image.src = "./images/pikaPunk.jpg"
    }
    if (jordan.happiness <= 30 || jordan.hunger <= 10 || jordan.thirst <= 5 || jordan.health <= 30) {
        image.src = "./images/pikaSad.png";
    }

    if (jordan.hunger <= 0 || jordan.thirst <= 0 || jordan.health <= 0) {
        image.src = "./images/pikaDead.png";
    }

    if (jordan.hunger <= 0) {
        jordan.hunger = 0
    } else if (jordan.happiness <= 0) {
        jordan.happiness = 0
    } else if (jordan.thirst <= 0) {
        jordan.thirst = 0
    } else if (jordan.health <= 0) {
        jordan.health = 0;
    } else if (jordan.cleanliness <= 0) {
        jordan.cleanliness = 0;
    }

}



function renderData() {
    health.textContent = `health: ${jordan.health}`;
    thirst.textContent = `thirst: ${jordan.thirst}`;
    hunger.textContent = `hunger: ${jordan.hunger}`;
    happiness.textContent = `happiness: ${jordan.happiness}`;
    cleanliness.textContent = `cleanliness: ${jordan.cleanliness}`;
}

feed.addEventListener("click", () => {
    feedPet();
    checkCondition();
    flag = true;
    renderData();
});

givedrink.addEventListener("click", () => {
    jordan.giveDrink();
    checkCondition();
    renderData();
});

play.addEventListener("click", () => {
    jordan.havePlay();
    checkCondition();
    renderData();
})
clean.addEventListener("click", () => {
    jordan.cleanPet();
    checkCondition();
    renderData();

})

renderData();
console.log(jordan)
const timingFunction = () => {
    window.setTimeout(() => {
        jordan.hunger -= 2;
        jordan.thirst -= 2;
        jordan.happiness -= 2;
        jordan.cleanliness -= 2;
        jordan.health -= 2;
        checkCondition();
        renderData();
        timingFunction();
    }, 2000);
}
timingFunction();