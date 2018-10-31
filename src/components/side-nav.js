import React from 'react';
import { Link } from 'gatsby';
import styles from "./side-nav.module.css";

const SideNav = ({ content }) => (
    <div className={styles.container}>
      {/* <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        > */}
          {content.forEach((section,index) =>
            <div key={index}>
              <li><Link to={section.anchor}>{section.name}</Link></li>
              {/* <div style={{ marginLeft: 10 }}>
                {section.children.map((childSection,index) => <li key={index}><Link to={childSection.anchor} className={styles.subcategory}>{childSection.name}</Link></li>)}
              </div> */}
            </div>
            )
          }
        {/* </Link>
      </h3> */}
    </div>
)


export default SideNav
