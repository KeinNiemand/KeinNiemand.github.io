/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//UI Initialiesierung

function generateMain() {
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
}
function generateUpgradesUI(){
    uiv.Upgrades.upgr = $("#Upgr")
    for (var u = 1; u<= anzahl; u++) {
        uiv.Upgrades.levels[u] = $('<h1 id="upgrLevel' + u + '" class="levels">Upgrade lvl'+u+' </h1>');
        uiv.Upgrades.upgr.append(uiv.Upgrades.levels[u]);
        uiv.Upgrades.levinh[u] = $("<div class='levelinh'></div>");
        uiv.Upgrades.upgr.append(uiv.Upgrades.levinh[u]);
        uiv.Upgrades.produkmulanzeige[u] = $("<p id='produmulanz"+u+"'>Error1</p>");
        uiv.Upgrades.levinh[u].append(uiv.Upgrades.produkmulanzeige[u]);
        uiv.Upgrades.kaufKnopf[u] = [];
        uiv.Upgrades.preisanzeige[u] = [];
        uiv.Upgrades.gekauftanzeige[u] = [];
        for (var u2 = 0; u2<upgradeanzahl; u2++){
            uiv.Upgrades.kaufKnopf[u][u2] = $("<button id='upgrkn"+u+"S"+u2+"'onclick='upgradeKauf("+u+","+u2+")'>Error2</button>");
            uiv.Upgrades.levinh[u].append(uiv.Upgrades.kaufKnopf[u][u2]);
            uiv.Upgrades.preisanzeige[u][u2] = $("<span id='upgrpreisanz"+u+"S"+u2+"'>Error3</span>");
            uiv.Upgrades.levinh[u].append(uiv.Upgrades.preisanzeige[u][u2])
            uiv.Upgrades.gekauftanzeige[u][u2] = $("<span id='upgrgeksanz"+u+"S"+u2+"'>Error4</span>");
            uiv.Upgrades.levinh[u].append(uiv.Upgrades.gekauftanzeige[u][u2])
            uiv.Upgrades.levinh[u].append($("<br/>"))
            uiv.Upgrades.levinh[u].append($("<br/>"))
        }
        
    }
    }

//Only Main Tab is Open From Start
function initUI(){
    uiv.options.slideUp();
    uiv.Upgrades.upgr.slideUp();
    //Hiding lvl1 bought counter
    $("#gekauftanzeige1").hide()
    //Lvl Menu extender
        $('.levels').click( function() {
        $(this).next('.levelinh').slideToggle();
                });
    }

//Nav Main Button Click    
$("nav>*:first").click(function() {
      uiv.main.slideToggle();
      uiv.options.slideUp();
      uiv.Upgrades.upgr.slideUp();
})
//Nav Option Button Click  
$("#NavOpt").click(function() {
      uiv.main.slideUp();
      uiv.options.slideToggle();
      uiv.Upgrades.upgr.slideUp()
})
//Nav Upgrade Button Click
$("#NavUpgr").click(function(){
    uiv.main.slideUp();
    uiv.options.slideUp();
    uiv.Upgrades.upgr.slideToggle();
})
//Schriftart Setzen
$("*").css("font-family" , "Segoe UI,Frutiger Linotype,Dejavu Sans,Helvetica Neue Frutiger, Verdana");
$(".Nav").css("font-family" , "Segoe UI Semibold,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue Frutiger, Verdana");



function TextAktu() {
    for (var i=1; i<=anzahl;i++) {
        $("#anzeige"+i).text(Game.Sp.geld[i].toPrecision(3) + 'lvl' +i);
        $("#pAnzeige"+i).text("Price: " + Game.preis[i].toPrecision(3) + ' lvl1');
        $("#produktanzeige"+i).text("you get "+Game.protick[i].mul(TPS).toPrecision(3)+" lvl "+i+" Ps");
        uiv.anzeigen[0];
        $("#gekauftanzeige"+i).text("you have bought this "+Game.Sp.anzGek[i].toPrecision(3)+" times");
        if (Game.Sp.geld[1].gt(Game.preis[i]))
            $("#KnopfA"+i).css("background-color", "silver");
        else 
            $("#KnopfA"+i).css("background-color", "grey");
        $("#produmulanz"+i).text("Produktmul: " + Game.produmul[i].toPrecision(3))
        for (var i3=0; i3<upgradeanzahl; i3++) {
        $("#upgrkn"+i+"S"+i3).text("Upgrade "+(i3+1)+ " efficiency = " +Game.upgradeEfekt[i3].add(1).toPrecision(3))
            $("#upgrpreisanz"+i+"S"+i3).text("Price: "+ Game.upgradePreis[i][i3].toPrecision(3))
            $("#upgrgeksanz"+i+"S"+i3).text("  You have bought this "+ Game.Sp.upgradeGek[i][i3].toPrecision(3)+"times")
        }
        $("#KnopfA"+i).text("Buy 1| 50%("+getBuyAmount(i).toPrecision(3)+") Maxed at "+Game.maxBuyAmount[i].toPrecision(3));
    }
}