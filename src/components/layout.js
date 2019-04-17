import React from "react"
import { css } from "@emotion/core"
import { StaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const bigLandscapeWidth = `60vw`;
const smallLandscapeWidth = `40vw`;
const portraity = `(max-aspect-ratio: 3/2)`;
const bigPortraitWidth = `95vw`;
const smallPortraitWidth = `80vw`;

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
          max-width: ${bigLandscapeWidth};
          @media ${portraity} {
            max-width: ${bigPortraitWidth};
          }

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
          <Link
            to={`/`}
            css={css`
              padding: ${rhythm(.5)};
            `}
          >
            <h3>
              {data.site.siteMetadata.title}
            </h3>
          </Link>

          <Link
            to={`/about/`}
            css={css`
              padding: ${rhythm(.5)};
            `}
          >
            About
          </Link>

          <Link
            to={`/files/`}
            css={css`
              padding: ${rhythm(.5)};
            `}
          >
            Files
          </Link>

        </div>

        <div
          css={css`
            margin: 0 auto;
            width: ${smallLandscapeWidth};
            @media ${portraity} {
              width: ${smallPortraitWidth};
            }
          `}
        >
          {children}
        </div>

      </div>
    )}
  />
)
