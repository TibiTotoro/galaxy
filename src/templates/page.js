import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '~l/Layout/Layout'

//import '../styles/page.scss'
/*
<title>{data.wordpressPage.yoast_meta.yoast_wpseo_title}</title>
                <meta name="description" content= {`${data.wordpressPage.yoast_meta.yoast_wpseo_metadesc}`} />
              
              
               yoast_meta {
            yoast_wpseo_title
            yoast_wpseo_metadesc
        }  */
const pageTemplate = props => {
   
  const { data } = props;

  return (
    <Layout>
             <Helmet htmlAttributes={{ lang: 'ru', amp: undefined }} >
                
            </Helmet>
          
    <article className="page">
      <div className="wrapper">
        <h1 dangerouslySetInnerHTML={{ __html: data.wordpressPage.title }} className="page__title" />
        <main dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}  />
      </div>
    </article>
  
    </Layout>
  );
};

export default pageTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: {eq: $id}) {
        title
        content
        date(formatString: "MMMM DD, YYYY")
       
    }
}

`
