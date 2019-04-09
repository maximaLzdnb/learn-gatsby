import React from 'react'
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout'

const BlogPage = ({ data, pageContext }) => {
    const { currentPage, isFirstPage, isLastPage, totalPages } = pageContext
    const nextPage = `/blog/${String(currentPage + 1)}`
    const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${String(currentPage - 1)}`
    
    return (
    <Layout>
        <h1>{data.allMarkdownRemark.totalCount} Posts</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
                <h3><Link to={`/posts${node.fields.slug}`}>{node.frontmatter.title}</Link> - <span>{node.frontmatter.date}</span></h3>
                <div className="excerpt">
                    {node.excerpt}
                </div>
            </div>
        ))}

        <div className="pagination" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            maxWidth: 300,
            margin: '0 auto'
        }}>
            {!isFirstPage && (
                <Link to={prevPage} rel="prev">Prev</Link>
            )}

            {Array.from({ length: totalPages }, (_, index) => (
                <Link key={index} to={`/blog/${index === 0 ? "" : index + 1}`}>{index +1}</Link>    
            ))}

            {!isLastPage && (
                <Link to={nextPage} rel="next">Next</Link>
            )}
        </div>
    </Layout>

)}

export const pageQuery = graphql`
query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        skip: $skip,
        limit: $limit,
        sort: { order: DESC, fields: [frontmatter___date] }
    ) {
        totalCount
        edges {
            node {
                fields {
                    slug
                }
                id
                frontmatter {
                    title
                    date(formatString: "dddd Do MMMM YYYY", locale: "fr")
                }
                excerpt
            }
        }
    }
}
`

export default BlogPage