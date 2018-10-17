import React from 'react';
import { Link } from 'gatsby';
import styles from "./side-nav.module.css";

const SideNav = ({ content }) => (
    <div className={styles.container}>
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {content.sections.map((section,index) =>
            <div key={index}>
              <Link to={section.anchor}>{section.name}</Link>
              {section.children.map(childSection => <h6>{childSection.name}</h6>)}
            </div>
            )
          }
        </Link>
      </h3>
    </div>
)

function formatAnchor(sectionName) {

}

export default SideNav
