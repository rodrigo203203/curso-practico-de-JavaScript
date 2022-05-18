const list1 =[100,200,300,600];
let sumLista1 = list1.reduce((a,b)=>a+b);
let promedio = sumLista1/list1.length;
console.log(promedio);
function calcularPromedio(list){
    let sumLista = list.reduce((a,b)=>a+b);
    let promedio = sumLista/list.length;
    return promedio;
}
calcularPromedio(list1);