/*
class Szemelyek{
    constructor(nev, tel, suly){
        this.nev,
        this.tel,
        this.suly
    }
}

const SZEMELY1 = SZEMELYLISTA[0];
const SZEMELY2 = SZEMELYLISTA[1];
*/
export function konzolraIr(){
    /* a Személylista adatait kiírja a konzolra */
    /*for (let i = 0; i < SZEMELYLISTA.length; i++) {
        console.log(`Név: ${SZEMELYLISTA[i].nev}\nTel: ${SZEMELYLISTA[i].tel}\nSúly: ${SZEMELYLISTA[i].suly}}`);
    }*/
}

export function konzolraIr2(lista){
    for (let i = 0; i < lista.length; i++) {
        console.log(`Név: ${lista[i].nev}\nTel: ${lista[i].tel}\nSúly: ${lista[i].suly}`)
    };
}

export function listaOsszeAllit(lista){
    let txt = "<ul>"
    for (let i = 0; i < lista.length; i++) {
        txt += `
        <li>Név: ${lista[i].nev}; 
        \tTel: ${lista[i].tel}; 
        \tSúly: ${lista[i].suly}</li>
        `;
    }
    txt += "</ul>";
    console.log(txt);
    return txt;
}

export function kartyaKiir(lista){
    let txt = "";
    for (let i = 0; i < lista.length; i++) {
        txt += `<div class="kartyak"> 
        <h3>Név: ${lista[i].nev}</h3> 
        <p>Súly: ${lista[i].suly}</p>
        <p>Tel: ${lista[i].tel}</p> 
        </div>`;
    }
    return txt;
}

export function adatTablazat(lista){
    // Ugyanez táblázatban
    let txt = `
    <table>
    <tr>
    <th>Név</th>
    <th>Súly</th>
    <th>Telefon</th>
    </tr>
    `;
    for (let i = 0; i < lista.length; i++) {
        txt += `
        <tr>
        <td>${lista[i].nev}</td>
        <td>${lista[i].suly}</td>
        <td>${lista[i].tel}</td>
        </tr>   
        `;
    }
    txt += "</table>";
    return txt;
}

