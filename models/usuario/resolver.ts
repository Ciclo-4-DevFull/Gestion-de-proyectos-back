import { UserModel } from "./user";
import bcrypt from 'bcrypt';

const resolverUser = {

    Query: {
        Usuarios: async (parent, args, context) => {
            const usuarios = await UserModel.find(args);
            return usuarios;
        },
        
        Usuario: async (parent, args) => {
            const usuario = await UserModel.findOne({_id: args._id})
            .populate('proyectos')
            .populate({
                path: 'inscripciones',
                populate: {
                    path: 'proyecto'
                }
            })
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

            if(!args.password){
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
            }else{

                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(args.password, salt)

                const usuarioEditado = await UserModel.findByIdAndUpdate(args._id, {
                    nombre: args.nombre,
                    apellido: args.apellido,
                    correo: args.correo,
                    identificacion: args.identificacion,
                    rol: args.rol,
                    estado: args.estado,
                    password: hashedPassword
                },
                { new: true });
                return usuarioEditado;
            }
        },

        eliminarUsuario: async (parent, args) => {
            const usuarioEliminado = await UserModel.findByIdAndDelete(args._id)
            return usuarioEliminado;
        },

    },
};

export { resolverUser };