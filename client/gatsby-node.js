const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      products {
        getAllProducts {
          id
        }
      }
    }
  `)
  data.products.getAllProducts.forEach(product => {
    actions.createPage({
      path: `/product/${product.id}`,
      component: path.resolve(`./src/templates/single-product.js`),
      context: { id: product.id },
    })
  })
}
