import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '~l/Layout/Layout'

import PostContent from '~c/Post/PostContent'
/*<title>{data.wordpressPost.yoast_meta.yoast_wpseo_title}</title>
<meta name="description" content={`${data.wordpressPost.yoast_meta.yoast_wpseo_metadesc}`} />

<meta property="og:url"           content={`https://galaxy3d.ru/${categories[0].slug}/${slug}/`}  />
<meta property="og:type"          content="website" />
<meta property="og:title"         content={`${data.wordpressPost.yoast_meta.yoast_wpseo_title}`} />
<meta property="og:description"   content={`${acf.preview}`} />
<meta property="og:image"         content={`https://galaxy3d.ru/${acf.socialImg.localFile.childImageSharp.fluid.src}`} />
*/
/* yoast_meta {
            yoast_wpseo_title
            yoast_wpseo_metadesc
        }  
        acf {
            preview        
            summary
            summaryTitle
            socialImg {
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 2000) {
                            src
                        }                  
                    }
                }
            }
        }  
*/
const PostTemplate = props => {
   
  const { data,  pageContext } = props;
  const { edges: posts } = data.allWordpressPost
  const { edges: media } = data.allWordpressWpMedia

  const { date, content, featured_media, categories, slug, title, acf } = data.wordpressPost
  console.log(pageContext.buildDate)  
  return (
    <Layout>
        <Helmet htmlAttributes={{ lang: 'ru', amp: undefined }} >
     
        </Helmet>
        <PostContent content={content} media={media} />

    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
        title
        content
        date    
        slug
        categories {
            name
            slug
        }
       
        featured_media {
            localFile {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        src
                        srcSet
                        sizes
                        aspectRatio
                        presentationWidth
                    }
                }
            }
        }
    }    

    allWordpressWpMedia {
      edges {
        node {
          id
          source_url
          localFile {
            childImageSharp {
              fixed(width: 280, height: 200) {
                 ...GatsbyImageSharpFixed
              }
              fluid(maxWidth: 960) {
                    base64 
                    aspectRatio 
                    src 
                    srcSet
                    sizes
                    originalImg             
                }
              
            }
          }
        }
      }
    }
    allWordpressPost{
      edges {
        node {
          title
          slug
          date
          categories {
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
                    
            }         
              }
            }
          }
        }
      }
    }

    
  }
`
