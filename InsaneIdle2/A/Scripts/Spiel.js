/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function kauf(nummer) {
    if(Game.Sp.geld[1].gt(Game.preis[nummer]) && nummer !=1 ) {
        if(Game.Sp.geld[nummer].gt(0)){
            Game.Sp.geld[1] = Game.Sp.geld[1].sub(Game.preis[nummer]);
            if (Game.Sp.geld[nummer].mul(1.5).lte(Game.maxBuyAmount[nummer]))
                Game.Sp.geld[nummer] = Game.Sp.geld[nummer].mul(1.5);
            else
                Game.Sp.geld[nummer] = Game.Sp.geld[nummer].add(Game.maxBuyAmount[nummer]);
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
    var upgradeMul = [];
    for (var i=1; i<=anzahl ;i++) {
        if (i < anzahl)
        Game.protick[i] = Game.Sp.geld[i+1].mul(Game.produmul[i]).mul(Game.Sp.geld[i]).sqrt();
        Game.preis[i] = Game.basPreis[i].mul(Game.preiserh[i].pow(Game.Sp.anzGek[i]));
        Game.maxBuyAmount[i] = Decimal(10000).add(Game.protick[i].mul(10000));
        upgradeMul[i] = Decimal(1);
        for (var i1=0; i1<upgradeanzahl; i1++) {
            
            upgradeMul[i] = upgradeMul[i].mul(Game.upgradeEfekt[i1].add(1).pow(Game.Sp.upgradeGek[i][i1]));
            Game.upgradePreis[i][i1] = Game.upgradeBasPreis[i][i1].mul(Game.upgradePriceErh[i][i1].pow(Game.Sp.upgradeGek[i][i1]));
        }
        Game.produmul[i] = Game.basprodumul[i].mul(upgradeMul[i].sqrt());
    }
    };


function protick(modi){
    for (var ticker=anzahl ; ticker>0 ; ticker--) {
        modi = modi || 1
        rechnen()
        Game.Sp.geld[ticker] = Game.Sp.geld[ticker].add(Game.protick[ticker].mul(modi));
        TextAktu()
    }
}

function upgradeKauf(num1, num2) {
    if (Game.Sp.geld[1].gt(Game.upgradePreis[num1][num2])) {
        Game.Sp.upgradeGek[num1][num2] = Game.Sp.upgradeGek[num1][num2].add(1);
        Game.Sp.geld[1] = Game.Sp.geld[1].sub(Game.upgradePreis[num1][num2]);
        rechnen()
        TextAktu()
    }
}

function getBuyAmount(was) {
    if (Game.Sp.geld[was].mul(1.5).lte(Game.maxBuyAmount[was]))
        return Game.Sp.geld[was].mul(1.5).sub(Game.Sp.geld[was]).toPrecision(3);
    else
        return Game.maxBuyAmount[was].toPrecision(3);
}
