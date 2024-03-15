//Crear Collection o "TABLA"

db.createCollection('users')

//Insertar datos a la Colección

db.users.insertMany([
    {
        name: 'Alice',
        lastname: 'Johnson',
        email: 'alice.johnson@example.com',
        age: 28,
        genero: "F"
    },
    {
        name: 'Bob',
        lastname: 'Smith',
        email: 'bob.smith@example.com',
        age: 45,
        genero: "M"
    },
    {
        name: 'Charlie',
        lastname: 'Brown',
        email: 'charlie.brown@example.com',
        age: 32,
        genero: "M"
    },
    {
        name: 'Diana',
        lastname: 'Garcia',
        email: 'diana.garcia@example.com',
        age: 33,
        genero: "F"
    },
    {
        name: 'Eva',
        lastname: 'Martinez',
        email: 'eva.martinez@example.com',
        age: 40,
        genero: "F"
    },
    {
        name: 'Frank',
        lastname: 'Rodriguez',
        email: 'frank.rodriguez@example.com',
        age: 27,
        genero: "M"
    },
    {
        name: 'Grace',
        lastname: 'Lee',
        email: 'grace.lee@example.com',
        age: 38,
        genero: "F"
    },
    {
        name: 'Henry',
        lastname: 'Nguyen',
        email: 'henry.nguyen@example.com',
        age: 41,
        genero: "M"
    },
    {
        name: 'Isabella',
        lastname: 'Lopez',
        email: 'isabella.lopez@example.com',
        age: 29,
        genero: "F"
    },
    {
        name: 'Jack',
        lastname: 'Chen',
        email: 'jack.chen@example.com',
        age: 36,
        genero: "M"
    }
]);

db.users.find();

db.users.drop();

//FILTRAR POR CONDICION
db.users.find({ age : {$eq: 40} });


//FILTRAR POR TODAS LAS OPCIONES MENOS ESA
db.users.find({ age : {$ne: 20} });

//COMPARAR SI UN DATO ES MAYOR QUE UN VALOR ESPECIFICO

db.users.find({ age : {$gt: 40} });

//COMPARAR SI UN DATO ES MENOR QUE UN VALOR ESPECIFICO

db.users.find({ age : {$lt: 35} });

//COMPARAR SI UN DATOS ES MAYOR O IGUAL A UN VALOR ESPECIFICIO

db.users.find({ age : {$gte: 40} });

//COMPARAR SI UN DATO EN MENOR O GUAL A UN VALOR ESPECIFICO

db.users.find({ age : {$lte: 40} });

//SE UTILIZA PARA BUSCAR DATOS DONDE EL VALOR SE ENCUENTRE EN UN ARRAY

db.users.find({ age : {$in: [29, 36, 40]} });

//SE UTILIZA PARA BUSCAR DATOS DONDE EL VALOR NO SE ENCUENTRE EN UN ARRAY

db.users.find({ age : {$nin: [29, 36, 40]} });

