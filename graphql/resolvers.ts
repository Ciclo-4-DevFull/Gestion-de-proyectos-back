import { resolverUser } from "../models/usuario/resolver";
import { resolversProject } from "../models/proyecto/resolver";
import { resolversAdvance } from "../models/avance/resolver";

export const resolvers = [resolversProject, resolverUser, resolversAdvance];