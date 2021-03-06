import { AdvanceModel } from "./advance"

const resolversAdvance = {
    Query: {
        Avances: async (parent, args) => {
            const avances = await AdvanceModel.find().populate('proyecto').populate('creadoPor');
            return avances;
        }, 

        filtrarAvance: async (parent, args) => {
            const avanceFiltrado = await AdvanceModel.find({ proyecto: args._id }).populate('proyecto').populate('creadoPor');
            return avanceFiltrado;
        }
    },

    Mutation: {
        crearAvance: async (parent, args) => {
            const avanceCreado = await AdvanceModel.create({
                fecha: Date.now(),
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
                observaciones: [""]
            });
            return avanceCreado;
        },

        agregarObservaciones: async (parent, args) => {
            const comentarios = await AdvanceModel.findByIdAndUpdate(args._id, {
                observaciones: args.observaciones
            },
            { new: true });
            return comentarios;
        },

        modificarAvance: async (parent, args) => {
            const avanceEditado = await AdvanceModel.findByIdAndUpdate(args._id, {
                descripcion: args.descripcion
            },
            { new: true });
            return avanceEditado;
        }

    },
};

export { resolversAdvance };