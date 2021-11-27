import { Schema, model } from "mongoose";
import { Enum_EstadoInscripcion, Enum_EstadoProyecto } from "../enums/enums"
import { ProjectModel } from "../proyecto/project";
import { UserModel } from "../usuario/user";

interface Inscripcion{
    proyecto: Schema.Types.ObjectId;
    estudiante: Schema.Types.ObjectId;
    estado: Enum_EstadoInscripcion;
    ingreso: Date;
    egreso: Date;
}

const inscriptionSchema = new Schema<Inscripcion>({
    estado: {
        type: String,
        enum: Enum_EstadoInscripcion,
    },
    ingreso: {
        type: Date,
        required: true,
    },
    egreso: {
        type: Date,
        required: true,
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true,
    },
    estudiante: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    }
});

const InscriptionModel = model("Inscripcion", inscriptionSchema);

export { InscriptionModel };