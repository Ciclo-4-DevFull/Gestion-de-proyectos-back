import { gql } from 'apollo-server-express';

const typesUser = gql`

    type Usuario{
        _id: ID!
        nombre: String!
        apellido: String!
        correo: String!
        identificacion: String!
        rol: Enum_Rol!
        estado: Enum_Estado!
        proyectos: [Proyecto]
    }

    input consultaUsuario{
        _id: ID
        correo: String
        identificacion: String
        rol: Enum_Rol
        estado: Enum_Estado
    }

    type Query{
        Usuarios(
            _id: ID
            correo: String
            identificacion: String
            rol: Enum_Rol
            estado: Enum_Estado
        ): [Usuario]
        Usuario(_id: String!): Usuario
    }

    type Mutation{
        crearUsuario(
            nombre: String!
            apellido: String!
            correo: String!
            password: String!
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

    }
`;

export { typesUser };