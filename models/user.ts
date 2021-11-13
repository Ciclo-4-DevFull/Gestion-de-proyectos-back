import { Schema, model } from "mongoose";
import { Enum_Rol, Enum_Estado } from "./enums"

interface User{
    nombre: string;
    apellido: string;
    correo: string;
    identificacion: string;
    rol: Enum_Rol;
    estado: Enum_Estado;
}

const userSchema = new Schema<User>({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
        validate: {
            validator: (email) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

                /* Validación con condicionales
                if(email.includes('@') && email.includes('.')){
                    return true;
                }else{
                    return false;
                } */
            },
            message: "Formato del correo erroneo"
        },
    },
    identificacion: {
        type: String,
        required: true,
        unique: true,
    },
    rol : {
        type: String,
        required: true,
        enum: Enum_Rol,
    },
    estado: {
        type: String,
        enum: Enum_Estado,
        default: Enum_Estado.pendiente,
    }
});

const UserModel = model("User", userSchema);

export { UserModel };