//Objeto se define en una clave:valor
const autoMovil = {
    marca: "Toyota",
    modelo: "Rav4",
    anio: 2025,
    operativo: true,
    valor: 120000,
    placa: "ABC-123",
    propietarios: [
      {titula: "", fecha: "", precio: 118000},
      {titula: "", fecha: "", precio: 115000},
      {titula: "", fecha: "", precio: 119000}
    ]
}

// ¿Es posible actualizar la información?
autoMovil.anio = 2024
autoMovil["anio"] = 2024

//Cambios en el arreglo
autoMovil.propietarios[0].titular = "Patricia"
autoMovil.propietarios[2].precio = 122000

//¿Será posible agregar una nueva clave y valor?
autoMovil["color"] = "blanco"
autoMovil["equipado"] = "FULL"

console.log(autoMovil)