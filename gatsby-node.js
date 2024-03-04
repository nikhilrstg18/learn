const path = require('path')

exports.createPages = async (obj) => {
  console.log(obj);
  const { data } = await obj.graphql(`
query BookInfo {
    allMarkdownRemark(filter: {}, sort: {frontmatter: {stack: ASC}}) {
      nodes {
        frontmatter {
          metaDescription
          metaTitle
          slug
          stack
          title
        }
        html
        id
        tableOfContents(pathToSlugField: "")
      }
    }
  }
`);

data.allMarkdownRemark.nodes.forEach(node => {
    obj.actions.createPage({
        path:`/books/${node.frontmatter.slug}`,
        component:path.resolve('./src/templates/book.js'),
        context:{
            slug:node.frontmatter.slug
        }
    })
});
};
