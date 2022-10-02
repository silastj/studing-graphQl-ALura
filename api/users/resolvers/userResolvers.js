
const useResolvers = {
  Query: {
    users: (root, args, {dataSources}) => dataSources.usersAPI.getUsers(),
    user: (root, {id}, {dataSources}) => dataSources.usersAPI.getUserById(id)
  },
  Mutation: {
    adicionarUser: async (root, user, {dataSources}) => dataSources.usersAPI.adicionarUser(user),
    atualizaUser: async (root, novosDados, {dataSources}) => dataSources.usersAPI.atualizaUser(novosDados),
    deleteUser: async (root, { id }, {dataSources}) => dataSources.usersAPI.deleteUser(id)
  }
}

module.exports = useResolvers