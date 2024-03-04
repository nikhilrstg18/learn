import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../layouts/Layout";
import * as styles from "../styles/home.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({data}) => {
  const {description,
    title,
    welcome} = data.site.siteMetadata;
  const image = getImage(data.file.childImageSharp)
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{welcome}</h1>
          <hr />
          <h2>{title} {description}</h2>
        </div>
        <GatsbyImage image={image} imgClassName={styles.banner} objectFit="contain" alt="banner"/>
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
    file(relativePath: {eq: "android-chrome-512x512.png"}) {
      id
      childImageSharp {
        gatsbyImageData(
          height: 256
          width: 256
          aspectRatio: 1
        )
      }
    }
  }
`

export default IndexPage;

export const Head = () => <title>Home Page</title>;
