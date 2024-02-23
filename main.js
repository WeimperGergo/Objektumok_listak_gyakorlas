import { SZEMELYLISTA } from "./adat.js";
import { kartyaKiir, konzolraIr, adatTablazat } from "./fuggvenyek.js";
import { konzolraIr2, listaOsszeAllit  } from "./fuggvenyek.js";

const a = 2;
// a = 3 -> hibaüzenet
const LISTA = ["Géza", "Jenő", "Miclós"];

//console.log(LISTA[1]);

// LISTA = [10, 21, 52, 634];

/* 
    Egyszerű adatszerkezet esetén konstanssal deklarált változó nem írható felül!!! 
    Lista és objektum konsttal való deklaráláskor a lista memóriacíme nem változtatható meg, 
    a lista értékei megváltoztathatóak, módosíthatom az elemeit, törölhetek a listából, 
    adhatok hozzá újabb elemet
*/

LISTA[10]="Béla"; /* A lista 10. elemére elhelyez egy elemet */

LISTA.push("Jancsi"); /* A lista végére elhelyez egy elemet */
LISTA.pop(); /* Leveszi a lista utolsó elemét */
console.log(LISTA);

/* Az ismerőseim nyilvántartása */


/* Objektum -> összetett adatszerkezet, amelyben az összetartozó adatokat együtt tudjuk kezelni */
// Az objektumok kulcs-értékpárok

// Ezek itt JSON objektumok, kifejezetten JS-be találták ki

//console.log(SZEMELYLISTA[1].nev);
//console.log(SZEMELYLISTA[1].suly);

konzolraIr2(SZEMELYLISTA);


/* Meg kell fogni azt a html elemet, amibe írni szeretnék */
const FELSELEM = document.getElementById("felsorolas");
//const FELSELEM = document.querySelector("felsorolas");
FELSELEM.innerHTML="<h1>Ügyesek vagyunk</h1>";
FELSELEM.innerHTML+="Ide jön a felsorolás";
FELSELEM.innerHTML+=listaOsszeAllit(SZEMELYLISTA);


const KARTYAELEM = document.getElementById("kartyaContainer");
KARTYAELEM.innerHTML += kartyaKiir(SZEMELYLISTA)

const TABLAZAT = document.getElementById("adatTablazatElem");
TABLAZAT.innerHTML += adatTablazat(SZEMELYLISTA);