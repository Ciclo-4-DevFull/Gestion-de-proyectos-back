import { ProjectModel } from "./project";

const resolversProject = {

    Query: {
        Proyectos: async (parent, args) => {
            const proyectos = await ProjectModel.find(args)
            .populate({
                path: 'avances',
                populate: {
                    path: 'creadoPor'
                }
            })
            .populate({
                path: 'inscripciones',
                populate: {
                    path: 'estudiante'
                }
            })
            .populate('lider')
            return proyectos;
        },
    },

    Mutation: {
        
        crearProyecto: async(parent, args) => {
            const proyectoCreado = await ProjectModel.create({
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                inicio: args.inicio,
                fin: args.fin,
                estado: args.estado,
                fase: args.fase,
                lider: args.lider,
                objetivos: args.objetivos
            })
            return proyectoCreado
        },

        editarProyecto: async(parent, args) => {
            const proyectoEditado = await ProjectModel.findByIdAndUpdate(args._id, {
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                inicio: args.inicio,
                fin: args.fin,
                estado: args.estado,
                fase: args.fase,
                lider: args.lider,
                objetivos: args.objetivos
            }, 
            { new: true })
            return proyectoEditado
        },
    },
}

export { resolversProject }