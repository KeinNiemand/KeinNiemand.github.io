/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//UI Initialiesierung
$(document).ready(function(){
    uiv.main = $("#Main")
    for (i = 1; i <= anzahl; i++) { 
        
        uiv.levels[i] = $('<h1 id="level' + i + '">lvl'+i+' </h1>')
        uiv.main.append(uiv.levels[i])
        uiv.levinh[i] = $('<div id="levelinh'+ 0 +'"></div>')
        uiv.main.append(uiv.levinh[i])
        uiv.anzeigen[i] =$('<div id="anzeige'+i+'"> 123 </div>')
        uiv.levinh[i].append(uiv.anzeigen[i])
        uiv.KnopfA[i] =$('<button id="KnopfA'+i+'" class="Knopf" onclick="kauf('+i+')">Buy 1/50%More</button> ')
        if (i != 1)
        uiv.levinh[i].append(uiv.KnopfA[i])
        uiv.preisanzeigen[i] = $('<span id="pAnzeige'+i+'"> Preis: </span>')
        if (i != 1)
        uiv.levinh[i].append(uiv.preisanzeigen[i])
        uiv.produkanzeigen[i] = $("<div id='produktanzeige"+i+"'> your lvl"+i+" get's multiplyed by xxx Pt </div>");
        uiv.levinh[i].append(uiv.produkanzeigen[i]);
}
    
    uiv.main.accordion();
    $("nav>*:first").click(function() {
      uiv.main.slideToggle();
    })
    $("*").css("font-family" , "Segoe UI Semibold,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue Frutiger, Verdana");
    $("#Main").css("font-family" , "Segoe UI,Frutiger Linotype,Dejavu Sans,Helvetica Neue Frutiger, Verdana");
})

function TextAktu() {
    for (i=1; i<=anzahl;i++) {
        $("#anzeige"+i).text(Game.Sp.geld[i].toPrecision(3) + 'lvl' +i);
        $("#pAnzeige"+i).text("Price:" + Game.preis[i].toPrecision(3) + ' lvl1');
        $("#produktanzeige"+i).text("your lvl"+i+" get's multiplyed by "+Game.prosek[i].toPrecision(6)+" pT")
        uiv.anzeigen[0]
    }
}

