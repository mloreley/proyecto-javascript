const personas = [
    { nombre: 'Sam', appellido: 'Hughes', fechaNacimiento: '1978-07-07', profesion: 'Desarrollador', salario: 45000 },
    { nombre: 'Terri', appellido: 'Bishop', fechaNacimiento: '1989-02-04', profesion: 'Desarrollador', salario: 35000},
    { nombre: 'Jar', appellido: 'Burke', fechaNacimiento: '2000-11-01', profesion: 'Medico', salario: 38000 },
    { nombre: 'Julio', appellido: 'Miller', fechaNacimiento: '1991-12-07', profesion: 'Abogado', salario: 40000 },
    { nombre: 'Chester', appellido: 'Flores', fechaNacimiento: '1988-03-15', profesion: 'Desarrollador', salario: 41000 },
    { nombre: 'Madison', appellido: 'Marshall', fechaNacimiento: '1980-09-22', profesion: 'Abogado', salario: 32000 },
    { nombre: 'Ava', appellido: 'Pena', fechaNacimiento: '2004-11-02', profesion: 'Desarrollador', salario: 38000 },
    { nombre: 'Gabriella', appellido: 'Steward', fechaNacimiento: '1994-08-26', profesion: 'Medico', salario: 46000 },
    { nombre: 'Charles', appellido: 'Campbell', fechaNacimiento: '1997-09-04', profesion: 'Abogado', salario: 42000 },
    { nombre: 'Tiffany', appellido: 'Lambert', fechaNacimiento: '1990-05-11', profesion: 'Desarrollador', salario: 34000 },
    { nombre: 'Antonio', appellido: 'Gonzalez', fechaNacimiento: '1985-03-24', profesion: 'Deportista', salario: 49000 },
    { nombre: 'Aaron', appellido: 'Garrett', fechaNacimiento: '1985-09-04', profesion: 'Desarrollador', salario: 39000 },
];
// es un arreglo de 12 objetos de personas
/*
    1 - Buscar a todas las personas que tengan como profesion 'Desarrollador'. El resultado debe ser un array.
    2 - Ordena el array de personas por el salario de menor a mayor.
    3 - Calcular el salario promedio
    4 - Mostrar un array nuevo que muestre a las personas mayores de 35 (usen el objeto Math y Date para lograrlo)

*/
// 1 - Buscar a todas las personas que tengan como profesion 'Desarrollador'. El resultado debe ser un array.
const desa = personas.filter((de) => de.profesion === 'Desarrollador');
console.log(desa);

// 2 - Ordena el array de personas por el salario de menor a mayor.

const salOrden = personas;
salOrden.sort((a,b)=> b - a);
console.log(salOrden);

//3 - Calcular el salario promedio

const salPromedio = personas.reduce((suma, per)=> { // suma = acumulador ; per = elemento objeto
    return (suma + per.salario);
 }, 0);
 console.log(`El salario promedio es ${salPromedio / personas.length}`);

// 4 - Mostrar un array nuevo que muestre a las personas mayores de 35 (usen el objeto Math y Date para lograrlo)

const personasEdad = personas.map((personas)=> {
    return {
        nombre: personas.nombre,
        apellido: personas.appellido,
        edad: ((new Date(personas.fechaNacimiento).getFullYear()-2022) * -1),
        profesion: personas.profesion,
        salario: personas.salario
    }
})
console.log (personasEdad);
const MayoresDe35 = personasEdad.filter(edades => edades.edad > 35);

console.log (MayoresDe35);