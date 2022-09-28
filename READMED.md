# DEPENDENCIES 
- json-server": "^0.16.1"
- nodemon": "^2.0.4"
- apollo-server": "^3.10.2",
- graphql": "^16.6.0",
- apollo-datasource-rest": "^3.7.0",
- graphql-tools": "^8.3.6",


# Resources
- http://localhost:3000/users
- http://localhost:3000/roles

# Run Project
- npx json-server --watch api/data/dados.json
-- depois que instalar o graphql e apollo-server
- npm run start

# Baby Step
- Definimos o Schema composta por tipos (.graphql)
- Resolvemos no arquivo(userResolvers.js) tudo que definimos no schema
- Juntamos tudo isso no Apollo-server(index.js) os typeDefs e resolvers para funcionar




# Course Alura

- Nesta aula, aprendemos(01):
- Fundamentos do GraphQL
- Como criar um servidor GraphQL usando ApolloServer
- Utilizar a SDL, linguagem de definiçao de schema do GraphQL
- Criar um schema e definir um tipo
- Quais os tipos básicos do GraphQL e seus campos

- Nesta aula, aprendemos(02):
- Organizar a aplicação em camadas e vincular o schema do Apollo Server
- Criar um ponto de entrada para a API através de um tipo Query
- Subir o servidor GraphQL
- Criar resolvers para implementar as definições do schema
- Utilizar o Playground para fazer testes e consultar a documentação    automática

# Schema 
- Schema é oq pode ser feito no graphql


# Resolvers
- Resolvers é as funções que iremos resolver para implementar oq foi defenido no schema
- Parametros (root) - Pega o anterior que a Chave principal
            (args) - arugumentos como ex: ID
            (context) - 
# Outhers
- SDL(Schema Definition Language)
- Receber o GQL para o javascript entender o schema abaixo
- Schema com o GQL faz o javascript entender a linguaguem
- A exclamação depois do type no schema é campo obrigatorio

const { gql } = require('apollo-server')
const userSchema = gql`
  type User {
    nome: String!
    ativo: String!
    email: String
  }

- Oq eu quero que a minha query de users retorne ?
  type Query {
    users: [User]
    primeiroUser : User
  }
`
module.exports = userSchema







