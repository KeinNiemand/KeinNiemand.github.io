/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Einstellugnen
var anzahl = 10;
var TPS = 30;
Decimal.config({ precision: 12 })
var savever = 2;
var upgradeanzahl = 2;

var uiv = {
    haupt: $("#Haupt"),
    main: $("#Main"),
    levels: [anzahl],
    levinh: [anzahl],
    anzeigen: [anzahl],
    KnopfA: [anzahl],
    preisanzeigen: [],
    produkanzeigen: [],
    options: $("#Options"),
    gekauftanzeige: [],
    Upgrades: {
        upgr : $("#upgr"),
        levels: [],
        levinh: [],
        kaufKnopf: [[]],
        gekauftanzeige: [[]],
        produkmulanzeige: [],
        preisanzeige: [[]]
    }
    
};

var Game = {
    Sp: {
        geld: [],
        anzGek: [],
        lastUpdate: new Date().getTime(),
        upgradeGek: [[]]
    },
    basPreis: [],
    preiserh: [],
    preis: [],
    protick: [],
    savever: savever,
    protickMul: [],
    produmul: [],
    basprodumul: [],
    upgradeEfekt: [],
    upgradePreis: [],
    upgradePriceErh: [],
    upgradeBasPreis: [],
    maxBuyAmount: [null]
};


//Initialiesierung der Variablen
function initvars() {
  for (i = 1; i <= anzahl; i++) {
    Game.Sp.geld[i] = Decimal(0);
    Game.Sp.anzGek[i] = Decimal(0);
    Game.protick[i] = Decimal(0);
    //Game.basPreis[i] = Decimal(Math.pow(1+((i*0.1)-0.2), 66.66) * 100)
    //BASIS PREIS FORMEL
    Game.basPreis[i] = Decimal(Decimal.pow(Decimal.mul(i,0.1).add(0.8), 166.66).mul(2));
    //Game.preiserh[i] = Decimal(1+(1.5*i)^1.8)
    //PREIS ERHÖUNGS FORMEL
    Game.preiserh[i] = Decimal.mul(0.4,i).add(1).pow(1.4);
    Game.preis[i] = Game.basPreis[i];
    Game.basprodumul[i] = Decimal(0.001);
    Game.produmul[i] = Game.basprodumul[i];
    Game.maxBuyAmount[i] = Decimal(10000).add(Game.protick[i].mul(10000));
    //Upgrade Stuff 
    Game.Sp.upgradeGek[i] = [];
    Game.upgradePreis[i] = [];
    Game.upgradeBasPreis[i] = [];
    Game.upgradePriceErh[i] = [];
    for (i1 = 0; i1 < upgradeanzahl; i1++) {
        //Upgrade Effekt Formel
        Game.upgradeEfekt[i1] = Decimal.mul(0.75, Decimal(1.5).pow(i1));
        Game.Sp.upgradeGek[i][i1] = Decimal(0);
        //Upgrade BasPreis Formel
        Game.upgradeBasPreis[i][i1] = Decimal.pow(Decimal.mul(i, Decimal.add(0.1,Decimal.mul(i1,0.05))).add(1), Decimal(70.12).add((i-1)*9)).mul(100);
        Game.upgradePreis[i][i1] = Game.upgradeBasPreis[i][i1];
        //Upgrade Preis Erhöungs Formel
        Game.upgradePriceErh[i][i1] = Decimal.mul(0.1, i).add(1.4).pow(2.8+i1);
        
    }
   }
//Startgeld
   Game.Sp.geld[1] = Decimal(20);
   Game.savever = savever;
   Game.BasSp = Game.Sp;
}
