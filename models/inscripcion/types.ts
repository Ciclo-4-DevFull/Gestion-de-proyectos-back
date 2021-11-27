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

    type Query{
        Inscripciones: [Inscripcion]
    },

    type Mutation{
        crearInscripcion(
            estado: Enum_EstadoInscripcion!
            proyecto: String!
            estudiante: String!
        ): Inscripcion

        aprobarInscripcion(
            _id: String!
        ): Inscripcion
    }

`

export { typesInscription };