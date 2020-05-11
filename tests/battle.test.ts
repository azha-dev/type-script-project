import { Battle } from '../src/battle';
import { Pokemon }from '../src/pokemon';


    
test("First attacker should be the pokemon with the greatest speed if they're differents", () => {
    const pikachu = new Pokemon("Pikachu", 100, 50, 25);
    const salameche = new Pokemon("Salamèche", 100, 25, 25);
    
    const battle = new Battle(pikachu, salameche);

    expect(battle.firstAttacker()).toBe(pikachu);
});    

test("First attacker be random if the speeds are equals", () => {
    const pikachu = new Pokemon("Pikachu", 100, 50, 25);
    const salameche = new Pokemon("Salamèche", 100, 50, 25);

    const battle = new Battle(pikachu, salameche);
    const firstAttacker = battle.firstAttacker();
    expect(firstAttacker == salameche || firstAttacker == pikachu).toBeTruthy();
});

test("Attack should substract attacker attack from defender hp", () => {
    const pikachu = new Pokemon("Pikachu", 100, 50, 25);
    const salameche = new Pokemon("Salamèche", 100, 50, 25);

    const battle = new Battle(pikachu, salameche);
    battle.doAttack(pikachu, salameche);

    expect(salameche.hp).toBe(75);
});

test("Should name the winner if one of the pokemon have 0 hp", () => {
    const pikachu = new Pokemon("Pikachu", 0, 50, 25);
    const salameche = new Pokemon("Salamèche", 100, 50, 25);

    const battle = new Battle(pikachu, salameche);
    battle.determineTheWinner();
    expect(battle.winner).toBe(salameche);
});

test("oneTurn should do attack between the two pokemon of the battle", () => {
    const pikachu = new Pokemon("Pikachu", 100, 50, 25);
    const salameche = new Pokemon("Salamèche", 150, 50, 25);

    const battle = new Battle(pikachu, salameche);
    battle.oneTurn();
    expect(pikachu.hp).toBe(75);
    expect(salameche.hp).toBe(125);
});