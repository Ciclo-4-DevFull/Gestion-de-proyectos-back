import { gql } from 'apollo-server-express';

const typesProject = gql`

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
        inicio: Date
        fin: Date
        estado: Enum_EstadoProyecto
        fase: Enum_Fase
        lider: Usuario!
        objetivos: [Objetivo]!
        avances: [Avance]
        inscripciones: [Inscripcion]
    }

    input consultaProyecto{
        _id: ID
        nombre: String
        estado: Enum_EstadoProyecto
        fase: Enum_Fase
        lider: String
    }

    type Query{
        Proyectos(
            _id: ID
            nombre: String
            estado: Enum_EstadoProyecto
            fase: Enum_Fase
            lider: String
        ): [Proyecto]
    }

    type Mutation{
        
        crearProyecto(
            nombre: String!
            presupuesto: Float!
            inicio: Date
            fin: Date
            estado: Enum_EstadoProyecto
            fase: Enum_Fase
            lider: String!
            objetivos: [crearObjetivo]!
        ): Proyecto

        editarProyecto(
            _id: String!
            nombre: String
            presupuesto: Float
            inicio: Date
            fin: Date
            estado: Enum_EstadoProyecto
            fase: Enum_Fase
            lider: String
            objetivos: [crearObjetivo]
        ): Proyecto
    }
`;

export { typesProject };