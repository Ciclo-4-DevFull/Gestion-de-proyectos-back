import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol, Enum_Tipo } from "./models/enums"; 
import { ProjectModel } from "./models/project";

const main = async () => {
    conectarBD();

    /* ProjectModel.create({
        nombre: "Proyecto MinTIC 2",
        presupuesto: 230,
        inicio: Date.now(),
        fin: new Date('2022/11/10'),
        lider: '6190098cefe35caff4c09ba5',
        objetivos: [
            { descripcion: "Descripción del objetivo general", tipo: Enum_Tipo.general},
            { descripcion: "Descripción del objetivo específico 1", tipo: Enum_Tipo.especifico},
            { descripcion: "Descripción del objetivo específico 2", tipo: Enum_Tipo.especifico}
        ]
    }); */ 


    /*ProjectModel.aggregate([
        {
            $lookup: {
                from: 'objectives',
                localField: '_id',
                foreignField: 'proyecto',
                as: 'objetivos'
            },
        },
        {
            $unwind: "$objetivos",
        },
    ]).then((u) => {console.log(u)}); */

};

main();






    // Traer información recursivamente de otras colecciones
    /* const proyecto = await ProjectModel.find({ nombre: 'Proyecto MinTIC 2' }).populate('lider');
    console.log(proyecto); */

// CRUD USUARIOS

//  CREAR USUARIOS
/* 
     await UserModel.create({
        nombre: "Juan",
        apellido: "Mendoza",
        correo: "dsl@co.com",
        identificacion: "12347",
        rol: Enum_Rol.administrador,
    }).then((u) => {
        console.log("Usuario creado", u);
    }).catch((e) => {
        console.error("Error creando el usuario", e);
    });  */

/* CONSULTAR TODOS LOS USUARIOS

    await UserModel.find().then((u) => {
        console.log('usuarios: ', u);
    }).catch((e) => {
        console.error('error obteniendo los usuarios ', e);
    }); */

/*  CONSULTAR LOS USUARIOS QUE CUMPLAN UNA CONDICION: El correo en este ejemplo

    UserModel.find({ correo: 'dsl@c.com' }).then((u) => {
        console.log('usuarios: ', u);
    }).catch((e) => {
        console.error('error obteniendo los usuarios ', e);
    }); */

    // EDITAR USUARIO: findOneAnUpdate({<criterioBusqueda>},{<NuevaInformación>})

    /*     await UserModel.findOneAndUpdate({ correo: 'dsl@cc.com'},
     { nombre: 'Juan', apellido: 'Páez' }).then((u) => {console.log(u)}) */


    // ELIMINAR USUARIO 

    /*     await UserModel.findOneAndDelete({ correo: 'dsl@cc.com' })
    .then((u) => {
        console.log('usuario eliminado: ', u);
    })
    .catch((e) => {
        console.error('Error eliminando el usuario: ', e)
    }); */