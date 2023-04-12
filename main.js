const simpsons =[
{
    nombre: 'Homero',
    edad: 40,
    rol: 'Padre'
},
{
    nombre: 'Marge',
    edad: 38,
    rol: 'Madre'
},
{
    nombre: 'Bart',
    edad: 10,
    rol: 'Hijo'
},
{
    nombre: 'Lisa',
    edad: 8,
    rol: 'Hija'
},
{
    nombre: 'Maggie',
    edad: 2,
    rol: 'Bebe'
},
{
    nombre: 'Ayudante de Santa',
    edad: 5,
    rol: 'Perro'
}
]

// const menoresDeEdad = simpsons.filter(simpsons => simpsons.edad < 18);

// const edadesSumadas = simpsons.reduce((edades, simpson) => edades + simpson.edad, '');

// const obtenerNombres = simpsons.map(simpson => simpson.nombre);

// const asignarEstudiantes = simpsons.map(familia => {
//     const {edad, rol} = familia;
//     return {
//         ...familia, //Spread para traerme todos los atributos de simpsons
//         rol: edad < 18 & rol != "Perro" ? "Estudiante" : rol 
//     };
// });

const masSimpsons =[
{
    nombre: 'Lenny',
    edad: 48,
    rol: 'Amigo amarillo de Homero'
},
{
    nombre: 'Carl',
    edad: 37,
    rol: 'Amigo negro de Homero'
},
{
    nombre: 'Ralph',
    edad: 8,
    rol: 'Amigo de Lisa'
},
{
    nombre: 'Jefe Górgory',
    edad: 35,
    rol: 'Policia de Springfield'
},
];
const listaCompletaDeSimpsons = [...simpsons, ...masSimpsons];
console.log(listaCompletaDeSimpsons);

