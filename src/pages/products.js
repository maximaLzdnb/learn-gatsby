import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const Products = ({ data: { allContentfulProduct } }) => (
    <Layout>
        <div>
            <h2>Garb Products</h2>
            {allContentfulProduct.edges.map(({node: product}) => (
                <div key={product.id}>
                    <Link to={`products/${product.slug}`}>
                        <h3>{product.name} - <span>${product.price}</span></h3>
                    </Link>
                    <Img style={{ maxWidth: 300 }} fluid={product.image.fluid} />
                </div>
            ))}
        </div>
    </Layout>  
)

export const query = graphql`
{
    allContentfulProduct {
        edges {
            node {
                id
                slug
                name
                price
                image {
                    fluid(maxWidth: 800) {
                        ...GatsbyContentfulFluid_tracedSVG
                    }
                }
            }
        }
    }
}
`

export default Products