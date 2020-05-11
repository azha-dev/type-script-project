import Battle from '../src/battle';
import Pokemon from '../src/pokemon';

test('First attacker', () => {
    
    const pikachu = new Pokemon("Pikachu", 50);
    const salameche = new Pokemon("Salamèche", 0);
    const battle = new Battle(pikachu, salameche);

    expect(battle.firstAttacker()).toBe(pikachu)
    
})