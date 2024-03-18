
db.createCollection('users3');

db.users3.insertMany([
    {
        name: 'Maria',
        lastname: 'Rodriguez',
        email: 'maria1.rodriguez@example.com',
        city: 'Buenos Aires',
        country: 'Argentina',
        salary: 3100,
        age: 29,
        height: 165,
        weight: 150
    },
    {
        name: 'Juan',
        lastname: 'Gonzalez',
        email: 'juan2.gonzalez@example.com',
        city: 'Barcelona',
        country: 'Spain',
        salary: 3200,
        age: 30,
        height: 166,
        weight: 151
    },
    {
        name: 'Luisa',
        lastname: 'Lopez',
        email: 'luisa3.lopez@example.com',
        city: 'Sydney',
        country: 'Australia',
        salary: 3300,
        age: 31,
        height: 167,
        weight: 152
    },
    {
        name: 'Diego',
        lastname: 'Martinez',
        email: 'diego4.martinez@example.com',
        city: 'Tokyo',
        country: 'Japan',
        salary: 3400,
        age: 32,
        height: 168,
        weight: 153
    },
    {
        name: 'Carolina',
        lastname: 'Hernandez',
        email: 'carolina5.hernandez@example.com',
        city: 'Paris',
        country: 'France',
        salary: 3500,
        age: 33,
        height: 169,
        weight: 154
    },
    {
        name: 'Gabriel',
        lastname: 'Perez',
        email: 'gabriel6.perez@example.com',
        city: 'New York City',
        country: 'USA',
        salary: 3600,
        age: 34,
        height: 170,
        weight: 155
    },
    {
        name: 'Valeria',
        lastname: 'Gomez',
        email: 'valeria7.gomez@example.com',
        city: 'London',
        country: 'UK',
        salary: 3700,
        age: 35,
        height: 171,
        weight: 156
    },
    {
        name: 'Pedro',
        lastname: 'Sanchez',
        email: 'pedro8.sanchez@example.com',
        city: 'Rio de Janeiro',
        country: 'Brazil',
        salary: 3800,
        age: 36,
        height: 172,
        weight: 157
    },
    {
        name: 'Laura',
        lastname: 'Fernandez',
        email: 'laura9.fernandez@example.com',
        city: 'Rome',
        country: 'Italy',
        salary: 3900,
        age: 37,
        height: 173,
        weight: 158
    },
    {
        name: 'Raul',
        lastname: 'Diaz',
        email: 'raul10.diaz@example.com',
        city: 'Moscow',
        country: 'Russia',
        salary: 4000,
        age: 38,
        height: 174,
        weight: 159
    },
    {
        name: 'Sophia',
        lastname: 'Garcia',
        email: 'sophia11.garcia@example.com',
        city: 'Berlin',
        country: 'Germany',
        salary: 4100,
        age: 39,
        height: 175,
        weight: 160
    },
    {
        name: 'Lucas',
        lastname: 'Perez',
        email: 'lucas12.perez@example.com',
        city: 'Toronto',
        country: 'Canada',
        salary: 4200,
        age: 40,
        height: 176,
        weight: 161
    },
    {
        name: 'Isabella',
        lastname: 'Fernandez',
        email: 'isabella13.fernandez@example.com',
        city: 'Stockholm',
        country: 'Sweden',
        salary: 4300,
        age: 41,
        height: 177,
        weight: 162
    },
    {
        name: 'David',
        lastname: 'Gonzalez',
        email: 'david14.gonzalez@example.com',
        city: 'Dubai',
        country: 'UAE',
        salary: 4400,
        age: 42,
        height: 178,
        weight: 163
    },
    {
        name: 'Emma',
        lastname: 'Martinez',
        email: 'emma15.martinez@example.com',
        city: 'Hong Kong',
        country: 'China',
        salary: 4500,
        age: 43,
        height: 179,
        weight: 164
    },
    {
        name: 'Mateo',
        lastname: 'Lopez',
        email: 'mateo16.lopez@example.com',
        city: 'Seoul',
        country: 'South Korea',
        salary: 4600,
        age: 44,
        height: 180,
        weight: 165
    },
    {
        name: 'Valentina',
        lastname: 'Hernandez',
        email: 'valentina17.hernandez@example.com',
        city: 'São Paulo',
        country: 'Brazil',
        salary: 4700,
        age: 45,
        height: 181,
        weight: 166
    },
    {
        name: 'Alejandro',
        lastname: 'Sanchez',
        email: 'alejandro18.sanchez@example.com',
        city: 'Mexico City',
        country: 'Mexico',
        salary: 4800,
        age: 46,
        height: 182,
        weight: 167
    },
    {
        name: 'Sofia',
        lastname: 'Gomez',
        email: 'sofia19.gomez@example.com',
        city: 'Cairo',
        country: 'Egypt',
        salary: 4900,
        age: 47,
        height: 183,
        weight: 168
    },
    {
        name: 'Matias',
        lastname: 'Diaz',
        email: 'matias20.diaz@example.com',
        city: 'Johannesburg',
        country: 'South Africa',
        salary: 5000,
        age: 48,
        height: 184,
        weight: 169
    },
    {
        name: 'Juan',
        lastname: 'Perez',
        email: 'juan.perez@example.com',
        city: 'Ciudad de México',
        country: 'Mexico',
        salary: 3000,
        age: 25,
        height: 170,
        weight: 75
    },
    {
        name: 'Lucas',
        lastname: 'Martinez',
        email: 'lucas.martinez@example.com',
        city: 'Los Angeles',
        country: 'Canada',
        salary: 3300,
        age: 30,
        height: 165,
        weight: 170
    }
    
]);

