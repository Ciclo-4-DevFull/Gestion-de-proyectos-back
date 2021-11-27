import { gql } from 'apollo-server-express';

const typesEnums = gql`

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

    enum Enum_EstadoInscripcion{
        ACEPTADO
        RECHAZADO
        PENDIENTE
    }

`;

export { typesEnums };