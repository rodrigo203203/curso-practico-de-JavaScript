const list = [1,2,3,4,3,3,3,1,1,1,6,6,6,4,4,2,2,3,3,3];
function encontrarModa(lista){
    const listaCount = {};
    lista.map((i)=>{
        if(listaCount[i]){
            listaCount[i]+=1;
        }
        else{listaCount[i] = 1;}
    });
    const listaArray = Object.entries(listaCount).sort((a,b)=>a[1]-b[1]);
    const moda = listaArray[listaArray.length-1];
    return moda;
}
console.log(encontrarModa(list));