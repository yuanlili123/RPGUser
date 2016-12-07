var User = (function () {
    function User() {
        this.cash = 0;
        this.gold = 0;
        this.exp = 0;
        this.level = 8;
        this.heroes = [];
    }
    var d = __define,c=User,p=c.prototype;
    p.setHero = function (hero) {
        this.heroes.push(hero);
    };
    d(p, "heroesInTeam"
        ,function () {
            return this.heroes.filter(function (hero) { return hero.isInTeam; });
        }
    );
    p.getFightPower = function () {
        var result = 0;
        this.heroesInTeam.map(function (hero) { return result += hero.fightPower; });
        return result;
    };
    return User;
}());
egret.registerClass(User,'User');
var Hero = (function () {
    function Hero(level, quality, strength) {
        this.isInTeam = true;
        this.weapons = [];
        this.level = 1;
        this.quality = 2;
        this.strength = 5;
        this.level = level;
        this.quality = quality;
        this.strength = strength;
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "maxHp"
        ,function () {
            return this.level * 100 * this.quality;
        }
    );
    d(p, "attack"
        ,function () {
            var result = 0;
            result += this.level * 1.8 * this.strength * this.quality;
            return result;
        }
    );
    p.setArm = function (w) {
        this.weapons.push(w);
    };
    d(p, "fightPower"
        ,function () {
            var result = 0;
            this.weapons.forEach(function (e) { return result += e.attack; });
            result += this.attack * 4;
            result += this.maxHp * 8;
            return result;
        }
    );
    return Hero;
}());
egret.registerClass(Hero,'Hero');
var Jewel = (function () {
    function Jewel() {
        this.quality = 4;
        this.edge = 8;
        this.purity = 0.85;
    }
    var d = __define,c=Jewel,p=c.prototype;
    d(p, "attack"
        ,function () {
            var result = 0;
            result += this.edge * this.edge * (this.purity + 1) * this.quality / 8;
            return result;
        }
    );
    d(p, "fightPower"
        ,function () {
            var result = 0;
            result += this.attack * 4;
            return result;
        }
    );
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
var Arm = (function () {
    function Arm() {
        this.jewels = [];
        this.quality = 4;
        this.forge = 8;
    }
    var d = __define,c=Arm,p=c.prototype;
    d(p, "attack"
        ,function () {
            var result = 0;
            result += this.forge * 8 + this.quality;
            return result;
        }
    );
    p.setJewel = function (j) {
        this.jewels.push(j);
    };
    d(p, "fightPower"
        ,function () {
            var result = 0;
            this.jewels.forEach(function (e) { return result += e.fightPower; });
            result += this.attack * 4;
            return result;
        }
    );
    return Arm;
}());
egret.registerClass(Arm,'Arm');
var Cache = function (target, propertyName, desc) {
    var getter = desc.get;
    desc.get = function () {
        return getter.apply(this);
    };
    return desc;
};
//# sourceMappingURL=User.js.map