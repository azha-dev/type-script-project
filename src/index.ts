import { Battle } from './battle';
import { Pokemon }from './pokemon';

const salameche = new Pokemon("Salamèche", 100, 30, 25);
const pikachu = new Pokemon("Pikachu", 100, 25, 30);

const battle = new Battle(salameche, pikachu);

battle.letTheBattleBeginAndFinish();