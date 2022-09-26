const { ApolloServer } = require('apollo-server')
const userSchema = require('./users/schema/user.graphql')
const useResolvers = require('./users/resolvers/userResolvers')

const typeDefs = [userSchema]
const resolvers = [useResolvers]

const server = new ApolloServer({ typeDefs, resolvers})
server.listen().then(({url}) => {
  console.log(`Servidor rodando na porta: ${url}` )
})