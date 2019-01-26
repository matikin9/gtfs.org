import React from 'react';
import styles from './footer.module.css';
import { Link } from 'gatsby';

const Footer = (props) => {
  const { className } = props;
  return (
    <div className={[styles[className], styles.footer].join(' ')}>
      <div className="container">
        <div className={styles.footerDisclaimer}>Except as otherwise noted, the content of this page is licensed under the <a href="https://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 License</a>, and code samples are licensed under the <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache 2.0 License.</a></div>
        <div className={styles.footerCredits}>
          <Link to="/about">About</Link>
          <a href="https://mobilitydata.org/">Mobility Data</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
