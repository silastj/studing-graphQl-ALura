const { ApolloServer } = require('apollo-server')
const { mergeTypeDefs } = require('@graphql-tools/merge')
const path = require('path')

const userSchema = require('./users/schema/user.graphql')
const useResolvers = require('./users/resolvers/userResolvers')
const UsersAPI = require('./users/datasource/user')

const turmaSchema = require('./turma/schema/turma.graphql')
const turmaResolvers = require('./turma/resolvers/turmaResolvers')
const TurmasAPI = require('./turma/datasource/turma')

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