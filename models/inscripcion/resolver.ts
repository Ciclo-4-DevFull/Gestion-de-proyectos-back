import { Enum_EstadoInscripcion } from "../enums/enums";
import { InscriptionModel } from "./inscription"

const resolverInscriptions = {

    Query: {
        Inscripciones: async (parent, args) => {
            const inscripciones = await InscriptionModel.find();
        },
    },

    Mutation: {
        crearInscripcion: async (parent, args) => {
            const inscripcionCreada = await InscriptionModel.create({
                estado: args.estado,
                proyecto: args.proyecto,
                estudiante: args.estudiante,
            });
            return inscripcionCreada;
        },

        aprobarInscripcion: async (parent, args) => {
            const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(args._id, {
                estado: Enum_EstadoInscripcion.ACEPTADO,
                ingreso: Date.now(),
            });
            return inscripcionAprobada;
        }
    }
}

export { resolverInscriptions }