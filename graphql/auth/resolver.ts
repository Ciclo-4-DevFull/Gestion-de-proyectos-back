import { UserModel } from '../../models/usuario/user';
import bcrypt from 'bcrypt';
import { generateToken } from '../../utils/tokenUtils';

const resolversAuth = {
    Mutation: {
        registro: async (parent, args) => {

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(args.password, salt);

            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
                password: hashedPassword,
            });
            return {
                token: generateToken({
                    _id: usuarioCreado._id,
                    nombre: usuarioCreado.nombre,
                    apellido: usuarioCreado.apellido,
                    identificacion: usuarioCreado.identificacion,
                    correo: usuarioCreado.correo,
                    rol: usuarioCreado.rol
                }),
            };
        },

        login: async (parent, args) => {
            const buscarUsuario = await UserModel.findOne({ correo: args.correo })
            if(await bcrypt.compare(args.password, buscarUsuario.password)){
                return {
                    token: generateToken({
                        _id: buscarUsuario._id,
                        nombre: buscarUsuario.nombre,
                        apellido: buscarUsuario.apellido,
                        identificacion: buscarUsuario.identificacion,
                        correo: buscarUsuario.correo,
                        rol: buscarUsuario.rol
                    })
                }
            };
        },

        validateToken: async (parent, args, context) => {
            console.log(context);
        }

    },
};

export { resolversAuth };