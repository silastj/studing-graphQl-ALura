
const arrayUsers = [
  {
    nome: 'Silas',
    ativo: true
  },
  {
    nome: 'Amós',
    ativo: false
  }
]
console.log(arrayUsers)

const useResolvers = {
  Query: {
    users: () => arrayUsers,
    primeiroUser: () => arrayUsers[0]
  }
}


module.exports = useResolvers