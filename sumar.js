function arreglar(){
  let miArreglo=[2, 4, 5, 6, 7];
  //Crear un arreglo que contenga el doble
  //4, 8, 10, 12, 14
  //let a=[];
  //for(const n of miArreglo){
  //  a.push(n*2);
  miArreglo.map(doblar);  
}
  //console.log(a);



function doblar(n){
  return n*2

}

arreglar();
//Arreglo

//let compras=["pan", "carne", "cuchillas" , "queso"];

   //para referirme a un elemento necesito mencionarlo por si posición relativa
   //pan = 0 carne = 1 cuchillas =2 queso = 3

   //console.log(compras[0]);
   //compras[2]="cuchillas de afeitar"; //sobreescribe el elemento
   //console.log(compras);

    



//let respuesta=sumar(3,6);
//console.log(respuesta); 


//Exportarla como un módulo
//return a+b; esto dentro de un console
//module.exports=sumar