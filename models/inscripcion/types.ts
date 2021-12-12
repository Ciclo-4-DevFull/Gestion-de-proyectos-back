import { gql } from 'apollo-server-express';

const typesInscription = gql`

    type Inscripcion{
        _id: ID!
        estado: Enum_EstadoInscripcion!
        ingreso: Date
        egreso: Date
        proyecto: Proyecto!
        estudiante: Usuario!
    }

    input consultaInscripcion{
        _id: ID
        estado: Enum_EstadoInscripcion
    }

    type Query{
        Inscripciones(
            _id: ID
            estado: Enum_EstadoInscripcion
        ): [Inscripcion]
        Inscripcion(_id: String!): Inscripcion
    },

    type Mutation{
        crearInscripcion(
            proyecto: String!
            estudiante: String!
        ): Inscripcion

        aprobarInscripcion(
            _id: String!
        ): Inscripcion
    }

`

export { typesInscription };