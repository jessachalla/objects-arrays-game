const blossom = {
    name: "Blossom",
    health: 50,
}
const bubbles = {
    name: "Bubbles",
    health: 50,
}
const buttercup = {
    name: "Buttercup",
    health: 50,
}
const characters = [blossom, bubbles, buttercup];

const opponent = {
    name: "Mojo Jojo",
    health: 100,
}

while (opponent.health >= 0){
    let start = prompt("Choose which character you want to fight: 1 for Blossom, 2 for Bubbles, or 3 for Buttercup.");
    if (start === null) {
        console.log("You have left the game.");
        break;
    }
    else if (opponent.health < 5){
        console.log("YOU HAVE DEFETED MOJO JOJO!")
    }
    else if (start === "1") {
        if (blossom.health <= 0) {
            console.log("Sorry pick another character.")
        }
        else if (blossom.health >= 0) {
        blossom.health = blossom.health - 5;
        opponent.health = opponent.health - 5; 
            }
        }
    else if (start === "2") {
        if (bubbles.health <= 0) {
            console.log("Sorry pick another character.")
        }
        else if (bubbles.health >= 0) {
        bubbles.health = bubbles.health - 5;
        opponent.health = opponent.health - 5;
        }
    }
    else if (start === "3") {
        if (buttercup.health <= 0) {
            console.log("Sorry pick another character.")
        }
        else if (buttercup.health >= 0) {
        buttercup.health = buttercup.health - 5;
        opponent.health = opponent.health - 5;
        }
    }
    console.log(blossom.name, blossom.health);
    console.log(bubbles.name, bubbles.health);
    console.log(buttercup.name, buttercup.health);
    console.log(opponent.name, opponent.health);
}

