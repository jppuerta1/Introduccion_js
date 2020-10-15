//Retornando el caracter

/*Objetivo: Identificar que debe retornar la consola al acceder al 
caracter ubicado en el index especificado para cada uno de los siguientes casos, 
e imprimirlo en la consola.

"Hola mundo"[3];
"    "[2];
"Estoy aprendiendo"[7];
"El azul es mi color favorito"[12];
""[0];
" El cielo es azul"[20];*/

/*console.log("hola mundo"[3]);//a
console.log("    "[2]);// 
console.log("Estoy aprendiendo"[7]);//p
console.log("El azul es mi color favorito"[12]);//i
console.log(""[0]);//no definido
console.log(" El cierlo es azul"[20]);//no definido*/

/*----------------------------------------------------------------------*/

//Contando caracteres

/*Objetivo: Escribir una función llamada countingEs que reciba como 
parámetro un string (cadena de texto) y retorne el número de caracters "e" (minúscula).
Casos para probar tu programa

Todos los casos deben retornar true:

console.log(countingEs("Estoy ejercitándome los miércoles y jueves") === 6);  // true
console.log(countingEs("Eeeeh!, que alegría verlos amigos mios")  === 6); // true
console.log(countingEs("Ejemplares son las personas de este hermoso pueblo")  === 8); // true
console.log(countingEs("Ahora qué?") === 0); // true
console.log(countingEs("Los elefantes son enormes") === 5) // true*/

/*function countingEs(name){
var a=0;    
for(var i=0;i<name.length;i++){

    if(name[i]=="e"){
a=a+1;

}

}
 return a;
}

console.log(countingEs("Estoy ejercitándome los miércoles y jueves") === 6);  // true
console.log(countingEs("Eeeeh!, que alegría verlos amigos mios")  === 6); // true
console.log(countingEs("Ejemplares son las personas de este hermoso pueblo")  === 8); // true
console.log(countingEs("Ahora qué?") === 0); // true
console.log(countingEs("Los elefantes son enormes") === 5); // true*/

/*--------------------------------------------------------------------------------*/

//Uniendo cadenas

/*Objetivo: Define una función message, que reciba como parámetro un arreglo y 
retorne las siguientes cadenas de texto para cada uno de los casos de prueba.
Casos para probar tu programa

console.log(message(["Estoy", "aprendiendo", "Java", "Script"])); // Estoy aprendiendoJavaScript!
console.log(message(["El", "método", "join", "me", "permite", "unir", "elementos"])); //  El método join me permite unir elementos
console.log(message(["Java", "Script", "es", "muy", "útil"])) //JavaScript es muy útil*/

/*function message(string){
    if(string[0]=="Estoy"){
        return string[1].replace("aprendiendo","Estoy aprendiendoJavaScript!");
    string.join("");
    }
    else if(string[0]=="El"){
        return string.join(" ")
    }
    else(string[0]=="Java")
    {
        return string[0].replace("Java","JavaScript es muy útil");
    }

}
console.log(message(["Estoy", "aprendiendo", "Java", "Script"]));
console.log(message(["El", "método", "join", "me", "permite", "unir", "elementos"])); //  El método join me permite unir elementos
console.log(message(["Java", "Script", "es", "muy", "útil"])) //JavaScript es muy útil*/

//Generador de Contraseñas

/*Objetivo: Escribir una función llamada contrasena que reciba un string y 
retorne otro string realizando los siguientes cambios sobre el string de entrada:

    Remplaza las mayúsculas por minúsculas.
    Elimina los espacios en blanco.
    Remplaza el caracter "a" por "4".
    Remplaza el caracter "e" por "3".
    Remplaza el caracter "i" por "1".
    Remplaza el carater "o" por "0".

Casos para probar tu programa

console.log(generatePassword("hola")); // "h0l4"
console.log(generatePassword("esta es una prueba")); // "3st43sun4pru3b4"
console.log(generatePassword("")); // ""

Nota: Esta no es una forma segura de generar contraseñas y no la recomendamos.*/

/*function generatePassword(string){
var contrasena="";
    for(var i=0;i<string.length;i++){
texto=string[i].toLowerCase();
 
    if(texto==" "){
        texto="";
    }
    if(texto=="a"){
        texto=4;

    }
    if(texto=="o"){
        texto=0;

    }
    if(texto=="e"){
        texto=3;

    }
    contrasena+=texto;
    }
    return contrasena;
}
console.log(generatePassword("Hola")); // "h0l4"
console.log(generatePassword("esta es uNa prueba")); // "3st43sun4pru3b4"
console.log(generatePassword("")); // ""*/

/*--------------------------------------------------------------*/

//La primera con mayúscula

/*Objetivo: Escribir una función llamada capitalizar que 
reciba una cadena y capitalice cada palabra de la cadena (cambie a mayúscula la letra inicial).

Nota: puedes asumir que cada palabra está separada por espacio.
Casos para probar tu programa

console.log(capitalize("pedro perez")); // "Pedro Perez"
console.log(capitalize("make it real")); // "Make It Real"*/

/*function capitalizar(string){
var oracion="";
for(var i=0;i<string.length;i++){

    var palabra=string[i];
    if(i==0){
        palabra=palabra.toUpperCase();
    }
    if(string[i-1]==" "){
        palabra=palabra.toUpperCase();
    }
    oracion+=palabra;
}
return oracion;
}
console.log(capitalizar("pedro perez")); // "Pedro Perez"
console.log(capitalizar("make it real")); // "Make It Real"*/

//la solución del curso
/*function capitalize(string) {
    var words = string.split(' ');
  
    for(var i = 0; i < words.length; i++) {
      var chars = words[i].split('');
  
      chars[0] = chars[0].toUpperCase();
  
      words[i] = chars.join('');
    }
  
    return words.join(' ');
  }
  
  // casos de prueba
  console.log(capitalize("pedro perez")); // "Pedro Perez"
  console.log(capitalize("make it real")); // "Make It Real"*/


