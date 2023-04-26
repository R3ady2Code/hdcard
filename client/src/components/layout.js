import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./index.css"
import "./styles.css"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="container">{children}</div>
    </>
  )
}

export default Layout
