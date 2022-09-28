
const useResolvers = {
  Query: {
    users: (root, args, {dataSources}) => dataSources.usersAPI.getUsers(),
    user: (root, {id}, {dataSources}) => dataSources.usersAPI.getUserById(id)
  }
  // Query: {
  //   roles: ({dataSources}) => dataSources.usersAPI.getRoles()
  // }
}


module.exports = useResolvers