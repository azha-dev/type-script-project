export class Pokemon {
    name: string;
    hp: number;
    speed: number;
    attack: number;

    constructor(name: string, hp: number, speed: number, attack: number) {
        this.name = name;
        this.hp = hp;
        this.speed = speed;
        this.attack = attack;
    }
}