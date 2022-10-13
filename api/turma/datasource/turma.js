const { SQLDataSource } = require('datasource-sql')

class TurmasAPI extends SQLDataSource {
  constructor(dbConfig) {
    super(dbConfig)
  }

  async getTurmas() {
    return this.db
    .select('*')
    .from('turmas')
  }

  async getTurma(id){
    if(id !== null){
      const turma = await this.db
      .select('*')
      .from('turmas')
      .where({id: Number(id)})
      if(turma !== null){
        return turma[0]
      }else{
        return 'não encontrado!'
      }
    }
  }


}
module.exports = TurmasAPI