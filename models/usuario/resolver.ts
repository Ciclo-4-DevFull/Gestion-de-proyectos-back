import { UserModel } from "./user";

const resolverUser = {

    Query: {
        Usuarios: async (parent, args) => {
            const usuarios = await UserModel.find();
            return usuarios;
        },
        
        Usuario: async (parent, args) => {
            const usuario = await (await UserModel.findOne({_id: args._id})).populate('proyectos')
            return usuario;
        },
    },

    Mutation: {
        crearUsuario: async (parent, args) => {
            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                correo: args.correo,
                identificacion: args.identificacion,
                rol: args.rol
            })

            if(Object.keys(args).includes("estado")){
                usuarioCreado.estado = args.estado;
            }

            return usuarioCreado
        },

        editarUsuario: async (parent, args) => {
            const usuarioEditado = await UserModel.findByIdAndUpdate(args._id, {
                nombre: args.nombre,
                apellido: args.apellido,
                correo: args.correo,
                identificacion: args.identificacion,
                rol: args.rol,
                estado: args.estado
            },
            { new: true });
            return usuarioEditado;
        },

        eliminarUsuario: async (parent, args) => {
            const usuarioEliminado = await UserModel.findByIdAndDelete(args._id)
            return usuarioEliminado;
        },

    },
};

export { resolverUser };