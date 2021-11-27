import { ProjectModel } from "./project";

const resolversProject = {

    Query: {
        Proyectos: async (parent, args) => {
            const proyectos = await ProjectModel.find()
            .populate('avances')
            .populate('inscripciones')
            .populate('lider');
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
        }
    },
};

export { resolversProject };