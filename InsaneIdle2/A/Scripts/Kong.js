/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function statakt() {
    for(kongi=1;kongi<=anzahl;kongi++) {
    kongregate.stats.submit("log10lvl"+kongi, Game.Sp.geld[kongi].log(10).toNumber());
    kongregate.stats.submit("log10lvl"+kongi+"bought", Game.Sp.anzGek[kongi].log(10).toNumber());
    kongregate.stats.submit("log10lvl"+kongi+"pT", Game.protick[kongi].log(10).toNumber());
    }
}