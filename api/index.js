const { ApolloServer } = require('apollo-server')
const { mergeTypeDefs } = require('@graphql-tools/merge')
const path = require('path')

const { userSchema, useResolvers, UsersAPI } = require('./users/index')
const { turmaSchema, turmaResolvers, TurmasAPI } = require('./turma/index')
const { matriculaSchema} = require('./matricula/index')

const typeDefs = mergeTypeDefs([userSchema, turmaSchema])
const resolvers = [useResolvers, turmaResolvers]
const dbConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: path.resolve(__dirname, './data/database.db')
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      usersAPI: new UsersAPI(),
      turmasAPI: new TurmasAPI(dbConfig)
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`Servidor rodando na porta: ${url}`)
})