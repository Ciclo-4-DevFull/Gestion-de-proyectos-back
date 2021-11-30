import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import conectarBD from './db/db';
import { types } from './graphql/types';
import { resolvers } from './graphql/resolvers';
import { validateToken } from './utils/tokenUtils';

dotenv.config(); // permite el uso de la variable de ambiente

const getUserData = (token) => {
    const verificacion = validateToken(token.split(' ')[1]);
    if(verificacion.data){
        return verificacion.data
    } else {
        return null;
    }
}

const server = new ApolloServer({ // define los tipos y los resolvers de graphql 
    typeDefs: types,
    resolvers: resolvers,
    context: ({ req }) => {
        const token = req.headers?.authorization ?? null;
        if (token){
            const UserData = getUserData(token);
            if (UserData){
                return { UserData };
            }
        }
        return null;
    },
});

const app = express(); // crea el servidor de expres

app.use(express.json());
app.use(cors());

app.listen({ port: process.env.PORT || 4000 }, async () => { 
    await conectarBD(); // realiza la conexión a la bd
    await server.start(); // prende el servidor de graphql

    server.applyMiddleware({ app }); // utiliza las opciones de expres en grapql (cors, express.json)
    console.log('Servidor listo')
})
