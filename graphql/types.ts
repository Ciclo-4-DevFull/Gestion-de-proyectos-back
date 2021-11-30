import { gql } from 'apollo-server-express';
import { typesEnums } from '../models/enums/types';
import { typesUser } from '../models/usuario/types';
import { typesProject } from '../models/proyecto/types';
import { typesAdvance } from '../models/avance/types';
import { typesInscription } from '../models/inscripcion/types';
import { typesAuth } from './auth/types';

const globalTypes = gql`

    scalar Date

`;

export const types = [typesEnums, typesUser, typesProject, typesAdvance, typesInscription, typesAuth, globalTypes]