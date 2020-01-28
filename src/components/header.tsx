import { Link } from "gatsby"
import React from "react"
import IHeaderProps from "./IHeaderProps"

export default function Header(props: IHeaderProps): JSX.Element {
  const { siteTitle } = props
  return (
    <header className={"masthead mb-auto"}>
      <div className={"inner"}>
        <h3 className="masthead-brand">{siteTitle}</h3>
        <nav className="nav nav-masthead justify-content-center">
          <Link className="nav-link active" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/products">
            Products
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
