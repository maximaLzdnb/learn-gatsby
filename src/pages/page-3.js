import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'

const getFileData = graphql`
{
  allFile {
    edges {
      node {
        relativePath
        size
        extension
        birthTime
      }
    }
  }
}
`

export default () => {
  return (
    <Layout>
      <h1>Page 3</h1>
      <h3>Files data</h3>
      <StaticQuery
        query={getFileData}
        render={data => (
          <table>
            <thead>
              <th>Relative Path</th>
              <th>Size</th>
              <th>Extension</th>
              <th>Birthtime</th>
            </thead>
            <tbody>
              {data.allFile.edges.map((edge, index) => (
                <tr key={index}>
                  <td>{edge.node.relativePath}</td>
                  <td>{edge.node.size}</td>
                  <td>{edge.node.extension}</td>
                  <td>{edge.node.birthTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      />

      <Link to="/page-2">Go to page 2</Link>
    </Layout>
  )
}
