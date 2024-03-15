db.createCollection('users2');

db.users2.insertMany([
    {
        name: 'Alice',
        lastname: 'Johnson',
        email: 'alice.johnson@example.com',
        city: 'Medellin',
        country: 'Colombia',
        salary: 2500,
        age: 28,
        height: 185,
        weight: 187 
    },
    {
        name: 'Bob',
        lastname: 'Smith',
        email: 'bob.smith@example.com',
        city: 'New York',
        country: 'USA',
        salary: 5000,
        age: 35,
        height: 170,
        weight: 165.35 
    },
    {
        name: 'Charlie',
        lastname: 'Brown',
        email: 'charlie.brown@example.com',
        city: 'London',
        country: 'UK',
        salary: 6000,
        age: 15,
        height: 180,
        weight: 176.37
    },
    {
        name: 'Diana',
        lastname: 'Garcia',
        email: 'diana.garcia@example.com',
        city: 'Barcelona',
        country: 'Spain',
        salary: 4500,
        age: 33,
        height: 165,
        weight: 132.28 
    },
    {
        name: 'Eva',
        lastname: 'Martinez',
        email: 'eva.martinez@example.com',
        city: 'Madrid',
        country: 'Spain',
        salary: 5500,
        age: 40,
        height: 160,
        weight: 121.25
    },
    {
        name: 'Frank',
        lastname: 'Rodriguez',
        email: 'frank.rodriguez@example.com',
        city: 'Los Angeles',
        country: 'USA',
        salary: 7000,
        age: 15,
        height: 175,
        weight: 154.32 
    },
    {
        name: 'Grace',
        lastname: 'Lee',
        email: 'grace.lee@example.com',
        city: 'Seoul',
        country: 'South Korea',
        salary: 3000,
        age: 38,
        height: 163,
        weight: 127.87 
    },
    {
        name: 'Henry',
        lastname: 'Nguyen',
        email: 'henry.nguyen@example.com',
        city: 'Ho Chi Minh City',
        country: 'Vietnam',
        salary: 4000,
        age: 41,
        height: 168,
        weight: 143.3 
    },
    {
        name: 'Isabella',
        lastname: 'Lopez',
        email: 'isabella.lopez@example.com',
        city: 'Mexico City',
        country: 'Mexico',
        salary: 3500,
        age: 29,
        height: 170,
        weight: 138.89 
    },
    {
        name: 'Jack',
        lastname: 'Chen',
        email: 'jack.chen@example.com',
        city: 'Shanghai',
        country: 'China',
        salary: 6000,
        age: 16,
        height: 175,
        weight: 158.73 
    },
    {
        name: 'Karen',
        lastname: 'Gomez',
        email: 'karen.gomez@example.com',
        city: 'Bogotá',
        country: 'Colombia',
        salary: 2800,
        age: 31,
        height: 165,
        weight: 132.28 
    },
    {
        name: 'Carlos',
        lastname: 'González',
        email: 'carlos.gonzalez@example.com',
        city: 'Madrid',
        country: 'Spain',
        salary: 3200,
        age: 28,
        height: 175,
        weight: 160
    },
    {
        name: 'Sophie',
        lastname: 'Dupont',
        email: 'sophie.dupont@example.com',
        city: 'Paris',
        country: 'France',
        salary: 4800,
        age: 29,
        height: 170,
        weight: 135
    },
    {
        name: 'Ravi',
        lastname: 'Kumar',
        email: 'ravi.kumar@example.com',
        city: 'Bangalore',
        country: 'India',
        age: 26
    },
    {
        name: 'Jorge',
        lastname: 'Garcia',
        email: 'jorge.garcia@example.com',
        city: 'Mexico City',
        country: 'Mexico',
        salary: 2600,
        age: 34,
        height: 180,
        weight: 175
    },
    {
        name: 'Sophia',
        lastname: 'Müller',
        email: 'sophia.muller@example.com',
        city: 'Berlin',
        country: 'Germany',
        salary: 3900,
        age: 31,
        height: 165,
        weight: 145
    },
    {
        name: 'Fabio',
        lastname: 'Silva',
        email: 'fabio.silva@example.com',
        city: 'Rome',
        country: 'Italy',
        salary: 2900,
        age: 26,
        height: 178,
        weight: 155
    },
    {
        name: 'Elena',
        lastname: 'Kowalski',
        email: 'elena.kowalski@example.com',
        city: 'Warsaw',
        country: 'Poland',
        salary: 3100,
        age: 27,
        height: 172,
        weight: 140
    },
    {
        name: 'Kim',
        lastname: 'Park',
        email: 'kim.park@example.com',
        city: 'Seoul',
        country: 'South Korea',
        age: 25
    },
    {
        name: 'Lucas',
        lastname: 'Santos',
        email: 'lucas.santos@example.com',
        city: 'Sao Paulo',
        country: 'Brazil',
        salary: 2800,
        age: 32,
        height: 175,
        weight: 165 
    },
    {
        name: 'Maria',
        lastname: 'Rodriguez',
        email: 'maria.rodriguez@example.com',
        city: 'Buenos Aires',
        country: 'Argentina',
        salary: 3100,
        age: 29,
        height: 165,
        weight: 150
    }
]);

