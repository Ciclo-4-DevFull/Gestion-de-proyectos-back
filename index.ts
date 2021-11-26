import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import conectarBD from './db/db';
import { typeDefs } from './graphql/types';
import { resolvers } from './graphql/resolvers';

dotenv.config(); // permite el uso de la variable de ambiente

const server = new ApolloServer({ // define los tipos y los resolvers de graphql 
    typeDefs: typeDefs,
    resolvers: resolvers,
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
