
const useResolvers = {
  Query: {
    users: (root, args, {dataSources}) => dataSources.usersAPI.getUsers(),
    user: (root, {id}, {dataSources}) => dataSources.usersAPI.getUserById(id)
  },
  Mutation: {
    adicionarUser: (rooot, user, {dataSources}) => dataSources.usersAPI.adicionarUser(user)
  }
}

module.exports = useResolvers