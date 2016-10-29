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
	DecimalWerteKonvertieren()
	rechnen()
	TextAktu()
}

function DecimalWerteKonvertieren() {
    for (konv=1;konv<=anzahl;konv++) {
        Game.Sp.anzGek[konv] = Decimal.fromJSON(Game.Sp.anzGek[konv]);
        Game.Sp.geld[konv] = Decimal.fromJSON(Game.Sp.geld[konv]);
    }
}


