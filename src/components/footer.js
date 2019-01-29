import React from 'react';
import styles from './footer.module.css';
import { Link } from 'gatsby';

const Footer = (props) => {
  const { className } = props;
  return (
    <div className={[styles[className], styles.footer].join(' ')}>
      <div className="container">
        <div className={styles.footerCredits}>
          <Link to="/about">About</Link>
          <Link to="/license">License</Link>
          <a href="https://mobilitydata.org/">Mobility Data</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
