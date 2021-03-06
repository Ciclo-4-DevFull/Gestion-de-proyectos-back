import { resolverUser } from "../models/usuario/resolver";
import { resolversProject } from "../models/proyecto/resolver";
import { resolversAdvance } from "../models/avance/resolver";
import { resolverInscriptions } from "../models/inscripcion/resolver";
import { resolversAuth } from "./auth/resolver";

export const resolvers = [resolversProject, resolverUser, resolversAdvance, resolverInscriptions, resolversAuth];