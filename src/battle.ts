import Pokemon from '../src/pokemon';

export default class Battle {
    pokemonOne: Pokemon;
    pokemonTwo: Pokemon;
    
    constructor(pokemonOne: Pokemon, pokemonTwo: Pokemon){
        this.pokemonOne = pokemonOne;
        this.pokemonTwo = pokemonOne;
    }

    firstAttacker() {
        return this.pokemonOne.speed>this.pokemonTwo.speed ? this.pokemonOne : this.pokemonTwo;
    }
}