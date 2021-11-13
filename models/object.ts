import { Schema, model } from "mongoose";
import { Enum_Tipo } from "./enums";
import { ProjectModel } from "./project";

interface Objetivo{
    descripcion: string;
    tipo: Enum_Tipo;
    proyecto: Schema.Types.ObjectId;
}

const objectiveSchema = new Schema<Objetivo>({
    descripcion: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        enum: Enum_Tipo,
        required: true,
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
    }
});

const ObjectiveModel = model('Object', objectiveSchema);

export { ObjectiveModel };