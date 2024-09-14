## Pokémon Evolution Warmup

### Overview

In this warmup exercise, you will practice object-oriented programming (OOP) by creating a Pokémon that can level up and evolve through different stages. The Pokémon will start at level 1, and as it levels up, its stage and attack move will change.

This exercise will help you practice:

- Object-oriented programming concepts
- Method creation
- Conditional logic

### Instructions

1. Create a Pokémon Class:

- Write a `Pokemon` class with the following properties:
  - `name`: The Pokémon's name (e.g., "Charmander"). 
    ***This is not required to change when the Pokémon evolves.***
  - `level`: The starting level (default: 1).
  - `move`: A string representing the move it can use at its current level (e.g., `"Tackle"`).
  - `stage`: The Pokémon’s current stage, which changes when it evolves (default: 1):
    - Stage 1: Levels 1-15.
    - Stage 2: Levels 16-35.
    - Stage 3: Level 36 and above.

2. Leveling Up:

***This is an example of the Pokémon [Charmander](https://www.pokemon.com/us/pokedex/charmander), feel free to use a Pokémon of your choice that has 3 stages of evolution.***
[Pokedex](https://www.pokemon.com/us/pokedex/)


- Implement a `levelUp()` method that increases the Pokémon's level by a specified number (default: 1).
- As the Pokémon levels up, its stage changes:
    - Stage 1 (Levels 1-15): Move = `"Scratch"`.
    - Stage 2 (Levels 16-35): Move = `"Flame Thrower"`.
    - Stage 3 (Level 36+): Move = `"Fire Spin"`.
- Logs the new level and stage after leveling up.
Eample: 
``` js
let myPokemon = new Pokemon("Charmander");
myPokemon.levelUp(); // Logs: "Charmander leveled up to level 2. Charmander is in Stage 1!"
myPokemon.levelUp(16); // Logs: "Charmander leveled up to level 17. Charmander is in Stage 2!"
```
3. Attacking:
- Write an `attack()` method that logs a message like: 
``` js
myPokemon.attack(); // Logs: "Charmander used Scratch!"
```
- The attack move should be based on the Pokémon's stage.

***Note: Loggging the instance of the Pokémon should return all of the properties of the Pokémon.***








### Bonus Features:
1. Update the Pokémon's name based on its stage:
- Stage 1: Name remains as the initial name (e.g., "Charmander").
- Stage 2: Change the name to an evolved form (e.g., "Charmeleon").
- Stage 3: Change the name to the final evolved form (e.g., "Charizard").
``` js
let myPokemon = new Pokemon("Charmander");
myPokemon.levelUp(20); // Logs: "Charmander leveled up to level 20. Charmeleon has evolved to Stage 2!"
myPokemon.attack(); // Logs: "Charmeleon used Flame Thrower!"
```

2. Change the Pokémon’s moves to an array and randomly select a move when attacking:
- Stage 1: Move pool is `["Scratch"]`.
- Stage 2: Add `"Flame Thrower"` to the move pool.
- Stage 3: Add `"Fire Spin"` to the move pool.
- Use `Math.random()` to randomly pick a move from the array when the `attack()` method is called.
``` js
console.log(myPokemon) // Logs: {name: "Charmeleon", level: 20, moves: ["Scratch, "Flame Thrower]", stage: 2}
myPokemon.attack(); // This will choose randomly between Scratch and Flame Thrower
```


### Additional Code Explanation:
- Moves Array:

   - The moves are stored in an array called this.moves. Initially, the Pokémon knows "Scratch". When the Pokémon evolves, new moves like "Flame Thrower" or "Fire Spin" are added to the array using concat().
- Random Move Selection:

  - The `attack()` method uses `Math.random()` to randomly select a move from the array of moves.
- Name Change Upon Evolution:

  - The Pokémon's name changes based on the evolution stage. For example, Charmander evolves into Charmeleon at level 16 and then into Charizard at level 36.
