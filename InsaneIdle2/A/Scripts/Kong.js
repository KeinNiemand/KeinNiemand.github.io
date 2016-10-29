/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function statakt() {
    for(kongi=1;kongi<=anzahl;kongi++) {
    kongregate.stats.submit("log10lvl"+i, Game.Sp.geld[i].log(10).toNumber());
    kongregate.stats.submit("log10lvl"+i+"bought", Game.Sp.anzGek[i].log(10).toNumber());
    kongregate.stats.submit("log10lvl"+i+"pT", Game.prosek[i].log(10).toNumber());
    }
}