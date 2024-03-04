import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import * as navBarStyles from "../styles/nav-bar.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function NavBar() {
  const data = useStaticQuery(graphql`
    query NavbarInfo {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "android-chrome-192x192.png" }) {
        id
        childImageSharp {
          gatsbyImageData(
            blurredOptions: { width: 10 }
            layout: FIXED
            placeholder: BLURRED
            height: 50
            width: 50
          )
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;
  const logo = getImage(data.file.childImageSharp);
  return (
    <nav className={navBarStyles.nav}>
      <Link to="/">
        <GatsbyImage
          image={logo}
          imgClassName={navBarStyles.logo}
          objectFit="contain"
          alt="logo"
        />
      </Link>
      <h1>{title}</h1>
      <div className={navBarStyles.links}>
        <Link to="/books">Books</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
