import React from "react";
import { Link } from "gatsby";
import Layout from "../../layouts/Layout";
import * as booksStyles from "../../styles/books.module.css";

const books = [
  {
    key: "js",
    to: "/books/js",
    name: "Javascript",
  },
  {
    key: "dotnet",
    to: "/books/dotnet",
    name: ".Net",
  },
  {
    key: "py",
    to: "/books/py",
    name: "Python",
  },
  {
    key: "ms-sql",
    to: "/books/ms-sql",
    name: "SqlServer",
  },
  {
    key: "mongo",
    to: "/books/mongo",
    name: "MongoDB",
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
                    className={[
                      booksStyles.bookCover,
                      booksStyles.blue,
                    ].join(" ")}>
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
