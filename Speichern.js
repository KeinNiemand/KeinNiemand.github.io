function Speichern() {
   localStorage[Spielstand] = btoa(JSON.stringify(Sp));
}

function Laden() {
	LadenSpielstandCo()
    if (!localStorage[Spielstand]) return;
    var save_data = JSON.parse(atob(localStorage[Spielstand]));
    Sp = save_data;
	Sp.Geld = Decimal.fromJSON(Sp.Geld)
	Sp.A = Decimal.fromJSON(Sp.A)
	Sp.B = Decimal.fromJSON(Sp.B)
	Sp.C = Decimal.fromJSON(Sp.C)
	Sp.ExA = Decimal.fromJSON(Sp.ExA)
	Sp.APreis = Decimal.fromJSON(Sp.APreis)
	Sp.BPreis = Decimal.fromJSON(Sp.BPreis)
	Sp.CPreis = Decimal.fromJSON(Sp.CPreis)
	Sp.ExAPreis = Decimal.fromJSON(Sp.ExAPreis)
	Rechnen()
	BilTxtAkt()
	MKaufPrRch()
}

function Reset() {
	Sp.Geld = Decimal(0)
	Sp.A = Decimal(1)
	Sp.B = Decimal(1)
	Sp.C = Decimal(1)
	Sp.ExA = Decimal(1)
	Sp.APreis = ABasPreis
	Sp.BPreis = BBasPreis
	Sp.CPreis = CBasPreis
	Sp.ExAPreis = ExABasPreis
	Rechnen();
	BilTxtAkt();
	MKaufPrRch();
}

function SpeichSpielstandCo() {
	localStorage['SpielstandCode666789'] = btoa(Spielstand);
}

function LadenSpielstandCo() {
if (!localStorage['SpielstandCode666789']) return;
    var save_data = atob(localStorage['SpielstandCode666789']);
    Spielstand = save_data;
}

function AendernSpielstandCo() {
Eing= prompt("Your Save Is saved Under This Code If you want to load a save type in the Code of the Save And If you Want to create a new save Type In Something that you haven't used before (The Default Code is LIdleS)", Spielstand);
	if (Eing != null && Eing != 'SpielstandCode666789') {
	Spielstand = Eing;
	SpeichSpielstandCo();
	Reset();
	Laden();
	}
}