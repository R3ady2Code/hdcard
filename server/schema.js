const { buildSchema } = require('graphql')

const schema = buildSchema(`
	type Rating {
		rate: Float, 
		count: Int
	}

	type Product {
		id: Int,
		title: String,
		price: Float,
		description: String,
		category: String,
		image: String,
		rating: Rating
	}

	type Query {
		getAllProducts: [Product], 
		getProduct(id: Int): Product
	}
`)

module.exports = schema
