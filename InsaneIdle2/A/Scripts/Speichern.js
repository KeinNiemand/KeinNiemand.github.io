/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Speichern() {
   localStorage["InsaneIdle2S"] = btoa(JSON.stringify(Game.Sp));
}

function Laden() {
    if (!localStorage["InsaneIdle2S"]) return;
    var save_data = JSON.parse(atob(localStorage["InsaneIdle2S"]));
    Game.Sp = save_data;
    if (Game.Sp.savever == null || Game.Sp.savever == 0) {
        Game.Sp.savever=0
        DecimalWerteKonvertieren()
    }
    else
        initvars()
	rechnen()
	TextAktu()
}

function DecimalWerteKonvertieren() {
    for (konv=1;konv<=anzahl;konv++) {
        Game.Sp.anzGek[konv] = Decimal.fromJSON(Game.Sp.anzGek[konv]);
        Game.Sp.geld[konv] = Decimal.fromJSON(Game.Sp.geld[konv]);
    }
}

function reset() {
    var code = prompt("This will completly delete your save you will not get anything type in yes and click ok to reset", "No");
    if (code == "yes");
    initvars();
}


