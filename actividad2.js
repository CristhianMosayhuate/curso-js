//Crear un objeto que almacena datos de una mascota
const mascota = {
    nombre: "Firulais",
    especie: "Perro",
    edad: 3,
    color: "Marrón",
    raza: ["Chihuahua", "Pequeñez", "Husky"]
};
//desestructurar utilizando un mínimo de 4 variables
const { nombre, especie, edad, color, raza } = mascota;

console.log(nombre, especie, edad, color, raza)