db.users2.drop();
db.users2.find();

// 1. Obtener todos los usuarios que sean mayores de 18 años.

db.users2.find({ 
    age : {$gt: 18} });

// 2. Obtener todos los usuarios que sean de Londres o de París.

db.users2.find({
    $or: [
        { city: 'London' },
        { city: 'Paris' }
    ]
});

// 3. Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.

db.users2.find({
    $and: [
        { salary: { $gt: 2000 } },
        { age: { $lt: 30 } }
    ]
});


// 4. Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.

db.users2.find({
    $and: [
        { country : 'Spain'},
        { salary: { $gt: 3000}}
    ]
})

// 5. Obtener todos los usuarios que tengan entre 25 y 35 años.

db.users2.find({
    $and: [
        { age: { $gte: 25 } },
        { age: { $lte: 35 } }
    ]
});

// 6. Obtener a todos los usuarios que no sean de Estados Unidos.

db.users2.find({ country : {$ne: 'USA'} });

// 7. Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.

db.users2.find({
    city: 'London',
    $or: [
        { salary: { $gt: 2500 } },
        { age: { $gt: 30 } }
    ]
});


// 8. Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.

db.users2.find({
    $and: [
        { country: 'Australia' },
        { weight: { $gt: 140 } }
    ]
});

// 9. Obtener a todos los usuarios que no sean de Londres ni de París.

db.users2.find({
    $nor: [
        { city: 'London' },
        { city: 'Paris' }
    ]
});

// 10. Obtener a todos los usuarios que no sean de Londres ni de París.

db.users2.find({
    $or: [
        { salary: { $lt: 2000 } },
        { age: { $gt: 40 } }
    ]
});

// 11. Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.

db.users2.find({
    $and: [
        { country: 'Canada' },
        {
            $or: [
                { salary: { $gt: 4000 } },
                { height: { $gt: 180 } }
            ]
        }
    ]
});

// 12. Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.

db.users2.find({
    $and: [
        { country: 'Italy' },
        { age: { $gte: 20, $lte: 30 } }
    ]
});

// 13. Obtener todos los usuarios que no tengan un correo electrónico registrado.

db.users2.find({
    email: { $exists: false }
});

// 14. Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.

db.users2.find({
    $and: [
        { country: 'France' },
        { salary: { $gte: 3000, $lte: 5000 } }
    ]
});

// 15. Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.

db.users2.find({
    $and: [
        { country: 'Brasil' },
        {
            $or: [
                { weight: { $lt: 120 } },
                { weight: { $gt: 140 } }
            ]
        }
    ]
});

// 16. Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.

db.users.find({
    $or: [
        { $and: [{ country: 'Argentina' }, { age: { $lt: 25 } }] },
        { $and: [{ country: 'Chile' }, { age: { $lt: 25 } }] }
    ]
});


// 17. Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.

db.users.find({
    $and: [
        { country: { $ne: 'Spain' } },
        { country: { $ne: 'Mexico' } },
        { salary: { $lt: 3000 } }
    ]
});

// 18. Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.

db.users.find({
    $and: [
        { country: 'Alemania' },
        {
            $or: [
                { salary: { $lt: 4000 } },
                { age: { $gt: 35 } }
            ]
        }
    ]
});

// 19. Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.

db.users.find({
    $and: [
        { country: { $ne: 'Colombia' } },
        { height: { $lt: 170 } }
    ]
});

// 20. Obtener todos los usuarios que sean de India y que no tengan un salario registrado.

db.users.find({
    $and: [
        { country: 'India' },
        { salary: { $exists: false } }
    ]
});





