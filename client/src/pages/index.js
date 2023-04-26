import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import Product from "../components/product"

const IndexPage = ({ data }) => {
  const { getAllProducts } = data.products

  return (
    <Layout>
      <div className="products">
        {getAllProducts.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    products {
      getAllProducts {
        id
        category
        price
        title
        image
        imageSharp {
          childImageSharp {
            gatsbyImageData(
              width: 200
              formats: AUTO
              placeholder: DOMINANT_COLOR
            )
          }
        }
      }
    }
  }
`
