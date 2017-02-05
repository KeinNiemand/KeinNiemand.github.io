/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//UI Initialiesierung
$(document).ready(function(){

    uiv.main = $("#Main")
    for (i = 1; i <= anzahl; i++) { 
        
        uiv.levels[i] = $('<h1 id="level' + i + '" class="levels">lvl'+i+' </h1>')
        uiv.main.append(uiv.levels[i])
        uiv.levinh[i] = $('<div id="levelinh'+ i +'" class="levelinh"></div>')
        uiv.main.append(uiv.levinh[i])
        uiv.anzeigen[i] =$('<div id="anzeige'+i+'"> 123 </div>')
        uiv.levinh[i].append(uiv.anzeigen[i])
        uiv.KnopfA[i] =$('<button id="KnopfA'+i+'" class="Knopf" onclick="kauf('+i+')">Buy 1/50%More</button> ')
        if (i != 1)
        uiv.levinh[i].append(uiv.KnopfA[i])
        uiv.preisanzeigen[i] = $('<span id="pAnzeige'+i+'"> Preis: </span>')
        if (i != 1)
        uiv.levinh[i].append(uiv.preisanzeigen[i])
        uiv.produkanzeigen[i] = $("<div id='produktanzeige"+i+"'> you get xxx lvl "+i+" Pt </div>");
        uiv.levinh[i].append(uiv.produkanzeigen[i]);
        uiv.gekauftanzeige[i] = $("<div id='gekauftanzeige"+i+"'> </div>");
        uiv.levinh[i].append(uiv.gekauftanzeige[i]);
}
    uiv.options.slideUp();
    //Hiding lvl1 bought counter
    $("#gekauftanzeige1").hide()

                 $('.levels').on('click', function() {
                 $(this).next('.levelinh').slideToggle();
                });
    $("nav>*:first").click(function() {
      uiv.main.slideToggle();
      uiv.options.slideUp();
    })
    $("*").css("font-family" , "Segoe UI Semibold,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue Frutiger, Verdana");
    $("#Main").css("font-family" , "Segoe UI,Frutiger Linotype,Dejavu Sans,Helvetica Neue Frutiger, Verdana");
    uiv.options.css("font-family" , "Segoe UI,Frutiger Linotype,Dejavu Sans,Helvetica Neue Frutiger, Verdana");
    $("#NavOpt").click(function() {
      uiv.main.slideUp();
      uiv.options.slideToggle();
    })
})

function TextAktu() {
    for (i=1; i<=anzahl;i++) {
        $("#anzeige"+i).text(Game.Sp.geld[i].toPrecision(3) + 'lvl' +i);
        $("#pAnzeige"+i).text("Price: " + Game.preis[i].toPrecision(3) + ' lvl1');
        $("#produktanzeige"+i).text("you get "+Game.protick[i].mul(TPS).toPrecision(3)+" lvl "+i+" Ps");
        uiv.anzeigen[0];
        $("#gekauftanzeige"+i).text("you have bought this "+Game.Sp.anzGek[i].toPrecision(3)+" times");
        if (Game.Sp.geld[1].gt(Game.preis[i]))
            $("#KnopfA"+i).css("background-color", "silver");
        else 
            $("#KnopfA"+i).css("background-color", "grey");
    }
}