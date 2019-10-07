

var monlien = document.querySelectorAll("a");
monlien.forEach(function (ligne){var lien = prompt("entrez un lien");


ligne.href = lien;
ligne.innerHTML = lien;});
