import React from 'react';
import { Link } from 'gatsby';
import styles from "./docs-option.module.css";

const DocsOption = ({content}) => (
  <div className={styles.container}>
    <Link to={content.link}>
      <h4>{content.title}</h4>
      <p>{content.blurb}</p>
    </Link>
  </div>
)


export default DocsOption
