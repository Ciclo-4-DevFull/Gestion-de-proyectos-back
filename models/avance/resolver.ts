import { AdvanceModel } from "./advance"

const resolversAdvance = {
    Query: {
        Avances: async (parent, args) => {
            const avances = await AdvanceModel.find();
            return avances;
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