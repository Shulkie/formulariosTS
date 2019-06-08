


//Agarrar el formulario
let form = document.querySelector("form")
//let input = document.querySelector("input")
let nombre = document.querySelector("#nombre")
let paises = {

    ar:["Buenos Aires", "La Pampa"],
    ve:["Margarita", "Caracas"],
    ch:["Beijing", "Shangai"],
}

let select = document.querySelector("select")


//Asignarle un evento submit
form.addEventListener("submit",handleSubmit)

//Cancelarle el default
function handleSubmit(e){
    e.preventDefault()
    console.dir(e.target[0].value)
    let nombre = e.target[0].value 
    console.log(nombre.trim().length)
}



select.addEventListener("change", paisCambiado)

function paisCambiado(g) {
let valor = select.value 
console.log (valor)
let ciudades = paises[valor]
console.log(ciudades)



//string trim() devuelve mismo string sin esp antes ni despues

//.indexof(x) number - retorna la posicion de la primera instancia del elemento x o -1 si no se encuentra

//.includes(x)

/* 
submit : es un evento que se dispara cuando un formulario intenta ser enviado
*/

//change: se dispara cuando el control de formulario cambia de valor

/*
1) Seleccionar el select 
2) asignarle un evento change
3) El callback del change tiene que poder agarrar el valor del select 
4) Con el valor obtenido, buscar en el objeto paises la propiedad 
que le corresponda
5)Si la propiedad no existe se tiene que ver en pantalla un 
mensaje que diga "tiene que seleccionar la opcion"en color rojo
6) Si la propiedad existe tenemos que recorrer el array que tiene
como valor asociado
7) por cada valor del array se tiene que crear un option
8) agregar todos los option creados a un nuevo select
9)Agrefarr el select al DOM

*/

