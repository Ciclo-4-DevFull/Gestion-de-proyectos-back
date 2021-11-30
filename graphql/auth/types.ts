import { gql } from 'apollo-server-express';

const typesAuth = gql`

    type Token{
        token: String
        error: String
    }

    type Mutation{
        registro(
            nombre: String!
            apellido: String!
            correo: String!
            password: String!
            identificacion: String!
            rol: Enum_Rol!
            estado: Enum_Estado
        ): Token

        login(
            correo: String!
            password: String!
        ): Token

        validateToken: Token
    }
`;

export { typesAuth };