/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "bootstrap/dist/css/bootstrap.min.css";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "./cover.css";
import Header from "./header";
import ILayoutProps from "./ILayoutProps";

export default function Layout(props: ILayoutProps): JSX.Element {
  const { children } = props
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
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer className="mastfoot mt-auto">
        <div className="inner">
          © {new Date().getFullYear()}, Trident Professional Services | <a href={"https://squareup.com/"}>Square</a> | <a href={"https://www.gatsbyjs.org/"}>Gatsby</a>
        </div>
      </footer>
    </div>
  )
}
