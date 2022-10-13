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
- baixar o repo( clonar o repositório)
- npm install 
- abrir (1) && (2) terminal
- (1)npx json-server --watch api/data/dados.json ( aqui eu vou subir o servidor )
-- depois que instalar o graphql e apollo-server ( aqui eu vou subir o servidor apollo )
- (2)npm run start

# Baby Step
- Definimos o Schema composta por tipos (.graphql)  - Query
- Resolvemos no arquivo(userResolvers.js) tudo que definimos no schema
- Juntamos tudo isso no Apollo-server(index.js) os typeDefs e resolvers para funcionar
- Resolvers 



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

- Conectar com uma base de dados (endpoints rest)
- Unir schema, resolver e dados
- Parâmetros do resolver para que servem
- Como utilizar parâmetros no GraphQL
- Utilizar parâmetros nas queries
- Trabalhar com dados de diferentes fontes/endpoints

- Criar mutations para alteração de dados
- Como inserir e alterar dados em objetos que recebem outros objetos como campo
- Utilizar o resolver para implementar mutations

- Criar tipos scalar customizados para formatos que precisam de validação, como datas
- Utilizar Enums para especificar os possíveis valores de um campo
- Organizar a inserção de dados no schema com Input
- Implementar interface para melhorar as mensagens de resposta para o cliente

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

# Query - consulta
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

# Mutations - calculos operacionais

- Ele é criado para executar alterações 
- Exemplor: AdicionarUser
- Criamos um mutations dentro .graphql e adicionamos um metodo, com os tipos de dados que recebemos e parametros.

type Mutation {
    adicionarUser(
      nome: String!,
      ativo: Boolean!,
      email: String,
      role: String!
    ): User!
  } 
  
  - userResolvers.js

  Mutation: {
    adicionarUser: (rooot, user, {dataSources}) => dataSources.usersAPI.adicionarUser(user)
  }

  - datasource\user.js
  
  async adicionarUser(user) {
    const users = await this.get('/users/')
    users.id = users.length + 1
    const role =await this.get(`roles?types=${user.role}`)
    await this.post('users', {...user, role: role[0].id})
    return ({
      ...user,
      role: role[0]
    })
  }

-





