import React from "react";
import { Link } from "gatsby";
import Layout from "../../layouts/Layout";
import * as booksStyles from "../../styles/books.module.css";

const books = [
  {
    key: "js",
    to: "/books/js",
    name: "Javascript",
    color:[
      booksStyles.bookCover,
      booksStyles.yellow,
    ].join(" ")
  },
  {
    key: "dotnet",
    to: "/books/dotnet",
    name: ".Net",
    color:[
      booksStyles.bookCover,
      booksStyles.purple,
    ].join(" ")
  },
  {
    key: "py",
    to: "/books/py",
    name: "Python",
    color:[
      booksStyles.bookCover,
      booksStyles.blue,
    ].join(" ")
  },
  {
    key: "ms-sql",
    to: "/books/ms-sql",
    name: "SqlServer",
    color:[
      booksStyles.bookCover
    ].join(" ")
  },
  {
    key: "mongo",
    to: "/books/mongo",
    name: "MongoDB",
    color:[
      booksStyles.bookCover,
      booksStyles.green,
    ].join(" ")
  },
];
export default function Books() {
  return (
    <Layout>
      <section>
        <h1>Books</h1>
        <div className={booksStyles.books}>
          {books.map((book) => (
            <Link to={book.to} title={book.name} key={book.key}>
              <div className={booksStyles.bookWrapper}>
                <div className={booksStyles.book}>
                  <div
                    className={book.color}>
                    <div className={booksStyles.bookSkin}>{book.name}</div>
                  </div>
                  <div
                    className={[
                      booksStyles.bookPage,
                      booksStyles.ruled,
                    ].join(" ")}></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
