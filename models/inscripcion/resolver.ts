import { Enum_EstadoInscripcion } from "../enums/enums";
import { InscriptionModel } from "./inscription"

const resolverInscriptions = {

    Query: {
        Inscripciones: async (parent, args) => {
            const inscripciones = await InscriptionModel.find(args)
            .populate('estudiante').populate('proyecto');
            return inscripciones;
        },
    },

    Mutation: {
        crearInscripcion: async (parent, args) => {
            const inscripcionCreada = await InscriptionModel.create({
                proyecto: args.proyecto,
                estudiante: args.estudiante,
            });
            return inscripcionCreada;
        },

        aprobarInscripcion: async (parent, args) => {
            const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(args._id, {
                estado: Enum_EstadoInscripcion.ACEPTADO,
                ingreso: Date.now(),
            }, 
            { new: true });
            return inscripcionAprobada;
        },

        rechazarInscripcion: async (parent, args) => {
            const inscripcionRechazada = await InscriptionModel.findByIdAndUpdate(args._id, {
                estado: Enum_EstadoInscripcion.RECHAZADO,
            }, 
            { new: true });
            return inscripcionRechazada;
        }
    }
}

export { resolverInscriptions }