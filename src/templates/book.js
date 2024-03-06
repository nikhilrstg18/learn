import { graphql, Link } from "gatsby";
import React from "react";
import BookLayout from "../layouts/BookLayout";
import * as styles from "./../styles/book.module.css";

export default function Book({ data }) {
  const { html, frontmatter, tableOfContents, timeToRead, featuredImg } = data.markdownRemark;
  const { title, stack, next, prev } = frontmatter;

  return (
    <BookLayout content={tableOfContents}>
      <div className={styles.book}>
        <h1>{title}</h1>
        <cite>{stack} - <span>{timeToRead}</span>min&nbsp;read</cite>
        <div>{/* <GatsbyImage  alt=""/> */}</div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div className={styles.np}>
          <Link to={prev}>{prev ? "Prev" : ""}</Link>
          <Link to={next}>{next ? "Next" : ""}</Link>
        </div>
      </div>
    </BookLayout> 
  );
}
export const query = graphql`
  query BookInfo($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        stack
        title
        next
        prev
      }
      id
      tableOfContents(maxDepth: 6)
      timeToRead
    }
  }
`;
