import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../layouts/Layout";
import * as styles from "../styles/home.module.css";

const IndexPage = ({data}) => {
  const {description,
    title,
    welcome} = data.site.siteMetadata
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{welcome}</h1>
          <hr />
          <h2>{title} {description}</h2>
        </div>
        <img src="/android-chrome-512x512.png" alt="logo" className={styles.banner}/>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query HomeInfo {
    site {
      siteMetadata {
        description
        title
        welcome
      }
    }
  }
`

export default IndexPage;

export const Head = () => <title>Home Page</title>;
