class Pokemon {
    constructor(name, level = 1) {
        this.name = name;
        this.level = level;
        this.moves = ["Tackle"];
        this.stage = 1;
    }

    levelUp() {
        this.level++;
        this.updateStageAndName();
        console.log((`${this.name} leveled up to level ${this.level}!`));
    }

    updateStageAndName() {
        if (this.level > 36) {
            this.stage = 3;
            this.name = "Charizard";
            this.moves.push("Flamethrower");
        } else if (this.level > 16) {
            this.stage = 2;
            this.name = "Charmeleon";
            this.moves.push("quick attack");
        } else {
            this.stage = 1;
            this.name = "Charmander";
            this.moves.push("leer");
        }
    }
    attack() {
        const move = this.moves[Math.floor(Math.random() * this.moves.length)];
        return `${this.name} used ${move}!`;
    }
}

const charmander = new Pokemon("Charmander", 1);

const charmeleon = new Pokemon("Charmeleon", 16);

const charizard = new Pokemon("Charizard", 36);


console.log(charmander.attack());

