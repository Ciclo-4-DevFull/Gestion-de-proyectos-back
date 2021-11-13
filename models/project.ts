import { Schema, model } from "mongoose";
import { Enum_EstadoProyecto, Enum_Fase } from "./enums";
import { UserModel } from "./user";

interface Proyecto{
    nombre: string;
    presupuesto: number;
    inicio: Date;
    fin: Date;
    estado: Enum_EstadoProyecto;
    fase: Enum_Fase;
    lider: Schema.Types.ObjectId,
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
        default: Enum_EstadoProyecto.inactivo
    },
    fase: {
        type: String,
        enum: Enum_Fase,
        default: Enum_Fase.nula,
    },
    lider: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    }
});

const ProjectModel = model("Proyecto", projectSchema);

export { ProjectModel };