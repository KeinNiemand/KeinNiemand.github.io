/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var combineObj = function(obj1, obj2) {
    for(var key in obj2){
        obj1[key] = obj2[key]
    }
    return obj1
    }



function Speichern() {
   localStorage["InsaneIdle2S"] = btoa(JSON.stringify(Game.Sp));
   localStorage["InsaneIdle2S_ver"] = btoa(JSON.stringify(Game.savever))
}

function Laden() {
    if (!localStorage["InsaneIdle2S_ver"]) return;
    var save_data_ver = JSON.parse(atob(localStorage["InsaneIdle2S_ver"]));
    Game.savever = save_data_ver;
    if (Game.savever === savever) {
        if (!localStorage["InsaneIdle2S"]) return;
        var save_data =  JSON.parse(atob(localStorage["InsaneIdle2S"]));
        initvars()
        Game.Sp = combineObj(Game.Sp , save_data);
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
        for (konv2=0; konv2<upgradeanzahl; konv2++) {
            Game.Sp.upgradeGek[konv][konv2] = Decimal.fromJSON(Game.Sp.upgradeGek[konv][konv2]);
        }
    }
}

function reset() {
    var code = prompt("This will completly delete your save you will not get anything type in yes and click ok to reset", "No");
    if (code === "yes")
    initvars();
}


