import { gql } from 'apollo-server-express';

const typeDefs = gql`

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

type Usuario{
    _id: ID!
    nombre: String!
    apellido: String!
    correo: String!
    identificacion: String!
    rol: Enum_Rol!
    estado: Enum_Estado!
    }

    type Query{
        Usuarios: [Usuario]
        Usuario(_id: String!): Usuario
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
    }
`;

export { typeDefs };