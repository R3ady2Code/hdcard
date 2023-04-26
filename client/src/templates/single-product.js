import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby-link"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SingleProduct = ({ data }) => {
  const { getProduct } = data.products
  const image = getImage(getProduct.imageSharp)
  console.log(getProduct)
  return (
    <Layout>
      <Seo title={`Product | ${getProduct.title}`} />
      <div className="product">
        <div className="product__image">
          <div className="product__rating">{getProduct.rating.rate}</div>
          <GatsbyImage image={image} alt={getProduct.title} />
        </div>
        <div className="product__info">
          <h2>{getProduct.title}</h2>
          <span>{getProduct.category}</span>
          <p>{getProduct.description}</p>
          <div className="product__footer">
            <h3>{getProduct.price} $</h3>
            <Link to="/">go back</Link>
            <button>add to bag</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SingleProduct

export const query = graphql`
  query ProductQuery($id: Int) {
    products {
      getProduct(id: $id) {
        price
        title
        category
        description
        image
        imageSharp {
          childImageSharp {
            gatsbyImageData(width: 320, formats: AUTO, placeholder: BLURRED)
          }
        }
        rating {
          rate
        }
      }
    }
  }
`
