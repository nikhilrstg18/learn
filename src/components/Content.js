import React from "react";
import * as styles from "../styles/content.module.css";

export default function Content({ content }) {
  return (
    <div className={styles.tableOfContent}>
      <h4>Table of Content</h4>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}
