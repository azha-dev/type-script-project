import { Pokemon } from './pokemon';

export class Battle {
    pokemonOne: Pokemon;
    pokemonTwo: Pokemon;
    winner: Pokemon = null;

    constructor(pokemonOne: Pokemon, pokemonTwo: Pokemon){
        this.pokemonOne = pokemonOne;
        this.pokemonTwo = pokemonTwo;
    }

    firstAttacker(): Pokemon {
        if (this.pokemonOne.speed>this.pokemonTwo.speed) {
            return this.pokemonOne
        } else if (this.pokemonOne.speed<this.pokemonTwo.speed) {
            return this.pokemonTwo
        } else {
            let pokemonNumber = Math.floor(Math.random() * 2)+1
            return pokemonNumber===1 ? this.pokemonOne : this.pokemonTwo
        }
    }

    doAttack(attacker: Pokemon, defender: Pokemon): void{
        defender.hp -= attacker.attack
    }

    determineTheWinner(): void{
        if(this.pokemonOne.hp <= 0){
            this.winner = this.pokemonTwo;
        } else if(this.pokemonTwo.hp <= 0){
            this.winner = this.pokemonOne;
        }
    }

    oneTurn(): void{
        const firstAttacker = this.firstAttacker();
        const firstDefender = firstAttacker===this.pokemonOne ? this.pokemonTwo : this.pokemonOne;

        this.doAttack(firstAttacker, firstDefender);
        console.log(firstAttacker.name +" attack "+ firstDefender.name)
        console.log(firstDefender.name + " have "+ firstDefender.hp +" hp left !")
        this.doAttack(firstDefender, firstAttacker);
        console.log(firstDefender.name +" attack "+ firstAttacker.name)
        console.log(firstAttacker.name + " have "+ firstAttacker.hp +" hp left !")
        console.log("\n");
        this.determineTheWinner()
    }

    letTheBattleBeginAndFinish(): void{
        console.log("The battle between "+this.pokemonOne.name+" and "+this.pokemonOne.name+" begin !\n")
        while(this.winner === null){
            this.oneTurn();
        }
        console.log("And the winner is ..."); 
        console.log(this.winner.name);
    }
}