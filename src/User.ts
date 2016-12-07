class User {

    cash: number = 0;
    gold: number = 0;
    exp: number = 0;
    level: number = 8;
    heroes: Hero[] = []

    setHero(hero: Hero) {
        this.heroes.push(hero);
    }

    get heroesInTeam() {
        return this.heroes.filter(hero => hero.isInTeam);
    }

    getFightPower() {
        var result = 0;
        this.heroesInTeam.map(hero => result += hero.fightPower);
        return result;
    }

}

class Hero {

    isInTeam: boolean = true;
    weapons: Arm[] = [];
    level = 1;
    quality = 2;
    strength = 5;

    constructor(level: number, quality: number, strength: number) {
        this.level = level;
        this.quality = quality;
        this.strength = strength;
    }

    get maxHp() {
        return this.level * 100 * this.quality;
    }

    get attack() {
        var result = 0;
        result += this.level * 1.8* this.strength * this.quality;
        return result;

    }

    setArm(w: Arm) {
        this.weapons.push(w);
    }

    get fightPower() {
        var result = 0;
        this.weapons.forEach(e => result += e.attack);
        result += this.attack * 4;
        result += this.maxHp * 8;
        return result;
    }

}

class Jewel {

    quality = 4;
    edge = 8;
    purity = 0.85;

    get attack() {
        var result = 0;
        result += this.edge * this.edge * (this.purity + 1) * this.quality / 8;
        return result;
    }

    get fightPower() {
        var result = 0;
        result += this.attack * 4;
        return result;
    }

}

class Arm {

    jewels: Jewel[] = [];
    quality = 4;
    forge = 8;

    get attack() {
        var result = 0;
        result += this.forge * 8 + this.quality;
        return result;
    }

    setJewel(j: Jewel) {
        this.jewels.push(j);
    }

    get fightPower() {
        var result = 0;
        this.jewels.forEach(e => result += e.fightPower);
        result += this.attack * 4;
        return result;
    }

}

var Cache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {
    const getter = desc.get;
    desc.get = function () {
        return getter.apply(this);
    }
    return desc;
}