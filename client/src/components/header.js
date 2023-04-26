import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="header">
    <Link to="/" className="header__title">
      {siteTitle}
    </Link>
    <span className="header__subtitle">
      by{" "}
      <a href="https://github.com/R3ady2Code" target="_blank" rel="noreferrer">
        @ready2code
      </a>
    </span>
  </header>
)

export default Header
