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
}
]

// const menoresDeEdad = simpsons.filter(simpsons => simpsons.edad < 18);
const edadesSumadas = simpsons.reduce((edades, simpson) => edades + simpson.edad, '');
console.log(edadesSumadas);

