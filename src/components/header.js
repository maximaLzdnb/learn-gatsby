import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import gatsbyLogo from '../images/gatsby-icon.png'

const isActive = props => ({ isCurrent }) => {
  return { className: isCurrent ? 'active' : 'navlink' }
}

const NavLink = props => <Link getProps={isActive} {...props} />


export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header>
        <span style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <img src={gatsbyLogo} alt="Gatsby Garb" style={{ width: '50px' }} />
          <h1><NavLink to="/">{data.site.siteMetadata.title}</NavLink></h1>
        </span>

        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/products">Store</NavLink>
        

        {/* Shopping Cart Summary */}
        <div
        className="snipcart-summary snipcart-checkout">
          <div>
            <strong>My Cart</strong>
            <div><span className="snipcart-total-items"></span>{" "}Items in cart</div>
            <div>Total price <span className="snipcart-total-price"></span></div>
          </div>
        </div>
      </header>
    )}
  />
)