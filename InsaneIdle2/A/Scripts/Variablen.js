/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Einstellugnen
var anzahl = 5;
var TPS = 30;
Decimal.config({ precision: 12 })
var savever = 2;

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
    gekauftanzeige: []
};

var Game = {
    Sp: {
        geld: [],
        anzGek: [],
        produmul: [],
        lastUpdate: new Date().getTime()
    },
    basPreis: [],
    preiserh: [],
    preis: [],
    protick: [],
    savever: savever,
    protickMul: []
};


//Initialiesierung der Variablen
function initvars() {
  for (i = 1; i <= anzahl; i++) {
    Game.Sp.geld[i] = Decimal(0);
    Game.Sp.anzGek[i] = Decimal(0);
    Game.protick[i] = Decimal(0);
    Game.protickMul[i] = Decimal(0);
    //Game.basPreis[i] = Decimal(Math.pow(1+((i*0.1)-0.2), 66.66) * 100)
    //BASIS PREIS FORMEL
    Game.basPreis[i] = Decimal(Decimal.pow(Decimal.mul(i,0.1).add(0.8), 166.66).mul(2));
    //Game.preiserh[i] = Decimal(1+(1.5*i)^1.8)
    //PREIS ERHÖUNGS FORMEL
    Game.preiserh[i] = Decimal.mul(0.4,i).add(1).pow(1.4);
    Game.preis[i] = Game.basPreis[i];
    Game.Sp.produmul[i] = Decimal(0.001);
}    
//Startgeld
   Game.Sp.geld[1] = Decimal(20);
   Game.savever = savever;
   Game.BasSp = Game.Sp;
}
