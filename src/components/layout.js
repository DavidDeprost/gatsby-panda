import React from "react"
import { css } from "@emotion/core"
import { StaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: ${rhythm(2)};
          `}
        >
          <Link to={`/`} >
            <h3>
              {data.site.siteMetadata.title}
            </h3>
          </Link>

          <Link to={`/about/`} >
            About
          </Link>

          <Link to={`/files/`} >
            Files
          </Link>

        </div>

        {children}

      </div>
    )}
  />
)
