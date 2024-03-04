import { graphql } from "gatsby";
import React from "react";
import BookLayout from "../layouts/BookLayout";
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import * as styles from "./../styles/book.module.css";

export default function Book({ data, location, pageContext }) {
  const { html, frontmatter, tableOfContents } = data.markdownRemark;
  const { title, metaTitle, slug } = frontmatter;
  const {
    breadcrumb: { crumbs },
  } = pageContext

  // Example of dynamically using location prop as a crumbLabel
  // NOTE: this code will not work for every use case, and is only an example
  const customCrumbLabel = location.pathname.toLowerCase().replace('-', ' ')

  return (
    <BookLayout content={tableOfContents}>
      <div className={styles.book}>
      {/* <Breadcrumb
            crumbs={crumbs}
            crumbSeparator=" - "
            crumbLabel={customCrumbLabel}
          /> */}
        <h1>{title}</h1>
        <h2>{metaTitle}</h2>
        <div>{/* <GatsbyImage  alt=""/> */}</div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </BookLayout>
  );
}
export const query = graphql`
  query BookInfo($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        metaDescription
        metaTitle
        slug
        stack
        title
      }
      id
      tableOfContents(maxDepth: 10)
    }
  }
`;
