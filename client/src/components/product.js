import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby-link"

const Product = ({ product }) => {
  const image = getImage(product.imageSharp)

  return (
    <Link to={`/product/${product.id}`} className="product-item">
      <div className="product-item__category-label">{product.category}</div>
      <GatsbyImage image={image} alt={product.title} />
      <div className="product-item__info">
        <h3>{product.title}</h3>
        <span className="product-item__price">{product.price}$</span>
        <button className="product-item__button">Add to bag</button>
      </div>
    </Link>
  )
}

export default Product
