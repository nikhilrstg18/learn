import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../layouts/Layout";
import * as booksStyles from "../../styles/books.module.css";

const books2 = [
  {
    key: "js",
    to: "/js",
    name: "Javascript",
    color:[
      booksStyles.bookCover,
      booksStyles.yellow,
    ].join(" ")
  },
  {
    key: "dotnet",
    to: "/dotnet",
    name: ".Net",
    color:[
      booksStyles.bookCover,
      booksStyles.purple,
    ].join(" ")
  },
  {
    key: "py",
    to: "/py",
    name: "Python",
    color:[
      booksStyles.bookCover,
      booksStyles.blue,
    ].join(" ")
  },
  {
    key: "ms-sql",
    to: "/ms-sql",
    name: "SqlServer",
    color:[
      booksStyles.bookCover
    ].join(" ")
  },
  {
    key: "mongo",
    to: "/mongo",
    name: "MongoDB",
    color:[
      booksStyles.bookCover,
      booksStyles.green,
    ].join(" ")
  },
];
export default function Books({data}) {
  const books = data.allMarkdownRemark.nodes.filter(x=>!x?.parent?.relativeDirectory?.includes("/"));
  return (
    <Layout>
      <section>
        <h1>Books</h1>
        <div className={booksStyles.books}>
          {books.map((book) => {
            const {slug, title, stack} = book.frontmatter;
            return (
            <Link to={slug} title={title} key={book.id}>
              <div className={booksStyles.bookWrapper}>
                <div className={booksStyles.book}>
                  <div
                    className={books2.find(x=>x.key === slug)?.color}>
                    <div className={booksStyles.bookSkin}>{stack}</div>
                  </div>
                  <div
                    className={[
                      booksStyles.bookPage,
                      booksStyles.ruled,
                    ].join(" ")}></div>
                </div>
              </div>
            </Link>
          )})}
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BooksInfo {
    allMarkdownRemark(filter: {parent: {}}, sort: {frontmatter: {stack: ASC}}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          next
          prev
        }
        id
        parent {
          ... on File {
            relativeDirectory
          }
        }
      }
    }
  }
`
