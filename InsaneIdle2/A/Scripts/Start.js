/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    initvars()
    Laden()
    TextAktu()
    setInterval(protick, 1000/TPS);
    setInterval(Speichern, 10000);
    setInterval(statakt, 10000);
});


