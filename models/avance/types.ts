import { gql } from "apollo-server-express";

const typesAdvance = gql`
type Avance{
    fecha: Date!
    descripcion: String!
    observaciones: [String]
    proyecto: String!
    creadoPor: String!
}

type Query{
    Avances: [Avance]
}

type Mutation{
    crearAvance(
        fecha: Date!
        descripcion: String!
        proyecto: String!
        creadoPor: String!
    ):Avance
}
`
export { typesAdvance };