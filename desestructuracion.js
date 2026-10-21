//Estructuras = OBJETOS
//Desestructuras = ABRIR OBJETOS
const persona = {
    apellidos: "Mosayhuate Daga",
    nombres: "Cristhian Miguel",
    edad: 42,
    skills: ["PHP", "Java", "Javascript"]
}

//Guardar apellidos, nombres, edad en variables
/*
const apellidos = persona.apellidos
const nombres = persona.nombres
const edad = persona.edad
*/

//Desestructurar es separar datos provenientes de un objeto
const { apellidos, nombres, edad, skills} = persona

console.log(apellidos, nombres, edad, skills)