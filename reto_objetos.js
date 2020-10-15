/*Receta maestra

Objetivo: Crear un programa que imprima el objeto recipe. 
Este objeto cuenta con las siguientes propiedades:

    leche en polvo, 1 litro
    chocolate en barra, 3 barras
    azúcar, 3 gramos*/


    /*recipe={
        "leche en polvo":"1 litro",
          "chocolate en barra":"3 barras",
          "azucar":"3 gramos"
      }
      
      for(var key in recipe){
          console.log(key+" "+recipe[key])
      }*/

/*--------------------------------------------------------*/
/*Describiendo tu receta

Objetivo: Reutilizar el programa que escribiste en el reto anterior, 
para imprimir el siguiente texto en la consola:

Agrega 1 litro de leche en polvo
Agrega 3 barras de chocolate en barra
Agrega 30 gramos de azúcar*/

/*recipe={
  "leche en polvo":"1 litro",
    "chocolate en barra":"3 barras",
    "azucar":"3 gramos"
}

for(var key in recipe){
    console.log("Agrega "+recipe[key]+" "+key)
}*/

/*Mezclando los ingredientes

Objetivo: Agregar el método mixIngredients como propiedad al objeto recipe del reto anterior.

El método mixIngredients debe retornar la cadena del resultado esperado. 
Imprime en la consola el resultado.

Resultado esperado:

Mezclando los ingredientes ...*/

recipe={
    "leche en polvo":"1 litro",
      "chocolate en barra":"3 barras",
      "azucar":"3 gramos",
      mixIngredients:function(){
          return "Mezclando los ingredientes ..."
      }
  }

  console.log(recipe.mixIngredients())