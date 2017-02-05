/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function kauf(nummer) {
    if(Game.Sp.geld[1].gt(Game.preis[nummer]) && nummer !=1 ) {
        if(Game.Sp.geld[nummer].gt(0)){
            Game.Sp.geld[1] = Game.Sp.geld[1].sub(Game.preis[nummer]);
            Game.Sp.geld[nummer] = Game.Sp.geld[nummer].mul(1.5);
            Game.Sp.anzGek[nummer] = Game.Sp.anzGek[nummer].add(1)
            rechnen()
            TextAktu()
        }
        else {
            Game.Sp.geld[1] = Game.Sp.geld[1].sub(Game.preis[nummer]);
            Game.Sp.geld[nummer] = Decimal(1);
            Game.Sp.anzGek[nummer] = Game.Sp.anzGek[nummer].add(1);
            rechnen()
            TextAktu()
        }
    }
}

function rechnen() {
    for (i=1; i<=anzahl ;i++) {
        if (i < anzahl)
        Game.protickMul[i] = Game.Sp.geld[i+1].mul(Game.Sp.produmul[i]);
        Game.protick[i] = Game.protickMul[i].mul(Game.Sp.geld[i]).sqrt();
        Game.preis[i] = Game.basPreis[i].mul(Game.preiserh[i].pow(Game.Sp.anzGek[i]));
    };
}

function protick(modi){
    for (ticker=anzahl ; ticker>0 ; ticker--) {
        modi = modi || 1
        rechnen()
        Game.Sp.geld[ticker] = Game.Sp.geld[ticker].add(Game.protick[ticker].mul(modi));
        TextAktu()
    }
}