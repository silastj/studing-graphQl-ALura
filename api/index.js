const { ApolloServer } = require('apollo-server')
const userSchema = require('./users/schema/user.graphql')

const users = [
  {
    nome: 'Silas',
    ativo: true
  },
  {
    nome: 'Amós',
    ativo: false
  }
]
console.log(users)

const typeDefs = [userSchema]
const resolvers = {}

const server = new ApolloServer({ typeDefs, resolvers})
server.listen().then(({url}) => {
  console.log(`Servidor rodando na porta: ${url}` )
})