/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const _ = require('lodash')
const path = require('path')
const {
    createFilePath
} = require('gatsby-source-filesystem')


const getOnlyPublished = edges =>
    _.filter(edges, ({
        node
    }) => node.status === 'publish')

const moment = require('moment');

const buildDate = 'build dated ' + moment().format('Do MMMM YYYY, h:mm');

exports.createPages = ({
    actions,
    graphql
}) => {
    const {
        createPage
    } = actions

    return graphql(`
        {
          allWordpressPost {
            edges {
              node {
                id
                slug
                status
                categories {
                    name
                    slug
                }
              }
            }
          }
        }
      `)
        .then(result => {
            if (result.errors) {
                result.errors.forEach(e => console.error(e.toString()))
                return Promise.reject(result.errors)
            }
            
            const postTemplate = path.resolve(`./src/templates/post.js`)
            //const blogTemplate = path.resolve(`./src/templates/blog.js`)

            // In production builds, filter for only published posts.
            const allPosts = result.data.allWordpressPost.edges
            const posts =
                process.env.NODE_ENV === 'production' ?
                getOnlyPublished(allPosts) :
                allPosts

            // Iterate over the array of posts
            _.each(posts, ({
                node: post
            }) => {
                // Create the Gatsby page for this WordPress post
                createPage({
                    path: `/${post.categories[0].slug}/${post.slug}/`,
                    component: postTemplate,
                    context: {
                        id: post.id,
                        buildDate: 'build dated ' 
                    },
                })
            })
        })
        .then(() => {
            return graphql(`
        {
          allWordpressCategory(filter: { count: { gt: 0 } }) {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
        }
      `)
        })
        .then(result => {

            if (result.errors) {
                result.errors.forEach(e => console.error(e.toString()))
                return Promise.reject(result.errors)
            }

            const categoriesTemplate = path.resolve(`./src/templates/category.js`)

            // Create a Gatsby page for each WordPress Category
            _.each(result.data.allWordpressCategory.edges, ({
                node: cat
            }) => {
                createPage({
                    path: `/${cat.slug}/`,
                    component: categoriesTemplate,
                    context: {
                        name: cat.name,
                        slug: cat.slug
                     },
                })
            })
        })
        .then(() => {
            return graphql(`
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `)
        })
        .then(result => {
            if (result.errors) {
                result.errors.forEach(e => console.error(e.toString()))
                return Promise.reject(result.errors)
            }

            const pageTemplate = path.resolve(`./src/templates/page.js`)

            // Create a Gatsby page for each WordPress Category
            _.each(result.data.allWordpressPage.edges, ({
                node: page
            }) => {
                // Create the Gatsby page for this WordPress post
                createPage({
                    path: `/${page.slug}/`,
                    component: pageTemplate,
                    context: {
                        id: page.id,
                    },
                })
            })
        })

}



exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~c": path.resolve(__dirname, "src/components"),
        "~cn": path.resolve(__dirname, "src/containers"),
        "~content": path.resolve(__dirname, "src/content"),
        "~p": path.resolve(__dirname, "src/pageComponents"),
        "~l": path.resolve(__dirname, "src/layout"),
        "~s": path.resolve(__dirname, "src/styles"),
        "~store": path.resolve(__dirname, "src/stores"),
      }
    }
  });
};
