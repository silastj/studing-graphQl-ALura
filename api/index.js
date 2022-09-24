const { ApolloServer, gql } = require('apollo-server')

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
console.log(typeof(users))

// SDL(Schema Definition Language)
// Receber o GQL para o javascript entender o schema abaixo
// schema com o GQL faz o javascript entender a linguaguem

const typeDefs = gql`
  type User {
    nome: String!
    ativo: String!
    email: String
  }
`

const server = new ApolloServer({ typeDefs, resolvers})