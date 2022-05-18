const list = [100000,200,300,500,400000000];
const lista = list.sort((a,b)=>a-b);
console.log(lista);
function calcularMediana(list) {
    let lista = list.sort((a,b) => a-b);
    let mediana;
    let mitad = parseInt(lista.length/2);
    if(esPar(lista.length)){
        mediana = (lista[mitad]+lista[mitad-1])/2;
        return mediana;
    }
    else{
        mediana = list[mitad];
        return mediana;
    }
}
function esPar(x){
    if(x%2===0){
        return true;
    }
    else{
        return false;
    }
}