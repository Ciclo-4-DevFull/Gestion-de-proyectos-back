import { Schema, model } from "mongoose";
import { Enum_EstadoProyecto, Enum_Fase, Enum_Tipo } from "../enums/enums";
import { UserModel } from "../usuario/user";

interface Proyecto{
    nombre: string;
    presupuesto: number;
    inicio: Date;
    fin: Date;
    estado: Enum_EstadoProyecto;
    fase: Enum_Fase;
    lider: Schema.Types.ObjectId,
    objetivos: [{
        descripcion: string;
        tipo: Enum_Tipo;
    }]
}

const projectSchema = new Schema<Proyecto>({
    nombre: {
        type: String,
        required: true,
    },
    presupuesto: {
        type: Number,
        required: true,
    },
    inicio: {
        type: Date,
        required: true,
    }, 
    fin: {
        type: Date,
        required: true,
    },
    estado: {
        type: String,
        enum: Enum_EstadoProyecto,
        default: Enum_EstadoProyecto.INACTIVO,
    },
    fase: {
        type: String,
        enum: Enum_Fase,
        default: Enum_Fase.NULO,
    },
    lider: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    },
    objetivos: [
        {
            descripcion: {
                type: String,
                required: true,
            },
            tipo: {
                type: String,
                enum: Enum_Tipo,
                required: true,
            },
        },
    ],
});

const ProjectModel = model("Proyecto", projectSchema);

export { ProjectModel };