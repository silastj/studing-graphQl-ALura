const { ApolloServer } = require('apollo-server')
const userSchema = require('./users/schema/user.graphql')
const useResolvers = require('./users/resolvers/userResolvers')
const UserAPI = require('./users/datasource/user')

const typeDefs = [userSchema]
const resolvers = [useResolvers]

const server = new ApolloServer({   
  typeDefs, 
  resolvers,
dataSources: () => {
  UserAPI: new UserAPI()
}})
server.listen().then(({url}) => {
  console.log(`Servidor rodando na porta: ${url}` )
})