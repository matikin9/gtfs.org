import React from 'react';
import { Link } from 'gatsby';
import styles from "./side-nav.module.css";

const SideNav = ({ content }) => (
    <div className={styles.container}>
      {console.log('received contents:', content)}
      {/* <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        > */}
          {content.map((section,index) =>
            <div key={index}>
              <li><Link to={section.anchor}>{section.name}</Link></li>
              <div style={{ marginLeft: 10 }}>
                {section.children && section.children.map((firstChild,indexTwo) =>
                  <li key={indexTwo}>
                    <Link to={firstChild.anchor} className={styles.subcategory}>{firstChild.name}</Link>
                      {firstChild.children && firstChild.children.map((secondChild, indexThree) =>
                        <div style={{ marginLeft: 10 }}>
                          <li key={indexThree}>{secondChild.name}</li>
                            {secondChild.children && secondChild.children.map((thirdChild) =>
                              <li style={{ marginLeft: 10 }}>{thirdChild}</li>
                            )}
                        </div>
                      )}
                  </li>
                )}
              </div>
            </div>
            )
          }
        {/* </Link>
      </h3> */}
    </div>
)


export default SideNav
