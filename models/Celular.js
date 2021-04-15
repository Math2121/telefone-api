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
    async findCode(code) {
        try {
            const data = await knex('telefone').where('code', code)
            return data
        } catch (error) {
            console.log(error)
        }

    }

    async index() {
        try {
            const data = await knex('telefone').select()
            return data
        } catch (error) {
            return error
        }
    }

    async findOne(code) {
        try {
            const data = await knex('telefone').where('code', code).select()
            return data
        } catch (error) {
            return error
        }
    }

    async delete(code) {
        try {
            const data = await knex('telefone').where('code', code).delete()
            return data
        } catch (error) {
            return error
        }
    }

    async update(model,
        price,
        brand,
        startDate,
        endDate,
        color,
        code, id) {
        try {
            const data = await knex.where({
                id: id
            }).update({
                model: model,
                price: price,
                brand: brand,
                startDate: startDate,
                endDate: endDate,
                color: color,
                code: code
            }).table("telefone")
    

            return data
        } catch (error) {
            console.error(error)
            return error
        }
    }
}
module.exports = new Celular();