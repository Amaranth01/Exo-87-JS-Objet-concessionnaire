let voiture = {
    Nom : "Eggo",
    imgUrl : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    nombresRoues : 4,
    Couleur : "Marron",
    Constructeur : "Citroen",
    Carburant: "Solaire",
    nombrePortes : 3,
    Autonomie : "450km",
    vitesseMaxi : "120km/h"
};

//title
let title = document.getElementById('title');
title.innerHTML = voiture.Nom + "La voiture à l'énergie 100% verte !";

//picture
let img = document.createElement('img');
img.src = voiture.imgUrl;
document.body.appendChild(img);
img.style.width = '250px';

//characteristics
line(voiture.nombresRoues, " nombres de roues : ");
line(voiture.Couleur, " Couleur : ");
line(voiture.Constructeur, " Constructeur : ");
line(voiture.Carburant,  " Carburant : ");
line(voiture.nombrePortes, " nombre de portes : ");
line(voiture.Autonomie, " Autonomie : ");
line(voiture.vitesseMaxi,  " Vitesse maximale : ");

function line (item,text) {
    let p = document.createElement('p');
    p.innerHTML = text + item;
    document.body.appendChild(p);
}