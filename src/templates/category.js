import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '~l/Layout/Layout'

/*
   <title>{filteredPosts[0].node.categories[0].yoast_meta.yoast_wpseo_title}</title>
                <meta name="description" content={`${filteredPosts[0].node.categories[0].yoast_meta.yoast_wpseo_metadesc}`} />
               yoast_meta {
                yoast_wpseo_title
                yoast_wpseo_metadesc
            } 
              
              
                */

const Category = props => {
    const { data, pageContext } = props
    const { edges: posts } = data.allWordpressPost
    const { name: category} = pageContext
    const filteredPosts = posts.map(item => ({
            ...item,
            node: item.node    
        })).filter(item => item.node.categories[0].name === `${category}`) 
    

    return (
        <Layout>
            <Helmet htmlAttributes={{ lang: 'ru', amp: undefined }} >
             
 
            </Helmet>

            <div className="wrapper"> 
                <h1 className="category__title">{category}</h1>      
              категория
            </div>    
            <div className="wrapper">
       
      </div>
        </Layout>
    )
}

export default Category


export const pageQuery = graphql`
  query getCats{
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          date
          categories {
            wordpress_id
            id
            name
            slug
           
          }
           
          featured_media {
            wordpress_id
            localFile {
              childImageSharp {
                fluid(maxWidth: 600) {
                  src
                  srcSet
                  sizes
                  aspectRatio
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        }
      }
    }
}
`

