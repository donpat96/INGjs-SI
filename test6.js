var parenti = document.querySelector("#item");
var image = parenti.firstChild;

var ligne = document.querySelector("li");
var parent = ligne.parentNode ;
var codeinterval = setInterval(function () {
    if (ligne) {
        var node = ligne;
        ligne = ligne.nextElementSibling;
        console.log(ligne);
        parent.replaceChild(
            image,
            node);
    }
    else
    {
        console.log('end');
        clearInterval(codeinterval) ;
    }
},1000);