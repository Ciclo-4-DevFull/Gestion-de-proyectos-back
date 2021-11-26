import { gql } from 'apollo-server-express';

const typeDefs = gql`

    scalar Date

    enum Enum_Estado{
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }

    enum Enum_Rol{
        ESTUDIANTE
        LIDER
        ADMINISTRADOR
    }

    enum Enum_EstadoProyecto{
        ACTIVO
        INACTIVO
    }
    
    enum Enum_Fase{
        INICIADO 
        DESARROLLO
        TERMINADO
        NULO
    }

    enum Enum_Tipo{
        GENERAL
        ESPECIFICO
    }

    type Usuario{
        _id: ID!
        nombre: String!
        apellido: String!
        correo: String!
        identificacion: String!
        rol: Enum_Rol!
        estado: Enum_Estado!
    }

    type Objetivo{
        _id: ID!
        descripcion: String!,
        tipo: Enum_Tipo!
    }

    input crearObjetivo{
        descripcion: String!,
        tipo: Enum_Tipo!
    }

    type Proyecto{
        _id: ID!
        nombre: String!
        presupuesto: Float!
        inicio: Date!
        fin: Date!
        estado: Enum_EstadoProyecto
        fase: Enum_Fase
        lider: Usuario!
        objetivos: [Objetivo]
    }

    type Query{
        Usuarios: [Usuario]
        Usuario(_id: String!): Usuario
        Proyectos: [Proyecto]
    }

    type Mutation{
        crearUsuario(
            nombre: String!
            apellido: String!
            correo: String!
            identificacion: String!
            rol: Enum_Rol!
            estado: Enum_Estado
        ):Usuario
        
        editarUsuario(
            _id: String!
            nombre: String!
            apellido: String!
            correo: String!
            identificacion: String!
            rol: Enum_Rol!
            estado: Enum_Estado!
        ): Usuario

        eliminarUsuario(_id: String!): Usuario

        crearProyecto(
            nombre: String!
            presupuesto: Float!
            inicio: Date!
            fin: Date!
            estado: Enum_EstadoProyecto
            fase: Enum_Fase
            lider: String!
            objetivos: [crearObjetivo]
        ): Proyecto
    }
`;

export { typeDefs };