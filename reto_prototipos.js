//Fabrica de usuarios
/*Objetivo: Define una función constructora User, que cree objetos 
con las siguientes propiedades:

Propiedades de un usuario:

name
lastName
age*/

/*var User=function(name, lastName, age){
this.name=name;
this.lastName= lastName;
this.age=age;
}*/

//Agregando la presentación
/*Objetivo: Agregar al prorotipo de la función constructora 
User el método introduction que retorne la siguiente cadena:

Me llamo <nombre del usuario> <apellido del usuario> y tengo <edad del usuario></edad>*/

var User=function(name, lastName, age){
    this.name=name;
    this.lastName= lastName;
    this.age=age;
    }

    var JP= new User("Juan","Puerta","31");
    var cindy= new User("Cindy","Jaramillo","32");

   User.prototype.introduction=function(){
    return "Me llamo "+this.name+" "+this.lastName+" y tengo "+this.age;
    }

    console.log(JP.introduction());
    console.log(cindy.introduction());