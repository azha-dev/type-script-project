import { Battle } from '../src/battle';
import { Pokemon }from '../src/pokemon';


describe('First attacker', () => {
    it("should be the pokemon with the greatest speed if they're differents", () => {
        const pikachu = new Pokemon("Pikachu", 100, 50, 25);
        const salameche = new Pokemon("Salamèche", 100, 25, 25);
        
        const battle = new Battle(pikachu, salameche);

        expect(battle.firstAttacker()).toBe(pikachu);
    });    

    it("should be random if the speeds are equals", () => {
        const pikachu = new Pokemon("Pikachu", 100, 50, 25);
        const salameche = new Pokemon("Salamèche", 100, 50, 25);

        const battle = new Battle(pikachu, salameche);
        const firstAttacker = battle.firstAttacker();
        expect(firstAttacker == salameche || firstAttacker == pikachu).toBeTruthy();
    });
});

describe('Attack ', () => {
    it("Attack should substract attacker attack from defender hp", () => {
        const pikachu = new Pokemon("Pikachu", 100, 50, 25);
        const salameche = new Pokemon("Salamèche", 100, 50, 25);

        const battle = new Battle(pikachu, salameche);
        battle.doAttack(pikachu, salameche);

        expect(salameche.hp).toBe(75);
    });
});

describe('The winner', () => {
    it("should be named when the other pokemon have 0 hp", () => {
        const pikachu = new Pokemon("Pikachu", 0, 50, 25);
        const salameche = new Pokemon("Salamèche", 100, 50, 25);

        const battle = new Battle(pikachu, salameche);
        battle.determineTheWinner();
        expect(battle.winner).toBe(salameche);
    });

    it("should be first pokemon when the two pokemon have 0 hp", () => {
        const pikachu = new Pokemon("Pikachu", 0, 50, 25);
        const salameche = new Pokemon("Salamèche", 0, 50, 25);

        const battle = new Battle(pikachu, salameche);
        battle.determineTheWinner();
        expect(battle.winner).toBe(salameche);
    });
});

describe('oneTurn', () => {
    it("should do attack between the two pokemon of the battle", () => {
        const pikachu = new Pokemon("Pikachu", 100, 50, 25);
        const salameche = new Pokemon("Salamèche", 150, 50, 25);

        const battle = new Battle(pikachu, salameche);
        battle.oneTurn();
        expect(pikachu.hp).toBe(75);
        expect(salameche.hp).toBe(125);
    });
});