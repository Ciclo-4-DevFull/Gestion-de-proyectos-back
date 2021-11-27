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
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            });
            return avanceCreado;
        },

    },
};

export { resolversAdvance };