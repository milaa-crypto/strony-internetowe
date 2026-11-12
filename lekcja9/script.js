"use strict";

let counter = 0;
let items = ["Phantom-jakis sigma duch","Sigma","Płakał","Nożownik","Magda Gessler","siks seven","kul gucio","femboy"];

function addPoint() {
      counter++;
      document.getElementById("counter-display").innerText = counter;
}
function resetCounter() {
    counter=0;
    document.getElementById("counter-display").innerText = counter;
}
function drawItem() {
    let randomIndex = Math.floor(Math.random() * items.length);
    document.getElementById("random-display").innerText =items[randomIndex];
}
// TODO: utwórz zmienną przechowującą stan licznika
// TODO: napisz funkcję addPoint, która zwiększa licznik o 1 i aktualizuje wyświetlacz
// TODO: utwórz tablicę z elementami do losowania
// TODO: napisz funkcję drawItem, która losuje element z tablicy i wyświetla go
