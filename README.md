# API TELEFONE

## Iniciando projeto

- Para rodar o servidor do projeto em seu prompt de comando digite:

```js
nodemon index.js
```
- Em seguida importe o arquivo <b>"celular.sql"</b> no seu SGBD:
### Lisategm de Celular

- Rota[GET]: "/"

<p> Essa rota irá devolver caso haja todas os celulares cadastrados<p>



  <p>Vai retornar um status <b>200</b> </p>

```js
[
  {
    "id": 8,
    "model": "Modelo 69",
    "price": 25,
    "brand": "Gzs89",
    "startDate": "25/10/2018",
    "endDate": "29/10/2018",
    "color": "BLACK",
    "code": "mm896554447585215"
  },
  {
    "id": 9,
    "model": "Modelo 69",
    "price": 25,
    "brand": "Gzs89",
    "startDate": "25/10/2018",
    "endDate": "29/10/2018",
    "color": "PINK",
    "code": "mm8447585215"
  }
]
```

- Rota[POST]: "/create"
<p> Essa rota permite cadastar um celular dentro das restrições<p>
<p>Deve ser enviado no Body:</p>

```js
{
	"model":"Modelo 69",
	"price":25,
	"brand":"Gzs89",
	"startDate":"25/10/2018",
	"endDate":"29/10/2018",
	"color":"PINK",
	"code":"mm8447585215"

	
}
```
<p>Vai retornar um status <b>200</b> e: </p>

```js
{
  "success": "Success"
}

```

- Rota[GET]: "/celphone/:code"

<p> Essa rota irá retornar todos um celular apenas enviado pela query param o seu código<p>
<p>Vai retornar um status <b>200</b> e: </p>

```js
[
  {
    "id": 9,
    "model": "Modelo 69",
    "price": 55,
    "brand": "Gzs879",
    "startDate": "25/10/2018",
    "endDate": "29/10/2018",
    "color": "BLACK",
    "code": "mm84742547585215"
  }
]

```



- Rota[DELETE]: "/celphone/:code"

<p> Essa rota irá apagar um celular pelo seu código<p>
<p>Vai retornar um status <b>200</b> e: </p>

```js
Celular deletado

```

- Rota[PUT]: "/celphone/id"
<p> Essa rota permite atualizar um celular dentro das restrições<p>
<p>Deve ser enviado no Body as informações a serem atualizadas:</p>

```js
{
	"model":"Modelo 69",
	"price":55,
	"brand":"Gzs879",
	"startDate":"25/10/2018",
	"endDate":"29/10/2018",
	"color":"BLACK",
	"code":"mm84742547585215"
}
```

<p>Vai retornar um status <b>200</b> e: </p>

```js
{
  "success": "Success"
}
```