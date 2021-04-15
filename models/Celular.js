const knex = require('../database/connection');
class Celular {

    async create(model,
        price,
        brand,
        startDate,
        endDate,
        color,
        code) {

        try {
            await knex.insert({
                model,
                price,
                brand,
                startDate,
                endDate,
                color,
                code
            }).table("telefone")
        } catch (error) {
            console.log(error)
        }


    }
    async findCode(code){
        try {
           const data = await knex('telefone').where('code',code)
           return data
        } catch (error) {
            console.log(error)
        }
        
    }
}
module.exports = new Celular();