db.users3.drop();

db.users3.find();

//  ------------------------ EJERCICIOS DE ACTUALIZACION ----------------------------

//1. Incrementar el salario de todos los usuarios en un 10%.

db.users3.updateMany(
    {},
    { $mul: { salary: 1.1 } }
);

db.users3.updateMany(
    {},
    [{ $set: { salary: { $round: [{ $multiply: ["$salary", 1.1] }, 0] } } }]
);

//2. Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".

db.user3.updateMany(
    { city: "New York"},
    { $set: { city : "Los Angeles"}}
);


//3. Agregar el correo electrónico "nuevo@correo.com" al usuario con nombre "Juan" y apellido "Perez".

db.users3.updateOne(
    { name: "Juan", lastname: "Perez" },
    { $set: { email: "nuevo@correo.com" } },
    { upsert: true }
);

// 4. Actualizar la edad del usuario con correo electrónico "ejemplo@correo.com" a 35 años.

db.users3.updateOne(
    { email: "ejemplo@correo.com" },
    { $set: { age: 35 } }
);

// 5. Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".

db.users3.updateMany(
    { country: "Mexico" },
    { $set: { country: "Canada" } }
);

// 6. Aumentar la altura de todos los usuarios en 5 centímetros.

db.users3.updateMany(
    {},
    { $inc: { height: 5 } }
);

// 7. Cambiar el apellido del usuario con correo electrónico "otro@ejemplo.com" a "González":

db.users3.updateOne(
    { email: "otro@ejemplo.com" },
    { $set: { lastname: "González" } }
);

// 8. Actualizar el peso del usuario con nombre "Maria" a 140 libras:

db.users3.updateOne(
    { name: "Maria" },
    { $set: { weight: 140 } }
);

// 9. Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%:

db.users3.updateMany(
    { country: "Estados Unidos" },
    { $mul: { salary: 1.15 } }
);

// 10. Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co":

db.users3.updateOne(
    { name: "Pedro" },
    { $set: { email: "nuevo_correo@riwi.co" } }
);

// 11. Cambiar la edad de todos los usuarios menores de 30 años a 30 años:

