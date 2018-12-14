import React from 'react';
import { Link } from 'gatsby';
import styles from "./docs-option.module.css";

const DocsOption = ({content}) => (
  <div className={styles.container}>
    <Link to={content.link}>
      <h3>{content.title}</h3>
      <p>{content.description}</p>
    </Link>
  </div>
)


export default DocsOption
