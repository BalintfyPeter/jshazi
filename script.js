function IsEditable() {
    var aSzam = document.getElementById("befogoA").value;
    var bSzam = document.getElementById("befogoB").value;
    var cSzam = document.getElementById("atfogo").value;

    if (Math.pow(aSzam, 2) + Math.pow(bSzam, 2) > Math.pow(cSzam, 2) && Math.pow(bSzam, 2) + Math.pow(cSzam, 2) > Math.pow(aSzam, 2) && Math.pow(aSzam, 2) + Math.pow(cSzam, 2) > Math.pow(bSzam, 2)) {
        alert("Szerkeszthető!");

    }

    else {
        alert("Nem szerkeszthető!");
    }
}

function RandomNumber() {
    document.getElementById("befogoA").value = Math.floor(Math.random() * 101);
    document.getElementById("befogoB").value = Math.floor(Math.random() * 101);
    document.getElementById("atfogo").value = Math.floor(Math.random() * 101);
}

function Atfogo() {
    var aSzam = document.getElementById("befogoA").value;
    var bSzam = document.getElementById("befogoB").value;
    var atfogoNegyzet = Math.pow(aSzam, 2) + Math.pow(bSzam, 2);

    document.getElementById("atfogo").value = Math.sqrt(atfogoNegyzet);
}
