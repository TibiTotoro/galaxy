import React from 'react'
import Parser from 'html-react-parser'
import { Link } from 'react-scroll'
import domToReact from 'html-react-parser/lib/dom-to-react'


const PostContent = ({ content, media }) => {
  const postContent = Parser(content, {
    replace: domNode => {
      if (domNode.name === 'figure') {
        domNode.attribs.class = 'Post__figure'
    }
      if (domNode.name === 'img') {
        let image = media.filter(m => {
          return m.node.source_url === domNode.attribs.src
        })
        if (image.length > 0) {
         image = image[0].node.localFile
          return <div className="gatsby-image-wrapper"><img src={image.childImageSharp.fluid.originalImg } alt={domNode.attribs.alt}  />
          </div>

        }
      }
     
    
      // Оглавление
      if (domNode.name === 'div' && domNode.attribs.id === 'description') {
        domNode.attribs.class = 'Post__toc'
      }
      if (domNode.name === 'li' && domNode.parent.attribs.class === 'toc_list') {
        let anchorLink = domNode.children[0].attribs.href.slice(1)
        return (
          <li className="Post__tocItem">
            <Link
              activeClass="active"
              className="Post__tocLink"
              to={anchorLink}
              spy={true}
              smooth={true}
              duration={500}>
              {domNode.children[0].children[0].data}
            </Link>
          </li>
        )
      }
      // галерея
     /* if (
        domNode.name === 'ul' &&
        domNode.attribs.class &&
        domNode.attribs.class.includes('wp-block-gallery')
      ) { 
        let images = []
        const galleryItems = domNode.children.map(function(slideItem) {
          slideItem.name = 'div'
          let image = media.filter(m => {
            return m.node.source_url === slideItem.children[0].children[0].attribs.src
          })

          image = image[0].node.localFile
          images.push({
            original: image.childImageSharp.fluid.originalImg,
            thumbnail: image.childImageSharp.fixed.src,
            originalAlt: slideItem.children[0].children[0].attribs.alt,
            thumbnailAlt: slideItem.children[0].children[0].attribs.alt + " - миниатюра"
          })
        })
        return (      
          <ImageGallery
            showFullscreenButton={true}
            items={images}
            showPlayButton={false}
            showNav={true}      
            useBrowserFullscreen={true}                
          />
        )
      }*/

      // закрываем ссылки

      if (domNode.name === 'a' && ((domNode.attribs.href.indexOf('galaxy3d.ru') + 1)) === 0 ) {
        return (
          <span className="link" data-link={domNode.attribs.href} onClick={function(){window.open(domNode.attribs.href);return false;}}>{domNode.children[0].data}</span>
        )
      }
    },
  })

  return <main className="Post__content">{postContent}</main>
}

export default PostContent
