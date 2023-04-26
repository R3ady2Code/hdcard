const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')

const app = express()

const products = require('./db')

app.use(cors())

const root = {
	getAllProducts: () => {
		return products
	},
	getProduct: ({ id }) => {
		return products.find(products => products.id === id)
	},
}

app.use(
	'/graphql',
	graphqlHTTP({
		graphiql: true,
		schema,
		rootValue: root,
	})
)

app.listen(3000, () => console.log('Server is listening'))
