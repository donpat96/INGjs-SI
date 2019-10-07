// alert('bonjour');
//console.log(x);
// let jeux = true;
// while (jeux) {
//     var i = 1;
//     let rand = Math.floor(Math.random() * 11);
//     while (i <= 3) {
//         let x = prompt('veuillez trouver le nombre compris entre 1 et 10');
//
//         if (x == rand) {
//             alert('bravo');
//         } else {
//             if (x < rand) {
//                 alert('le chiffre est superieur essayez encore');
//                 console.log(x);
//             } else {
//                 alert('le chiffre est inferieur, essayez encore');
//                 console.log(x);
//             }
//         }
//         i = i + 1;
//     }
//     alert(rand);
//     jeux = confirm('voulez-vous essayer encore ?');
// }

let ampoule = document.querySelector("#ampoule");
console.log(ampoule);
setInterval(function () {
    ampoule.classList.toggle("cadre1");
}, 2000);