db.users3.updateMany(
    { age: { $lt: 30 } },
    { $set: { age: 30 } }
);

// 12. Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%:

db.users3.updateMany(
    { salary: { $lt: 3000 } },
    { $mul: { salary: 1.20 } }
);

// 13. Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín":

db.users3.updateMany(
    { city: "Bogotá" },
    { $set: { city: "Medellín" } }
);

// 14. Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia":

db.users3.updateMany(
    { salary: { $gt: 5000 } },
    { $set: { country: "Australia" } }
);

// 15. Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años:

db.users3.updateMany(
    { age: { $gt: 50 } },
    { $inc: { age: -5 } }
);

// 16. Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras:

db.users3.updateMany(
    { weight: { $gt: 200 } },
    { $set: { weight: 180 } }
);

// 17. Incrementar el salario de los usuarios que viven en "London" en un 25%:

db.users3.updateMany(
    { city: "London" },
    { $mul: { salary: 1.25 } }
);

// 18. Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith":

db.users3.updateMany(
    { salary: { $gt: 4000 } },
    { $set: { lastname: "Smith" } }
);

// 19. Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es":

db.users3.updateMany(
    { name: /^A/ },
    { $set: { email: "nuevo@riwi.es" } }
);

// 20. Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París":

db.users3.updateMany(
    { height: { $lt: 160 } },
    { $set: { city: "París" } }
);
 

//  ------------------------ EJERCICIOS DE ELIMINACION ----------------------------

// 1. Eliminar todos los usuarios que tienen un salario menor que 2000 dólares.

db.users3.deleteMany({ salary: { $lt: 2000 } })

// 2. Eliminar usuarios que tienen una edad menor que 25 años.

db.users3.deleteMany({ age: { $lt: 25 } })

// 3 .Borrar todos los usuarios que viven en "París".

db.users3.deleteMany({ city: "París" })

// 4. Eliminar usuarios que tienen un peso superior a 180 libras.

db.users3.deleteMany({ weight: { $gt: 180 } })

// 5. Eliminar usuarios que tienen una altura inferior a 160 centímetros.

db.users3.deleteMany({ height: { $lt: 160 } })

// 6. Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe".

db.users3.deleteMany({ name: "John", lastname: "Doe" })

// 7. Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".

db.users3.deleteMany({ email: "borrar@riwi.com" })

// 8. Eliminar usuarios que no tienen una dirección de correo electrónico registrada.

db.users3.deleteMany({ email: { $exists: false } })

// 9. Eliminar usuarios que viven en "Tokyo".

db.users3.deleteMany({ city: "Tokyo" })

// 10. Borrar todos los usuarios que son menores de 18 años.

db.users3.deleteMany({ age: { $lt: 18 } })

// 11. Eliminar usuarios que tienen un salario igual a 0.

db.users3.deleteMany({ salary: 0 })

// 12. Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.

db.users3.deleteMany({ city: "New York City", salary: { $gt: 5000 } })

// 13. Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".

db.users3.deleteMany({ email: /spam/ })

// 14. Borrar usuarios que viven en "Bello" y tienen más de 50 años.

db.users3.deleteMany({ city: "Bello", age: { $gt: 50 } })

// 15. Eliminar todos los usuarios que tienen el apellido "González".

db.users3.deleteMany({ lastname: "González" })

// 16. Borrar usuarios que tienen una edad superior a 70 años.

db.users3.deleteMany({ age: { $gt: 70 } })

// 17. Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.

db.users3.deleteMany({ country: "Canadá", salary: { $lt: 4000 } })

// 18. Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.

db.users3.deleteMany({ salary: { $gte: 1000, $lte: 2000 } })

// 19. Eliminar usuarios que tienen una edad igual a 30 años.

db.users3.deleteMany({ age: 30 })

// 20. Borrar usuarios que tienen una altura superior a 190 centímetros.

db.users3.deleteMany({ height: { $gt: 190 } })

 
 
 
 
 
 
 
 
 
 
 
 
 
 

