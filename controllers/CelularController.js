const Celular = require('../models/Celular.js')

class CelularController {
    async create(req, res) {
        const {
            model,
            price,
            brand,
            startDate,
            endDate,
            color,
            code


        } = req.body
        let modelRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)/.test(model)
        let modelSpace = model.replace(/\s/g, '')

        if (modelRegex === false || modelSpace.length < 2 || modelSpace.length > 255) {
            res.status(500)
            res.json({
                err: "Erro nas restrições do Modelo"
            })
        }
        let isPricePositive = parseFloat(price)
        if (isPricePositive < 0) {
            res.status(500)
            res.json({
                err: "Erro nas restrições do Preço"
            })
        }

        let isBrandRight = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)/.test(brand)
        let brandSpace = brand.replace(/\s/g, '')


        if (brandSpace === false || brandSpace.length < 2 || brandSpace.length > 255) {
            res.status(500)
            res.json({
                err: "Erro nas restrições do Brand"
            })
        }

        let isStartDate = startDate.split('-').join('/');
        console.log(isStartDate)
        if (isStartDate == "25/12/2018") {
            res.status(500)
            res.json({
                err: "A data deve ser posterior a 25/12/2018"
            })
        }
        let parts = startDate.split('/').reverse().join('-');
        let parts2 = endDate.split('/').reverse().join('-');
        let dateStart = new Date(parts)
        let dateEnd = new Date(parts2)
        let date1 = dateStart.getTime()
        let date2 = dateEnd.getTime()
        if (date1 >= date2) {
            res.status(500)
            res.json({
                err: "Erro nas restrições de Data Final"
            })
        }
        let colorsAccept = ["BLACK", "WHITE", "GOLD", "PINK"]

        let isColor = colorsAccept.find(element => element == color)
        if (isColor == undefined) {
            res.status(500)
            res.json({
                err: "Erro nas restrições de Cor"
            })
        }
        let isCode = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)/.test(code)
        let codeSpace = code.replace(/\s/g, '')


        if (isCode === false || codeSpace.length < 8) {
            res.status(500)
            res.json({
                err: "Erro nas restrições de Código"
            })
        }
        let findCode = await Celular.findCode(code)
        const conta = Object.entries(findCode).length
     console.log(conta)
        if (conta >= 1) {
           
            res.status(500)
            res.json({
                err: "Erro o código já existe"
            })
        }else{
        try {

            await Celular.create(model,
                price,
                brand,
                startDate,
                endDate,
                color,
                code)
            res.status(200)
            res.json({
                success: "Success"
            })
        } catch (error) {
            res.status(500)
            res.json({
                err: "Erro no banco de dados"
            })
        }
    }





    }

    async index(req,res){


        try {
            const celphone = await Celular.index()
            res.status(200)
            res.send(celphone)
        } catch (error) {
            res.status(404)
            res.json({err:"Nenhum celular cadastrado"})
        }
    }

    async findOnePhone(req, res){
        const {code} = req.params
        if(code === undefined || code === ""){
            res.status(404)
            res.json({err:"Celular não encontrado"})
        }
        try {
            const celphone = await Celular.findOne(code)
            res.status(200)
            res.send(celphone)
        } catch (error) {
            res.status(404)
            res.json({err:"Celular não encontrado"})
        }

    }

    async destroy(req, res){
        const {code} = req.params
        if(code === undefined || code === ""){
            res.status(404)
            res.json({err:"Celular não encontrado"})
        }
        try {
            const celphone = await Celular.delete(code)
            res.status(200)
            res.send("Celular deletado")
        } catch (error) {
            res.status(404)
            res.json({err:"Celular não encontrado"})
        }
    }

    async update(req, res){
        const {
            model,
            price,
            brand,
            startDate,
            endDate,
            color,
            code

        } = req.body
        const {id} = req.params
  
        let modelRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)/.test(model)
        let modelSpace = model.replace(/\s/g, '')

        if (modelRegex === false || modelSpace.length < 2 || modelSpace.length > 255) {
            res.status(500)
            res.json({
                err: "Erro nas restrições do Modelo"
            })
        }
        let isPricePositive = parseFloat(price)
        if (isPricePositive < 0) {
            res.status(500)
            res.json({
                err: "Erro nas restrições do Preço"
            })
        }

        let isBrandRight = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)/.test(brand)
        let brandSpace = brand.replace(/\s/g, '')


        if (brandSpace === false || brandSpace.length < 2 || brandSpace.length > 255) {
            res.status(500)
            res.json({
                err: "Erro nas restrições do Brand"
            })
        }

        let isStartDate = startDate.split('-').join('/');
        console.log(isStartDate)
        if (isStartDate == "25/12/2018") {
            res.status(500)
            res.json({
                err: "A data deve ser posterior a 25/12/2018"
            })
        }
        let parts = startDate.split('/').reverse().join('-');
        let parts2 = endDate.split('/').reverse().join('-');
        let dateStart = new Date(parts)
        let dateEnd = new Date(parts2)
        let date1 = dateStart.getTime()
        let date2 = dateEnd.getTime()
        if (date1 >= date2) {
            res.status(500)
            res.json({
                err: "Erro nas restrições de Data Final"
            })
        }
        let colorsAccept = ["BLACK", "WHITE", "GOLD", "PINK"]

        let isColor = colorsAccept.find(element => element == color)
        if (isColor == undefined) {
            res.status(500)
            res.json({
                err: "Erro nas restrições de Cor"
            })
        }
        let isCode = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)/.test(code)
        let codeSpace = code.replace(/\s/g, '')


        if (isCode === false || codeSpace.length < 8) {
            res.status(500)
            res.json({
                err: "Erro nas restrições de Código"
            })
        }
        let findCode = await Celular.findCode(code)
        const conta = Object.entries(findCode).length

        if (conta >= 1) {
           
            res.status(500)
            res.json({
                err: "Erro o código já existe"
            })
        }else{
        try {

            await Celular.update(model,
                price,
                brand,
                startDate,
                endDate,
                color,
                code,id)
            
            res.status(200)
            res.json({
                success: "Success"
            })
        } catch (error) {
            res.status(500)
            res.json({
                err: "Erro no banco de dados"
            })
        }
    }


    }
}

module.exports = new CelularController();