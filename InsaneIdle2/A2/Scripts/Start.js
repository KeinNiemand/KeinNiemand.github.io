/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    initvars()
    Laden()
    TextAktu()
    setInterval(function(){
        var thisUpdate = new Date().getTime();
        var diff = (thisUpdate - Game.Sp.lastUpdate);
        diff = Math.round(diff / (1000/TPS));
        protick(diff);
        Game.Sp.lastUpdate = thisUpdate;
    }, 1000/TPS);
    
    setInterval(Speichern, 10000);
    setInterval(statakt, 10000);
});


