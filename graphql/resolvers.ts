const resolvers = {

    Query: {
        Usuarios: async (parent, args) => {
            
            const usuarios = [
                {
                    'nombre': 'Juan',
                }
            ]

            return usuarios;
        }, 
    },
};

export { resolvers };